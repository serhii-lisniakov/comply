import { NavLink } from "react-router-dom";
import {useScript} from "../hooks/useScript.jsx";

export const Sidebar = () => {
    useScript('js/base/sidebar.js');

    return <div id="sideBar"
                className="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">

        <div className="flex flex-col">

            <div className="text-right hidden md:block mb-4">
                <button id="sideBarHideBtn">
                    <i className="fad fa-times-circle"></i>
                </button>
            </div>

            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">Favourites</p>

            <NavLink to="newsfeed"
               className="aria-[current=page]:text-teal-600 aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-chart-pie text-xs mr-2"></i>
                Newsfeed
            </NavLink>

            <NavLink to="compliance-meetups"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-shopping-cart text-xs mr-2"></i>
                Compliance Meetups
            </NavLink>

            <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">apps</p>

            <NavLink to="email"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-envelope-open-text text-xs mr-2"></i>
                email
            </NavLink>

            <NavLink to="chat"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-comments text-xs mr-2"></i>
                chat
            </NavLink>

            <NavLink to="todo"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-shield-check text-xs mr-2"></i>
                todo
            </NavLink>

            <NavLink to="calendar"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-calendar-edit text-xs mr-2"></i>
                calendar
            </NavLink>

            <NavLink to="invoice"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-file-invoice-dollar text-xs mr-2"></i>
                invoice
            </NavLink>


            <NavLink to="file manager"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-folder-open text-xs mr-2"></i>
                file manager
            </NavLink>


            <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">UI Elements</p>


            <NavLink to="typography"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-text text-xs mr-2"></i>
                typography
            </NavLink>


            <NavLink to="alerts"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-whistle text-xs mr-2"></i>
                alerts
            </NavLink>


            <NavLink to="buttons"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-cricket text-xs mr-2"></i>
                buttons
            </NavLink>


            <NavLink to="content"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-box-open text-xs mr-2"></i>
                Content
            </NavLink>


            <NavLink to="colors"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-swatchbook text-xs mr-2"></i>
                colors
            </NavLink>


            <NavLink to="icons"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-atom-alt text-xs mr-2"></i>
                icons
            </NavLink>


            <NavLink to="card"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-club text-xs mr-2"></i>
                card
            </NavLink>


            <NavLink to="widgets"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-cheese-swiss text-xs mr-2"></i>
                Widgets
            </NavLink>


            <NavLink to="components"
               className="aria-[current=page]:text-teal-600 mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
                <i className="fad fa-computer-classic text-xs mr-2"></i>
                Components
            </NavLink>


        </div>

    </div>

}