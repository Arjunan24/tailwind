import React from "react"

import logo from "./Images/group-12.png"
import logo2 from "./Images/group-19.png"
import logo3 from "./Images/yellow.png"
import logo4 from "./Images/group-11.png"
import logo5 from "./Images/group-9.png"
import logo6 from "./Images/text-documents.png"
import logo7 from "./Images/group-21.png"
import logo8 from "./Images/footerImg.jpg"



function MainContent() {

    return (
        <div className="flex flex-wrap">
           
           <div className="flex">
            <div className="  w-full md:w-1/2  item-center lg:py-40">
                <div className="mt-10">
                    <h2 className="px-5 font-bold text-5xl">Bitting ICO starts soon... </h2>
                </div>
                <div className="w-full md:w-1/2 lg:ml-4  lg:ml-5">
                    <div className=" flex  lg:px-4 bg-yellow-500">
                        {/* <div className=" lg:px-3 w-full md:w-1/3">
                            <div className=" flex py-3">
                                <p className="bg-white p-2 text-center px-4 " >0</p>
                                <p className="bg-white p-2 text-center px-4 ml-2" >1</p>
                            </div>
                            <div>
                                <p className="ml-5">DAYS</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className=" lg:ml-3 flex py-3">
                                <p className="bg-white p-2 text-center px-4" >0</p>
                                <p className="bg-white p-2 text-center px-4 ml-2" >1</p>
                            </div>
                            <div className="ml-4">
                                <p className="ml-5">Hours</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="  ml-3 flex py-3">
                                <p className="bg-white p-2 text-center px-4" >0</p>
                                <p className="bg-white p-2 text-center px-4 ml-2" >1</p>
                            </div>
                            <div className="ml-2">
                                <p className="ml-5">Minutes</p>
                            </div>
                        </div> */}

                    </div>


                </div>
            
            </div>
            <div className="w-full md:h-screen md:w-1/2">
                <img src={logo} className="h-screen" alt="lion" />
            </div>
            </div>


            <div className=" w-full px-5 text-white py-4 py-4" style={{
                backgroundImage: `url(${logo2})`
            }}>
                <h2 className="text-center py-5"> WHY BIT</h2>
                <p className="px-10 items-center" > JBIT PTE LTD., a company incorporated in Singapore, registered vide UEN no. 201733578C with Accounting and Corporate Regulatory Authority (ACRA), having registered office at 14-2, The Arcade, Singapore. BIOONLINE PTE LTD., is the first Real estate company in the world, equitize by Cryptocurrency. An Indian Group entity of Bioonline Pte Ltd is Bio Estate Solutions Pvt. Ltd, SINCE 2008 is incorporated under the Companies Act, 1956. A fast growing Realty Business Group. Major focused on affordable apartment complex, N.A. Plots Bungalows, Row Houses. Area of operation Maharashtra, Goa & Uttar Pradesh (UP). ”BIO ESTATE SOLUTIONS” is a household name across the country. Founder, Chairman & MD. CA. SHIVAJI WALAKE FCA, ACS, L.L.B, CISA (USA), CIA (USA) PAST SR. VICE-PRESIDENT OF CITIBANK NA, USA has
                launched a Biokkoin by incorporating a limited company, “Bioonline Pte. Ltd.” from Singapore.

                     </p>
            </div>

            <div className=" w-full px-10 py-4 text-black" style={{
                backgroundImage: `url(${logo3})`
            }}>
                <h2 className="text-center py-5">INTRODUCING THE JBIT WALLET APP</h2>
                <p className="px-10 items-center" > JBIT Mobile Wallet enables Two Factor Authentication, also known as 2FA, two step verification along with a 4 digit security pin. JBIT also provides the users to exchange our coins using fiat currencies or cryptocurrencies.
                 You can download our wallet app from Playstore or iTunes which provides
                you easier transactions of JBIT thus sending and receiving our cryptocurrency is just a click away
                     </p>

                <div className="flex flex-wrap text-center py-3 justify-center">
                    {/* <button className="rounded border border-black px-3 ">App store</button>
                         <button className="rounded border border-black px-4 ml-3">App store</button> */}

                    <img src={logo4} alt="app store" />
                    <img clasname="px-3" src={logo5} alt="google store" />
                </div>

            </div>
            <div className="flex  w-full  py-3   justify-between">
                <div className="w-full md:w-1/5 py-6">
                    <img src={logo6} alt="textpadImage" />
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="font-bold py-4">WHITE PAPER</h3>
                    <p className="text-black"> JBIT is a peer to peer transferable and absolutely secured digital e-cash for users to make payment for real estate purchase, utility bill payments, online shopping, insurance, etc. JBIT will help investors make right
    choice of investments on real estate properties, eliminate middle agents and unnecessary charges.</p>
                    <p className="text-black">
                        Our whitepaper will give you more insights on JBIT
business plan, features and benefits for its users.</p>
                </div>
                <div className="w-full md:w-1/3 flex items-center  px-5 py-3 ml-5">

                    <div className="border border-yellow-600 item-center">
                        <h3 className="font-bold text-center mt-3">White Paper</h3>
                        <p className="text-black px-3 py-2">
                            The JBIT Whitepaper gives framework based on community feedback, business strategy refinement, and legal counsel.
                        </p>
                        <div className="flex items-center justify-center">
                            <button className="rounded bg-yellow-500 px-3 p-2 flex items-center justify-center  ml-center">Download Here</button>
                        </div>

                    </div>

                </div>

            </div>
            <div className="  w-full px-10 py-10 text-black" style={{
                backgroundImage: `url(${logo3})`
            }}>
                <h3 className="text-center font-bold">JBIT will be listed on</h3>
                <div className="flex p-4">
                    <div className="w-full md:w-1/3  p-4">
                        <p className="bg-white text-center p-4">Tile1 </p>

                    </div>
                    <div className="w-full md:w-1/3  p-4">
                        <p className="bg-white text-center p-4">Tile2 </p>

                    </div>
                    <div className="w-full md:w-1/3  p-4">
                        <p className="bg-white text-center p-4">Tile3 </p>

                    </div>
                </div>

            </div>  
            <div className=" flex items-center w-full ">
                <img src={logo7} alt="roadmap" />
            </div>

            <div className="flex justify-content w-full px-5 text-white py-4 justify-between" style={{
                backgroundImage: `url(${logo2})`
            }}>
                <div className=" px-5 md:w-1/5">
                    <img src={logo8} alt="jooby" className="w-32 h-32" />
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-white">Address</h3>
                    <p className="text-white">#14-02, The Arcade, 11 Collyer Quay  Singapore, 049317
                    
                    </p>
                    <p className="text-white ">
                    Email: info@jbit.com
Local Telephone: +6562406981
                    </p>

                    <div className=" mt-2">
                        <h4>
                            NEWSLETTERS
    </h4>
                        <div className="flex">
                            <input class="shadow appearance-none border rounded w-full text-sm px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your email" />
                            <button className="rounded bg-yellow-500 py-2 px-6 rounded flex items-center justify-center  ml-center">Send</button>

                        </div>
                    </div>


                </div>

                <div className="w-full md:w-1/3">
                    <div className="flex">
                        <div className="w-full md:w-1/3 ">
                            <input class="shadow appearance-none text-xs bg-black border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
                        </div>
                        <div className="w-full md:w-1/3 lg:px-3 ">
                            <input class="shadow appearance-none text-xs bg-black border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="EmailID" />

                        </div>
                        <div className="w-full md:w-1/3 text-xs">
                            <input class="shadow  appearance-none text-xs bg-black border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="PhoneNo" />

                        </div>
                    </div>
                    <div className="w-full py-3 ml-1">
                        <textarea class="w-full resize border text-sm bg-black rounded focus:outline-none focus:shadow-outline px-2" placeholder="Enter your Description"></textarea>
                    </div>
                    <div className=" py-3 ml-2 mt-6">
                        <button className="rounded bg-yellow-500 py-2 px-6 rounded flex items-center justify-center  ml-center">Send</button>
                    </div>
                </div>

            </div>

        </div>

    )


}
export default MainContent