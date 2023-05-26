import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/layout';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
