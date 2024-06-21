import {createBrowserRouter, Navigate} from "react-router-dom";
import ErrorPage from "./pages/error.jsx";
import App from "./App.jsx";
import {NewsFeedPage} from "./pages/NewsFeed.jsx";
import {ComplianceMeetupsPage} from "./pages/ComplianceMeetups.jsx";
import {EmailPage} from "./pages/Email.jsx";
import {Typography} from "./pages/Typography.jsx";
import {Alerts} from "./pages/Alerts.jsx";
import {Buttons} from "./pages/Buttons.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    {
                        index: true,
                        element: <Navigate replace to="newsfeed"/>,
                    },
                    {
                        path: 'newsfeed',
                        element: <NewsFeedPage/>,
                    },
                    {
                        path: 'compliance-meetups',
                        element: <ComplianceMeetupsPage/>,
                    },
                    {
                        path: 'email',
                        element: <EmailPage/>,
                    },
                    {
                        path: 'typography',
                        element: <Typography/>,
                    },
                    {
                        path: 'alerts',
                        element: <Alerts/>,
                    },
                    {
                        path: 'buttons',
                        element: <Buttons/>,
                    },
                ]
            },
            {
                path: '*',
                element: <ErrorPage/>,
            }
        ],
    },
]);