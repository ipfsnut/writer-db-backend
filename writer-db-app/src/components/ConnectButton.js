import React, { useState, useEffect } from 'react';
import { getAccounts, getChainId, getChainName } from './utils';

const ConnectButton = ({ onConnect }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [chainName, setChainName] = useState('');

  useEffect(() => {
    async function connect() {
      const accounts = await getAccounts();
      const chainId = await getChainId();
      const chainName = await getChainName(chainId);

      if (accounts && chainId && chainName) {
        setIsConnected(true);
        setAccount(accounts[0]);
        setChainName(chainName);
        onConnect();
      } else {
        setIsConnected(false);
        setAccount('');
        setChainName('');
      }
    }

    connect();
  }, [onConnect]);

  const handleConnect = async () => {
    const accounts = await getAccounts();
    const chainId = await getChainId();
    const chainName = await getChainName(chainId);

    if (accounts && chainId && chainName) {
      setIsConnected(true);
      setAccount(accounts[0]);
      setChainName(chainName);
      onConnect();
    } else {
      setIsConnected(false);
      setAccount('');
      setChainName('');
    }
  };

  return (
    <div>
      {isConnected ? (
        <p>Connected to {chainName} as {account}</p>
      ) : (
        <button onClick={handleConnect}>Connect to MetaMask</button>
      )}
    </div>
  );
};

export default ConnectButton;
