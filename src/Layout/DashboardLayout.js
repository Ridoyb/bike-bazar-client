import React, { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import UseAdmin from "../components/Dashboard/UseAdmin.js";
import UseBuyer from "../components/Dashboard/UseBuyer.js";
import UseSeller from "../components/Dashboard/UseSeller.js";
import Footer from "../components/Footer/Footer.js";
import Navbar from "../components/Navbar/Navbar.js";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider.js";



const DashboardLayout = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isSeller] = UseSeller(user?.email);
  const [isBuyer] = UseBuyer(user?.email);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("successfully logout");
        toast.success("You have logged Out Successfully!!");
        navigate("/");
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                <div className="avatar items-center justify-center mt-10">
            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="user" />
            </div>
          </div>

          <div className="mx-auto">
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <h4 className="font-semibold">{user?.email}</h4>
          </div>

          <div className="divider"></div>

          <ul className="menu p-4 w-80 text-base-content">
           {isAdmin && (
            <>
                 <li>
              <NavLink to="/dashboard">All Users</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/all-sellers">All Sellers</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/all-buyers">All Buyers</NavLink>
            </li>
            </>
           )}
           
                <li>
              <NavLink to="/dashboard/my-orders">My Orders</NavLink>
            </li>
    
                    <li>
              <NavLink to="/dashboard/my-products">My Products</NavLink>
            </li>
            
            <li>
              <NavLink to="/dashboard/add-a-product">Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-buyers">My Buyers</NavLink>
            </li>
            
          </ul>

          <NavLink className="mx-auto w-5/6" onClick={handleLogout}>
            <button className="btn btn-primary w-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </button>
          </NavLink>
      
    </ul>
  </div>
</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;