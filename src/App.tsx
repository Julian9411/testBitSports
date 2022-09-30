import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StatusBar} from 'react-native';

import Navigation from './navigation';

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
