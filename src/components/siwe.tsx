import React, { useState, useEffect } from 'react';
import { BrowserProvider } from 'ethers';
import { SiweMessage } from 'siwe';

const SiweComponent: React.FC = () => {
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    if (window.ethereum) {
      const newProvider = new BrowserProvider(window.ethereum);
      setProvider(newProvider);
    }
  }, []);

  const domain = window.location.host;
  const origin = window.location.origin;

  const createSiweMessage = (address: string, statement: string) => {
    const message = new SiweMessage({
      domain,
      address,
      statement,
      uri: origin,
      version: '1',
      chainId: '1'
    });
    return message.prepareMessage();
  };

  const connectWallet = () => {
    if (provider) {
      provider.send('eth_requestAccounts', []).catch(() => console.log('user rejected request'));
    }
  };

  const signInWithEthereum = async () => {
    if (provider) {
      const signer = await provider.getSigner();
      const message = createSiweMessage(signer.address, 'Sign in with Ethereum to the app.');
      console.log(await signer.signMessage(message));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {/*<button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={connectWallet}
      >
        Connect Wallet
  </button>*/}
      <button
        className="hover:text-black text-white font-bold py-2 px-4 rounded"
        onClick={signInWithEthereum}
      >
        Sign In with Ethereum
      </button>
    </div>
  );
};

export default SiweComponent;