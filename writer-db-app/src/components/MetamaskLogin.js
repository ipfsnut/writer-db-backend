import React from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

function MetamaskLogin() {
  async function handleLogin() {
    const provider = await detectEthereumProvider();
    if (provider) {
      // We can access the window.ethereum object.
      console.log('Ethereum successfully detected!');
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected wallet address:', accounts[0]);
    } else {
      console.error('Please install MetaMask!');
    }
  }

  return (
    <div>
      <button onClick={handleLogin}>Login with Metamask</button>
    </div>
  );
}

export default MetamaskLogin;
