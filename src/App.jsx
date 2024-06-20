import './App.css'
import {Sidebar} from "./components/Sidebar.jsx";
import {Navbar} from "./components/Navbar.jsx";


import {Outlet} from "react-router-dom";


function App() {

    return (
        <>
            <Navbar/>
            <div className="h-screen flex flex-row flex-wrap">
                <Sidebar/>
                <div className="bg-gray-100 flex-1 p-6 md:mt-16">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default App
