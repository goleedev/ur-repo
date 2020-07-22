import React from 'react';
import Error from './components/Error/Error';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from './loading.gif';

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
        <img className="loading" src={loadingGif} alt='loading' />
    );
  }
  if (error) {
      return (
        <Error />
    );
  }
  return <>{children}</>;
}

export default AuthWrapper;
