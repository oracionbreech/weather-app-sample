import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/layout';
import { Provider } from 'react-redux';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './pages/Home';
import Weather from './pages/Weather';

const { REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID } = process.env

function App() {
  return (
    <Auth0Provider
      domain={String(REACT_APP_AUTH0_DOMAIN)}
      clientId={String(REACT_APP_AUTH0_CLIENT_ID)}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='weather' element={<Weather />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

    </Auth0Provider>
  );
}

export default App;
