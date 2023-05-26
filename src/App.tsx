import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/layout';
import { Provider } from 'react-redux';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './pages/Home';
import Weather from './pages/Weather';

function App() {
  return (
    <Auth0Provider
      domain="dev-0pdysdidgdzv05qo.us.auth0.com"
      clientId="ccxyhETdI9GmMSbiXvLHwyi5u5c9hW2F"
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
