const walletAddressEl = document.getElementById('walletAddress');
const walletBalanceEl = document.getElementById('walletBalance');
const ethPriceEl = document.getElementById('ethPrice');
const logoutBtn = document.getElementById('logoutBtn');

const authToken = localStorage.getItem('authToken');
const walletAddress = localStorage.getItem('walletAddress');

if (!authToken) {
  window.location.href = 'index.html'; // Redirect to login if not authenticated
}

// Fetch wallet balance
async function fetchWalletData() {
  try {
    walletAddressEl.textContent = `Address: ${walletAddress}`;

    // Fetch ETH balance
    const web3 = new Web3(window.ethereum);
    const balanceWei = await web3.eth.getBalance(walletAddress);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    walletBalanceEl.textContent = `Balance: ${parseFloat(balanceEth).toFixed(4)} ETH`;

    // Fetch ETH price from CoinGecko
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
    );
    ethPriceEl.textContent = `1 ETH = $${data.ethereum.usd}`;
  } catch (error) {
    console.error('Error fetching wallet data:', error);
  }
}

fetchWalletData();

// Logout
logoutBtn.onclick = () => {
  localStorage.clear();
  window.location.href = 'index.html';
};

const profileBtn = document.getElementById('profileBtn');
profileBtn.onclick = () => {
  window.location.href = 'profile.html';
};
