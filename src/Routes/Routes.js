import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
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

                // product.map(id => id.id === params.id),
                // loader: ({ params }) => console.log(params),
                // fetch(`/projects/${params.id
                // }`)
            },
            {
                path: '/services',
                element: <Projects></Projects>,
            },
            {
                path: '/blogs',
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