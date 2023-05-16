import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import OrderPage from './pages/OrderPage';
import ProfilePage from './pages/profile/user/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import CompanyPage from './pages/profile/company/CompanyPage';
import CompanyMenuPage from "./pages/profile/company/CompanyMenuPage";
import AddFood from "./pages/profile/company/AddFood";
import UserOrderPage from './pages/profile/user/UserOrderPage';
import UserEditPage from './pages/profile/user/UserEditPage';
import AdminPage from './pages/profile/admin/AdminPage';
import DashboardUsers from './pages/profile/admin/DashboardUsers';
import DashboardCompanies from './pages/profile/admin/DashboardCompanies';
import AdminMessage from "./pages/profile/admin/AdminMessage";
import { AuthContext } from './utils/AuthProvider';
import { useContext } from 'react';
import { useEffect } from 'react';

function App() {

  const { data, setData } = useContext(AuthContext);
  // useEffect(() => {
  //   const storedData = localStorage.setItem("user", data);
  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //   }
  // }, []);
  console.log(data.username);


  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/company/:name" element={<CompanyPage />} />
        <Route path="/company/:name/menu" element={<CompanyMenuPage />} />
        <Route path="/company/:name/add" element={<AddFood />} />
        <Route path={`/user/${data.username}`} element={<ProfilePage />} />
        <Route path={`/user/${data.username}/edit`} element={<UserEditPage />} />
        <Route path={`/user/${data.username}/orders`} element={<UserOrderPage />} />
        <Route path={`/guest/order`} element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path={`/cart/${data.username}`} element={<CartPage />} />
        <Route path="/dashboard" element={<AdminPage />} />
        <Route path="/dashboard/users" element={<DashboardUsers />} />
        <Route path="/dashboard/companies" element={<DashboardCompanies />} />
        <Route path="/dashboard/messages" element={<AdminMessage />} />
      </Routes>
    </div>
  );

}

export default App;
