import AllBuyers from "../components/AllBuyers/AllBuyers";
import AllProducts from "../components/AllProducts/AllProducts";
import AllSellers from "../components/AllSallers/AllSellers";
import Blogs from "../components/Blogs/Blogs";
import MyOrders from "../components/Buyer/MyOrders/MyOrders";
import Dashboard from "../components/Dashboard/Dashboard";
import Payment from "../components/Dashboard/Payment/Payment";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddAProduct from "../components/Saller/AddAProduct/AddAProduct";
import MyBuyers from "../components/Saller/MyBuyers/MyBuyers";
import MyProducts from "../components/Saller/MyProducts/MyProducts";
import Error from "../Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home/Home");
const { default: Main } = require("../Layout/Main");

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/products/:category',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.category}`),
                element: <PrivateRoutes><AllProducts></AllProducts></PrivateRoutes>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blogs></Blogs>
            },
            { path: '*', element: <Error></Error> }
        ]
    },

    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
            loader: () => fetch("http://localhost:5000/users"),
          },
          {
            path: "/dashboard/all-sellers",
            element: <AllSellers></AllSellers>,
          },
          {
            path: "/dashboard/all-buyers",
            element: <AllBuyers></AllBuyers>,
          },
          {
            path: "/dashboard/my-orders",
            element: <MyOrders></MyOrders>,
          },
          {
            path: "/dashboard/my-products",
            element: <MyProducts></MyProducts>,
          },
          {
            path: "/dashboard/add-a-product",
            element: <AddAProduct></AddAProduct>,
            loader: () => fetch("http://localhost:5000/categories"),
          },
          {
            path: "/dashboard/my-buyers",
            element: <MyBuyers></MyBuyers>,
          },
          {
            path: "/dashboard/payment/:id",
            element: <Payment></Payment>,
            loader: ({params}) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
          },
        ],
      },
])

export default router