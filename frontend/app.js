const loginBtn = document.getElementById('loginBtn');
const statusEl = document.getElementById('status');

let authToken = localStorage.getItem('authToken') || null;

if (authToken) {
  window.location.href = 'dashboard.html'; // Redirect if already logged in
}

loginBtn.onclick = async () => {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask not found! Install it.');
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const address = accounts[0];
    statusEl.textContent = 'Wallet connected: ' + address;

    const { data } = await axios.post('http://localhost:3000/request-nonce', {
      address,
    });
    const message = `Login nonce: ${data.nonce}`;

    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [message, address],
    });

    const response = await axios.post('http://localhost:3000/verify', {
      address,
      signature,
    });

    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('walletAddress', address);
      statusEl.textContent = 'Login successful! Redirecting...';
      setTimeout(() => (window.location.href = 'dashboard.html'), 1000);
    } else {
      statusEl.textContent = 'Login failed!';
    }
  } catch (error) {
    console.error(error);
    statusEl.textContent =
      'Error: ' + (error.message || 'Something went wrong');
  }
};
