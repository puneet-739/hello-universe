import { createBrowserRouter } from "react-router";
import About from "../screens/About/About";
import Service from "../screens/ServicePage/Service";
import Contact from "../screens/Contact/Contact";
import Layout from "../Layout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "about",
                Component: About
            },
            {
                path: "service",
                Component: Service
            },
            {
                path: "contact",
                Component: Contact
            },
        ]
    },
])

export default router;