export const getChainName = async (chainId) => {
    switch (chainId) {
      case 1:
        return "Ethereum";
      case 3:
        return "Ropsten Test Network";
      case 4:
        return "Rinkeby Test Network";
      case 5:
        return "Goerli Test Network";
      case 42:
        return "Kovan Test Network";
      case 42161:
        return "Arbitrum";
      case 10:
        return "Optimism Testnet (Kovan)";
      case 77:
        return "Sokol Testnet (POA)";
      case 100:
        return "xDai Chain";
      case 137:
        return "Polygon Mainnet";
      case 80001:
        return "Polygon Mumbai Testnet";
      default:
        return "Unknown Network";
    }
  };
  
  export const getAccounts = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts;
      } catch (error) {
        console.error(error);
        return null;
      }
    } else {
      console.error('No ethereum provider found');
      return null;
    }
  };
  
  export const getChainId = async () => {
    if (window.ethereum) {
      try {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        return chainId;
      } catch (error) {
        console.error(error);
        return null;
      }
    } else {
      console.error('No ethereum provider found');
      return null;
    }
  };
  