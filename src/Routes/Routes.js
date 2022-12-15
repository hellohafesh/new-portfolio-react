import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Hire from "../Pages/Hire/Hire";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume/Resume";
import Thankyou from "../Pages/Shered/Thankyou/Thankyou";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/projects',
                element: <Projects></Projects>,
            },
            {
                path: '/projects/:id',
                element: <ProjectDetails> </ProjectDetails>,
                loader: ({ params }) => (params.id),


            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/hire',
                element: <Hire></Hire>,
            },
            {
                path: '/resume',
                element: <Resume></Resume>,
            },
            {
                path: '/about',
                element: <About></About>,
            },

        ]
    },
    {
        path: '/thankyou',
        element: <Thankyou></Thankyou>,
    }
])
export default router;