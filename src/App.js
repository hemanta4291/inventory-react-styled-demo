
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
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardOne from './pages/DashboardOne';
import { DashboardMiddleContainer } from './components/styled/Dashboard.styled';
import OrderList from './pages/OrderList';

function App() {
  return (
    <ThemeProvider theme={themeOne}>
    <GlobalStyled/>
    <div className="App">
      <Router>
        <Header />
        <Sidenav/>
        <DashboardMiddleContainer>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-one" element={<DashboardOne />} />
            <Route path="/product" element={<Products/>} />
            <Route path="/user" element={<User />} />
            <Route path="/order" element={<OrderList />} />
            <Route path="/salse" element={<Salse />} />
            <Route path='*' element={<div>not fuound !</div>} />
          </Routes>
          </DashboardMiddleContainer>
      </Router>

    </div>
  </ThemeProvider>
  );
}

export default App;
