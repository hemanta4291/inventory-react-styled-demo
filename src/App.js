
import './App.css';
import { ThemeProvider } from 'styled-components';
import { themeOne } from './components/styled/theme';
import GlobalStyled from './components/styled/GlobalStyled';
import Header from './layout/Header';
import Sidenav from './layout/Sidenav';
import Dashboard from './pages/Dashboard';
import User from './pages/Users';
import Products from './pages/Products';
import Salse from './pages/Salse';
import { Route, BrowserRouter as Router, Routes ,Redirect} from 'react-router-dom';
import DashboardOne from './pages/DashboardOne';
import { DashboardMiddleContainer } from './components/styled/Dashboard.styled';
import OrderList from './pages/OrderList';
import { useState } from 'react';
import Login from './pages/Login';
import UserLaout from './layout/DashboardLayout';
import DashboardLayoutRouter from './layout/DashboardLayoutRouter';
import DashboardLayout from './layout/DashboardLayout';

function App() {
  
  return (
    <ThemeProvider theme={themeOne}>
    <GlobalStyled/>
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route element={<DashboardLayout/>}>
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="product" element={<Products />} />
               <Route path="user" element={<User />} />
               <Route path="order" element={<OrderList />} />
               <Route path='*' element={<div>not fuound !</div>} />
            </Route>
          </Routes>
        
      </Router>

    </div>
  </ThemeProvider>
  );
}

export default App;
