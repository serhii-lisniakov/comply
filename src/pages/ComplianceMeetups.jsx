import {useScript} from "../hooks/useScript.jsx";

export const ComplianceMeetupsPage = () => {
    useScript('js/base/num.js');
    useScript('js/base/name.js');
    useScript('js/charts/summary.js');

    return <div className="bg-gray-100 flex-1 md:mt-6">

        <div className="grid grid-cols-3 lg:grid-cols-1 gap-5">
            <div className="card col-span-1">

                <div className="card-body h-full flex flex-col justify-between">

                    <div>
                        <h1 className="text-lg font-bold tracking-wide">Congratulations Moe!</h1>
                        <p className="text-gray-600 mt-2">Best seller of the month</p>
                    </div>

                    <div className="flex flex-row mt-10 items-end">

                        <div className="flex-1">
                            <h1 className="font-extrabold text-4xl text-teal-400">$89k</h1>
                            <p className="mt-3 mb-4 text-xs text-gray-500">You have done 57.6% more sales today.</p>
                            <a href="#" className="btn-shadow py-3">
                                view sales
                            </a>
                        </div>

                        <div className="flex-1 ml-10 w-32 h-32 lg:w-auto lg:h-auto overflow-hidden">
                            <img className="object-cover" src="img/congrats.svg"/>
                        </div>

                    </div>

                </div>

            </div>
            <div className="card p-0 overflow-hidden col-span-2 lg:col-span-1 flex flex-row lg:flex-col">

                <div className="border-r border-gray-200 w-2/3 lg:w-full lg:mb-5">

                    <div className="p-5 flex flex-row flex-wrap justify-between items-center">
                        <h2 className="font-bold text-lg">Order Summary</h2>
                        <div className="flex flex-row justify-center items-center">
                            <a href="#" className="btn mr-4 text-sm py-2 block">month</a>
                            <a href="#" className="btn-shadow text-sm py-2 block">week</a>
                        </div>
                    </div>

                    <div id="SummaryChart"></div>

                </div>

                <div className="w-1/3 lg:w-full">

                    <div className="p-5 border-b border-gray-200">
                        <h2 className="font-bold text-lg mb-6">Sales History</h2>

                        <div className="flex flex-row justify-between mb-3">
                            <div className="">
                                <h4 className="text-gray-600 font-thin">Puma Shoes</h4>
                                <p className="text-gray-400 text-xs font-hairline">30 min ago</p>
                            </div>
                            <div className="text-sm font-medium">
                                <span className="text-green-400">+</span> $250
                            </div>
                        </div>

                        <div className="flex flex-row justify-between mb-3">
                            <div className="">
                                <h4 className="text-gray-600 font-thin">Google Pixel 4 xl</h4>
                                <p className="text-gray-400 text-xs font-hairline">1 day ago</p>
                            </div>
                            <div className="text-sm font-medium">
                                <span className="text-red-400">-</span> $10
                            </div>
                        </div>

                        <div className="flex flex-row justify-between">
                            <div className="">
                                <h4 className="text-gray-600 font-thin">Nike Air Jordan</h4>
                                <p className="text-gray-400 text-xs font-hairline">2 hour ago</p>
                            </div>
                            <div className="text-sm font-medium">
                                <span className="text-red-400">-</span> $98
                            </div>
                        </div>



                    </div>

                    <div className="p-5">
                        <h2 className="font-bold text-lg mb-2">Sales History</h2>
                        <strong className="text-teal-400 font-extrabold text-xl">$82,950.96</strong>

                        <div className="bg-gray-300 h-2 rounded-full mt-2 relative">
                            <div className="rounded-full bg-teal-400 h-full w-3/4 shadow-md"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div className="grid grid-cols-5 gap-5 mt-5 lg:grid-cols-2">

            <div className="card col-span-1">
                <div className="card-body">
                    <h5 className="uppercase text-xs tracking-wider font-extrabold">today</h5>
                    <h1 className="capitalize text-lg mt-1 mb-1">$<span className="num-3"></span>  <span className="text-xs tracking-widest font-extrabold"> / <span className="num-2"></span> orders</span></h1>
                    <p className="capitalize text-xs text-gray-500">( $<span className="num-2"></span> in the last year )</p>
                </div>
            </div>

            <div className="card col-span-1">
                <div className="card-body">
                    <h5 className="uppercase text-xs tracking-wider font-extrabold">yesterday</h5>
                    <h1 className="capitalize text-lg mt-1 mb-1">$<span className="num-3"></span>  <span className="text-xs tracking-widest font-extrabold"> / <span className="num-2"></span> orders</span></h1>
                    <p className="capitalize text-xs text-gray-500">( $<span className="num-2"></span> in the last year )</p>
                </div>
            </div>

            <div className="card col-span-1">
                <div className="card-body">
                    <h5 className="uppercase text-xs tracking-wider font-extrabold">last week</h5>
                    <h1 className="capitalize text-lg mt-1 mb-1">$<span className="num-3"></span>  <span className="text-xs tracking-widest font-extrabold"> / <span className="num-2"></span> orders</span></h1>
                    <p className="capitalize text-xs text-gray-500">( $<span className="num-2"></span> in the last year )</p>
                </div>
            </div>

            <div className="card col-span-1">
                <div className="card-body">
                    <h5 className="uppercase text-xs tracking-wider font-extrabold">last month</h5>
                    <h1 className="capitalize text-lg mt-1 mb-1">$<span className="num-3"></span>  <span className="text-xs tracking-widest font-extrabold"> / <span className="num-2"></span> orders</span></h1>
                    <p className="capitalize text-xs text-gray-500">( $<span className="num-2"></span> in the last year )</p>
                </div>
            </div>

            <div className="card col-span-1 lg:col-span-2">
                <div className="card-body">
                    <h5 className="uppercase text-xs tracking-wider font-extrabold">last 90-days</h5>
                    <h1 className="capitalize text-lg mt-1 mb-1">$<span className="num-3"></span>  <span className="text-xs tracking-widest font-extrabold"> / <span className="num-2"></span> orders</span></h1>
                    <p className="capitalize text-xs text-gray-500">( $<span className="num-2"></span> in the last year )</p>
                </div>
            </div>


        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 mt-5">
            <div className="card">

                <div className="card-body">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-extrabold text-lg">best sellers</h1>
                        <a href="#" className="btn-gray text-sm">view all</a>
                    </div>

                    <table className="table-auto w-full mt-5 text-right">

                        <thead>
                        <tr>
                            <td className="py-4 font-extrabold text-sm text-left">product</td>
                            <td className="py-4 font-extrabold text-sm">price</td>
                            <td className="py-4 font-extrabold text-sm">sold</td>
                            <td className="py-4 font-extrabold text-sm">profit</td>
                        </tr>
                        </thead>

                        <tbody>

                        <tr className="">
                            <td className="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                                <div className="w-8 h-8 overflow-hidden mr-3">
                                    <img src="img/sneakers.svg" className="object-cover"/>
                                </div>
                                Sneakers and Tennis
                            </td>
                            <td className="py-4 text-xs text-gray-600">$ <span className="num-2"></span></td>
                            <td className="py-4 text-xs text-gray-600"><span className="num-3"></span></td>
                            <td className="py-4 text-xs text-gray-600">$ <span className="num-4"></span></td>
                        </tr>

                        <tr className="">
                            <td className="py-4 text-sm text-gray-600 flex flex-row items-center">
                                <div className="w-8 h-8 overflow-hidden mr-3">
                                    <img src="img/socks.svg" className="object-cover"/>
                                </div>
                                Crazy Socks & Graphic Socks for Men
                            </td>
                            <td className="py-4 text-xs text-gray-600">$ <span className="num-2"></span></td>
                            <td className="py-4 text-xs text-gray-600"><span className="num-3"></span></td>
                            <td className="py-4 text-xs text-gray-600">$ <span className="num-4"></span></td>
                        </tr>

                        <tr className="">
                            <td className="py-4 text-sm text-gray-600 flex flex-row items-center">
                                <div className="w-8 h-8 overflow-hidden mr-3">
                                    <img src="img/soccer.svg" className="object-cover"/>
                                </div>
                                Adidas Soccer Ball
                            </td>
                            <td className="py-4 text-xs text-gray-600">$ <span className="num-2"></span></td>
                            <td className="py-4 text-xs text-gray-600"><span className="num-3"></span></td>
                            <td className="py-4 text-xs text-gray-600">$ <span className="num-4"></span></td>
                        </tr>

                        <tr className="">
                            <td className="py-4 text-sm text-gray-600 flex flex-row items-center">
                                <div className="w-8 h-8 overflow-hidden mr-3">
                                    <img src="img/food.svg" className="object-cover"/>
                                </div>
                                Best Chocolate Chip Cookies
                            </td>
                            <td className="py-4 text-xs text-gray-600">$ <span className="num-2"></span></td>
                            <td className="py-4 text-xs text-gray-600"><span className="num-3"></span></td>
                            <td className="py-4 text-xs text-gray-600">$ <span className="num-4"></span></td>
                        </tr>

                        </tbody>

                    </table>

                </div>
            </div>
            <div className="card">

                <div className="card-body">
                    <h2 className="font-bold text-lg mb-10">Recent Orders</h2>

                    <table className="table-fixed w-full">

                        <thead className="text-left">
                        <tr>
                            <th className="w-1/2 pb-10 text-sm font-extrabold tracking-wide">customer</th>
                            <th className="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">Product</th>
                            <th className="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">Invoice</th>
                            <th className="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">price</th>
                            <th className="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">status</th>
                        </tr>
                        </thead>

                        <tbody className="text-left text-gray-600">

                        <tr>
                            <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div className="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user2.jpg" className="object-cover"/>
                                </div>
                                <p className="ml-3 name-1">user name</p>
                            </th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>

                        </tr>


                        <tr>
                            <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div className="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user3.jpg" className="object-cover"/>
                                </div>
                                <p className="ml-3 name-1">user name</p>
                            </th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>

                        </tr>


                        <tr>
                            <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div className="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user2.jpg" className="object-cover"/>
                                </div>
                                <p className="ml-3 name-1">user name</p>
                            </th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>

                        </tr>

                        <tr>
                            <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div className="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user1.jpg" className="object-cover"/>
                                </div>
                                <p className="ml-3 name-1">user name</p>
                            </th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>

                        </tr>

                        <tr>
                            <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                                <div className="w-8 h-8 overflow-hidden rounded-full">
                                    <img src="img/user3.jpg" className="object-cover"/>
                                </div>
                                <p className="ml-3 name-1">user name</p>
                            </th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>

                            <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>

                        </tr>




                        </tbody>

                    </table>
                </div>

            </div>

        </div>


    </div>
}