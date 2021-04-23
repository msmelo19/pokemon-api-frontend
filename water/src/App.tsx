import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import CatalogPage from './components/CatalogPage';
import GlobalStyles from './styles/globalStyles';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <CatalogPage />
    </Provider>
  );
}

export default App;
