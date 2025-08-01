const contractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8';
const contractABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'initialOwner',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC721IncorrectOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ERC721InsufficientApproval',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'approver',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidApprover',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidOperator',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidSender',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ERC721NonexistentToken',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];


// Cleaned-up and corrected script for NFT minting dashboard

const walletAddressEl = document.getElementById('walletAddress');
const walletBalanceEl = document.getElementById('walletBalance');
const ethPriceEl = document.getElementById('ethPrice');
const logoutBtn = document.getElementById('logoutBtn');
const profileBtn = document.getElementById('profileBtn');
const mintBtn = document.getElementById('mintBtn');
const myNFTBtn = document.getElementById('myNFTBtn');

const authToken = localStorage.getItem('authToken');
const walletAddress = localStorage.getItem('walletAddress');

if (!authToken) window.location.href = 'index.html';

async function fetchWalletData() {
  try {
    walletAddressEl.textContent = `Address: ${walletAddress}`;

    const web3 = new Web3(window.ethereum);
    const balanceWei = await web3.eth.getBalance(walletAddress);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    walletBalanceEl.textContent = `Balance: ${parseFloat(balanceEth).toFixed(4)} ETH`;

    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
    );
    ethPriceEl.textContent = `1 ETH = $${data.ethereum.usd}`;
  } catch (error) {
    console.error('Error fetching wallet data:', error);
  }
}

async function fetchGasFee() {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      document.getElementById('gasFee').textContent = 'Login required';
      return;
    }
    const response = await axios.get(
      'http://localhost:3000/gas-fee?currency=gwei',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { gasPrice, currency } = response.data;
    document.getElementById('gasFee').textContent = `${gasPrice} ${currency}`;
  } catch (error) {
    console.error('Error fetching gas fee:', error.message);
    document.getElementById('gasFee').textContent = 'Failed to fetch';
  }
}

async function mintNFT() {
  try {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const userAddress = accounts[0];
    const tokenId = Date.now();

    const tx = await contract.methods
      .safeMint(userAddress, tokenId)
      .send({ from: userAddress });

    await fetch('http://localhost:3000/save-minted-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify({ tokenId }),
    });

    showToast(`✅ NFT Minted! TX Hash: ${tx.transactionHash}`, 'success');
  } catch (err) {
    console.error('Minting failed:', err);
    showToast(`❌ Minting failed`, 'error');
  }
}

async function fetchMyNFTs() {
  const token = localStorage.getItem('authToken');
  if (!token) return alert('Please log in');

  try {
    const res = await fetch('http://localhost:3000/my-nfts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log('My NFTs:', data.nfts);
    // You can now render them in HTML
  } catch (err) {
    console.error('Failed to fetch NFTs:', err);
  }
}

function showToast(message, type = 'success') {
  Toastify({
    text: message,
    duration: 4000,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor:
      type === 'success'
        ? 'linear-gradient(to right, #00b09b, #96c93d)'
        : 'linear-gradient(to right, #ff5f6d, #ffc371)',
    stopOnFocus: true,
  }).showToast();
}

async function loadMyNFTs() {
  const token = localStorage.getItem('authToken');
  if (!token) return alert('Please log in');

  const nftList = document.getElementById('nftList');
  const loading = document.getElementById('loading');
  loading.innerText = 'Fetching your NFTs...';

  try {
    const res = await fetch('http://localhost:3000/my-nfts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    nftList.innerHTML = '';
    loading.remove();

    if (!data.nfts || data.nfts.length === 0) {
      nftList.innerHTML = '<p class="text-gray-400">You don’t own any NFTs.</p>';
      return;
    }

    for (const nft of data.nfts) {
      const uri = nft.uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
      const metadataRes = await fetch(uri);
      const metadata = await metadataRes.json();

      const nftCard = document.createElement('div');
      nftCard.className = 'bg-gray-800 rounded-lg p-4 shadow-md';
      nftCard.innerHTML = `
        <img src="${metadata.image}" alt="NFT Image" class="rounded w-full h-48 object-cover mb-4">
        <h2 class="text-xl font-semibold text-cyan-300 mb-1">${metadata.name}</h2>
        <p class="text-gray-300 text-sm">${metadata.description}</p>
        <p class="text-xs text-gray-500 mt-2">Token ID: ${nft.tokenId}</p>
      `;
      nftList.appendChild(nftCard);
    }
  } catch (err) {
    loading.innerText = 'Error loading NFTs.';
    console.error('Failed to fetch NFTs:', err);
  }
}

async function mintNFT() {
  const name = document.getElementById('nftName').value.trim();
  console.log("🚀 ~ file: dashboard.js:653 ~ name:", name)
  const description = document.getElementById('nftDescription').value.trim();
  const image = document.getElementById('nftImage').files[0];
  const loader = document.getElementById('loader');

  if (!name || !description || !image) {
    Toastify({ text: 'Please fill in all NFT details', style: { background: '#f00' } }).showToast();
    return;
  }

  loader.classList.remove('hidden');

  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);

    const uploadRes = await axios.post(
      'http://localhost:3000/upload-nft',
      formData,
      { headers: { Authorization: `Bearer ${authToken}` } }
    );

    console.log("🚀 ~ file: dashboard.js:677 ~ uploadRes:", uploadRes?.data)
    const { tokenURI } = uploadRes.data;
    const web3 = new Web3(window.ethereum);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const userAddress = accounts[0];
    const tokenId = Date.now();

    const contract = new web3.eth.Contract(contractABI, contractAddress);
    console.log("🚀 ~ file: dashboard.js:684 ~ contract:", contract)
    await contract.methods.safeMint(userAddress, tokenId).send({ from: userAddress });

    await axios.post(
      'http://localhost:3000/save-minted-token',
      { tokenId, uri: tokenURI },
      { headers: { Authorization: `Bearer ${authToken}` } }
    );

    Toastify({ text: '🎉 NFT Minted Successfully!', style: { background: 'green' } }).showToast();
    window.location.href = 'mynft.html';
  } catch (err) {
    console.error('Error minting NFT:', err);
    Toastify({ text: 'Error minting NFT', style: { background: '#f00' } }).showToast();
  } finally {
    loader.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchWalletData();
  fetchGasFee();

  mintBtn?.addEventListener('click', () => {
    const mintForm = document.getElementById('mintForm');
    mintForm.classList.toggle('hidden');
  });

  document.getElementById('submitMintBtn')?.addEventListener('click', mintNFT);

  myNFTBtn?.addEventListener('click', () => {
    document.getElementById('nftSection').classList.remove('hidden');
    document.getElementById('nftList').innerHTML = '';
    document.getElementById('loading').innerText = 'Loading...';
    loadMyNFTs();
  });

  profileBtn?.addEventListener('click', () => {
    window.location.href = 'profile.html';
  });

  logoutBtn?.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
  });
});
