import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/layout';
import { Provider } from 'react-redux';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <Auth0Provider
    domain="http://localhost:3000"
    clientId="aEyPo8dKb99bkIfUWywf2F5LUVEHFgTX"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    >

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='login' element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

    </Auth0Provider>
  );
}

export default App;
