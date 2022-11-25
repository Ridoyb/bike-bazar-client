import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../Error/Error";

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
                element: <Home></Home>
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
    }
])

export default router