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
    const etherscanApiKey = 'YC71TGWE9QAHYH46G5FW257K6CIHJJZ2A6'; // Replace with your Etherscan key
    const { data } = await axios.get(
      `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${etherscanApiKey}`
    );

    console.log('🚀 ~ file: profile.js:28 ~ data:', data);
    transactionsEl.innerHTML = '';

    if (data.result && data.result.length > 0) {
      const recentTxs = data.result; // Last 5 transactions
      const transactionsEl = document.getElementById('transactions');
      transactionsEl.innerHTML = ''; // Clear loading

      recentTxs.forEach((tx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
    <td class="px-4 py-2">
      <a href="https://sepolia.etherscan.io/tx/${
        tx.hash
      }" target="_blank" style="color: #00f2ff">
        ${tx.hash.slice(0, 15)}...
      </a>
    </td>
    <td class="px-4 py-2">${tx.from.slice(0, 15)}...</td>
    <td class="px-4 py-2">${
      tx.to ? tx.to.slice(0, 15) : 'Contract Creation'
    }...</td>
    <td class="px-4 py-2">${web3.utils.fromWei(tx.value, 'ether')}</td>
    <td class="px-4 py-2 whitespace-nowrap">${new Date(
      tx.timeStamp * 1000
    ).toLocaleString()}</td>
  `;
        transactionsEl.appendChild(row);
      });
    } else {
      transactionsEl.innerHTML = '<li>No recent transactions found.</li>';
    }
  } catch (error) {
    console.error('Error loading profile:', error);
    transactionsEl.innerHTML = '<li>Unable to fetch transactions.</li>';
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
