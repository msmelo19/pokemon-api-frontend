import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import Header from './components/Header';
import CatalogPage from './components/CatalogPage';
import GlobalStyles from './styles/globalStyles';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Header />
        <CatalogPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
