const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [ /* ABI here */ ];

let web3, contract, userAddress;
const token = localStorage.getItem('authToken');

async function init() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    userAddress = accounts[0];
    contract = new web3.eth.Contract(contractABI, contractAddress);
    loadMyNFTs();
  } else {
    alert('Install MetaMask');
  }
}

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    // Upload to nft.storage via backend
    const uploadRes = await fetch('http://localhost:3000/upload-nft', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    const { tokenURI } = await uploadRes.json();
    const tokenId = Date.now();

    // Mint NFT
    const mintTx = await contract.methods
      .safeMint(userAddress, tokenId, tokenURI)
      .send({ from: userAddress });

    console.log('Minted:', mintTx);

    // Save to backend
    await fetch('http://localhost:3000/save-minted-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ tokenId, uri: tokenURI })
    });

    alert('NFT minted and saved!');
    loadMyNFTs();
    form.reset();
  } catch (err) {
    console.error('Error:', err);
    alert('Something went wrong');
  }
});

async function loadMyNFTs() {
  const res = await fetch('http://localhost:3000/my-nfts', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  const list = document.getElementById('nftList');
  list.innerHTML = '';

  data.nfts.forEach(nft => {
    const card = document.createElement('div');
    card.className = 'p-4 bg-gray-700 rounded-lg shadow-md';

    card.innerHTML = `
      <p><strong>Token ID:</strong> ${nft.tokenId}</p>
      <p><strong>URI:</strong> <a href="${nft.uri}" target="_blank" class="text-blue-400 underline">View Metadata</a></p>
      <p class="text-sm text-gray-300">Minted: ${new Date(nft.mintedAt).toLocaleString()}</p>
    `;
    list.appendChild(card);
  });
}

init();
