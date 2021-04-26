import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import store, { persistor } from './store';
import Header from './components/Header';
import CatalogPage from './components/CatalogPage';
import GlobalStyles from './styles/globalStyles';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={(props: any) => (
                <CatalogPage timestamp={new Date().toString()} {...props} />
              )}
            />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
