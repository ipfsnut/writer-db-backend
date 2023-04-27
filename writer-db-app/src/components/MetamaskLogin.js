import React from 'react';

const MetamaskLogin = ({ onLogin }) => {
  return (
    <button onClick={onLogin}>
      Login with Metamask
    </button>
  );
};

export default MetamaskLogin;
