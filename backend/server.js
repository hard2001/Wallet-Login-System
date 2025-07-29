const express = require('express');
const bodyParser = require('body-parser');
const { Web3 } = require('web3');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const web3 = new Web3();

app.use(cors());
app.use(bodyParser.json());

const users = {}; // { address: { nonce: 123456 } }
const JWT_SECRET = 'MY_SUPER_SECRET_KEY';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.use(express.static(path.join(__dirname, '../frontend')));

// Step 1: Request a nonce
app.post('/request-nonce', (req, res) => {
  const { address } = req.body;
  if (!address) return res.status(400).json({ error: 'Address is required' });

  const nonce = Math.floor(Math.random() * 1000000); // random 6-digit
  users[address] = { nonce };
  return res.json({ nonce });
});

// Step 2: Verify signature
app.post('/verify', (req, res) => {
  const { address, signature } = req.body;
  if (!address || !signature)
    return res.status(400).json({ error: 'Missing data' });

  const message = `Login nonce: ${users[address]?.nonce}`;
  if (!message)
    return res.status(400).json({ error: 'No nonce found for this address' });

  // Recover address from signature
  const recoveredAddress = web3.eth.accounts.recover(message, signature);
  if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
    // Valid signature → create JWT
    const token = jwt.sign({ address }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: 'Invalid signature' });
  }
});

// Middleware for JWT validation
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1]; // Bearer <token>
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
};

// Protected route to test the token
app.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Protected data access granted!',
    user: req.user,
  });
});

// Get current gas price (in Gwei)

app.get('/gas-fee', verifyToken, async (req, res) => {
  try {
    let currency = req.query.currency || 'gwei';
    let gasPriceWei = await web3.eth.getGasPrice();
    gasPriceWei = gasPriceWei.toString();

    let gasPrice;
    let displayCurrency = currency;

    // Convert Ethereum units first
    if (['ether', 'usd', 'inr', 'gbp'].includes(currency)) {
      gasPrice = web3.utils.fromWei(gasPriceWei, 'ether');
    } else if (currency === 'gwei') {
      gasPrice = web3.utils.fromWei(gasPriceWei, 'gwei');
    } else if (currency === 'wei') {
      gasPrice = gasPriceWei;
    } else {
      return res.status(400).json({ error: 'Invalid currency selected' });
    }

    // Convert Ether to Fiat
    if (['usd', 'inr', 'gbp'].includes(currency)) {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price',
        { params: { ids: 'ethereum', vs_currencies: 'usd,inr,gbp' } }
      );

      const ethToFiatRate = data.ethereum[currency];
      const fiatValue = parseFloat(gasPrice) * ethToFiatRate;
      gasPrice = fiatValue < 0.01 ? fiatValue.toFixed(6) : fiatValue.toFixed(2);
      displayCurrency = currency.toUpperCase();
    }

    res.json({
      gasPrice: gasPrice.toString(),
      currency: displayCurrency,
      message: `Current gas price is ${gasPrice} ${displayCurrency}`,
    });
  } catch (error) {
    console.error('Error fetching gas price:', error.message);
    res.status(500).json({ error: 'Failed to fetch gas price' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
