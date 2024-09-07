// File: src/display.js

const displayHeader = () => {
    console.log('Auto Bridge - Decentralized Bridge Tool');
  };
  
  const getEstimate = () => {
    // Implementasi estimasi gas
  };
  
  const transactionData = (address, amount, options) => {
    // Implementasi data transaksi
  };
  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const getAmount = (options) => {
    // Implementasi pengambilan jumlah
  };
  
  const getGasPrice = () => {
    // Implementasi pengambilan harga gas
  };
  
  module.exports = { displayHeader, getEstimate, transactionData, delay, getAmount, getGasPrice };
  