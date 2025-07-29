const walletAddressEl = document.getElementById('walletAddress');
const walletBalanceEl = document.getElementById('walletBalance');
const transactionsEl = document.getElementById('transactions');
const backBtn = document.getElementById('backBtn');
const logoutBtn = document.getElementById('logoutBtn');

const walletAddress = localStorage.getItem('walletAddress');
const authToken = localStorage.getItem('authToken');

if (!authToken || !walletAddress) {
  window.location.href = 'index.html';
}

// Load Wallet Profile
async function loadProfile() {
  try {
    walletAddressEl.textContent = walletAddress;

    // Get ETH Balance
    const web3 = new Web3(window.ethereum);
    const balanceWei = await web3.eth.getBalance(walletAddress);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    walletBalanceEl.textContent = `${parseFloat(balanceEth).toFixed(4)} ETH`;

    // Fetch Recent Transactions from Etherscan (dummy if API not available)
    const etherscanApiKey = "YC71TGWE9QAHYH46G5FW257K6CIHJJZ2A6"; // Replace with your Etherscan key
    const { data } = await axios.get(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${etherscanApiKey}`
    );

    transactionsEl.innerHTML = "";

    if (data.result && data.result.length > 0) {
      const recentTxs = data.result.slice(0, 5); // Last 5 transactions
      recentTxs.forEach(tx => {
        const li = document.createElement('li');
        li.textContent = `Hash: ${tx.hash.slice(0, 10)}... | Value: ${web3.utils.fromWei(tx.value, 'ether')} ETH`;
        transactionsEl.appendChild(li);
      });
    } else {
      transactionsEl.innerHTML = "<li>No recent transactions found.</li>";
    }

  } catch (error) {
    console.error('Error loading profile:', error);
    transactionsEl.innerHTML = "<li>Unable to fetch transactions.</li>";
  }
}

// Navigation
backBtn.onclick = () => {
  window.location.href = 'dashboard.html';
};

logoutBtn.onclick = () => {
  localStorage.clear();
  window.location.href = 'index.html';
};

loadProfile();
