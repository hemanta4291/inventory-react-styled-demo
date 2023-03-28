
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

function App() {
  return (
    <ThemeProvider theme={themeOne}>
    <GlobalStyled/>
    <div className="App">
      <Router>
        <Header />
        <Sidenav/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-one" element={<DashboardOne />} />
            <Route path="/product" element={<Products/>} />
            <Route path="/user" element={<User />} />
            <Route path="/salse" element={<Salse />} />
            <Route path='*' element={<div>not fuound !</div>} />
          </Routes>
      </Router>

    </div>
  </ThemeProvider>
  );
}

export default App;
