# 🚀 Web3 Wallet Dashboard

A 3-page **Web3 Wallet Dashboard** built with **MetaMask login**, **JWT authentication**, **Ethereum wallet details**, and now **NFT Minting with file upload**.  
This project displays wallet address, ETH balance, live Ethereum price, recent transactions, and allows users to mint NFTs with custom images via `nft.storage`.

## ✅ Features

- **MetaMask Wallet Login** (Web3 + `personal_sign` for secure login)
- **JWT-based Authentication** (Node.js + Express backend)
- **Ethereum Wallet Info**:
  - Wallet Address
  - ETH Balance
  - Live ETH Price (via CoinGecko API)
- **Recent Transactions** (via Etherscan API)
- **NFT Minting Flow**:
  - Calls `safeMint` on Ethereum smart contract
- **Pages**:
  1. `index.html` – Wallet Login
  2. `dashboard.html` – Wallet overview + NFT minting
  3. `profile.html` – Wallet address & Token balance & transaction history
- **Neon/Glassmorphism UI** for a clean modern Web3 look

---

## 💻 Tech Stack

### Frontend
- HTML, CSS (Glassmorphism + Neon UI)
- JavaScript (Web3.js + Axios)
- MetaMask Integration
- Toastify for notifications

### Backend
- Node.js + Express
- JWT Authentication
- Web3.js (Ethereum utilities)
- nft.storage (for IPFS NFT metadata storage)
- CoinGecko API (ETH price)
- Etherscan API (transaction history)
- Multer (for file uploads)
- CORS, Helmet, and other Express middlewares

---

## 📁 Project Structure

