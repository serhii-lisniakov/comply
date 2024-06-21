import {createBrowserRouter, Navigate} from "react-router-dom";
import ErrorPage from "./pages/error.jsx";
import App from "./App.jsx";
import {NewsFeedPage} from "./pages/NewsFeed.jsx";
import {ComplianceMeetupsPage} from "./pages/ComplianceMeetups.jsx";

export const ROUTE_NEWSFEED = 'newsfeed';
export const ROUTE_COMPLIANCE_MEETUPS = 'compliance-meetups';

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
                        element: <Navigate replace to={ROUTE_NEWSFEED}/>,
                    },
                    {
                        path: `${ROUTE_NEWSFEED}`,
                        element: <NewsFeedPage/>,
                    },
                    {
                        path: `${ROUTE_COMPLIANCE_MEETUPS}`,
                        element: <ComplianceMeetupsPage/>,
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