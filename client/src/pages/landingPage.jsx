import React, { useEffect } from "react";
import LandingNav from "../components/landingNav";
import coverImg  from '../img/cover.png'
import bgImg from '../img/bge.svg'
import {Link} from "react-router-dom";
import FaFacebookF from 'react-icons/fa'
export default function  LandingPage(){

    useEffect(()=>{
        document.title = "Spotify - music for everyone"
    })
    return(
        <div className={'landing w-full bg-red-700 min-h-full h-full box-border relative'}>
            <LandingNav/>

            <div className={'hero h-[fit]  bg-[#993399] px-[10%] py-[5%] flex gap-3'}>
                <div>
                    <h5 className={'text-white mt-6'}>SPOTIFY PREMIUM</h5>

                    <h2 className={'text-white text-5xl font-semibold mt-14 '}>
                        Get 3 months of Premium
                    </h2>
                    <h2 className={'text-white text-5xl mt-2 font-semibold  '}>
                        for free
                    </h2>
                    <h3 className={'text-white text-lg mt-8'}>
                        Enjoy ad-free music listening, offline playback, and more.
                    </h3>
                    <h3 className={'text-white text-lg '}>
                        Cancel anytime.
                    </h3>

                    <div className={'pt-12'}>
                        <button className={'text-white bg-black p-4 px-8 block -ml-2 text-sm  rounded-full'}>GET 3 MONTHS FREE</button>
                    </div>

                    <div className={'pt-12'}>
                        <span className={'text-white block text-xs'}>Individual plan only. USD 2.99/month after. <Link to={"/en"} className={'underline'}>Terms and conditions apply.</Link> Open only to users who haven't already tried Premium.</span>
                        <span className={'text-white block text-xs'}> Offer ends 12 May 2022.</span>
                    </div>
                </div>
                <div>
                    <img src={coverImg}/>
                </div>
            </div>
            <div className={'hero2 bg-[#2941ab] w-full h-[60vh] px-[10%] py-7 pt-[10%] pb-[10%]'} style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "100% 180%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center"
            }}>
                <div className={'flex flex-col gap-12'}>
                    <h2 className={'text-[#1ed760] text-5xl font-black'}>Looking for music?</h2>
                    <h4 className={'text-[#1ed760] text-lg font-medium'}>Start listening to the best new releases.</h4>
                    <Link to={"/"}  className={"text-[#2941ab] w-fit bg-[#1ed760] p-3 transition duration-300 hover:scale-105 rounded-full px-6"}>OPEN WEB PLAYER</Link>
                </div>
            </div>
            <footer className={'w-full h-full px-[10%] py-[3%] bg-black'}>
                <div className={'flex  flex-wrap gap-[10%]'}>
                    <div className={'logo'}>
                        <svg className={'dark:fill-white h-[40px] relative'} viewBox="0 0 63 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
                            <g fillRule="evenodd" className="svelte-1gcdbl9">
                                <path
                                    d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={''}>
                        <h4 className={'text-white opacity-75 pb-4'}>COMPANY</h4>
                        <div className={'links'}>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>About</Link>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>Jobs</Link>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>For the Record</Link>
                        </div>
                    </div>
                    <div className={''}>
                        <h4 className={'text-white opacity-75 pb-4'}>COMMUNITIES</h4>
                        <div className={'links'}>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>For artists</Link>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>Developers</Link>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>Advertising</Link>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>Investors</Link>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>Vendors</Link>
                        </div>
                    </div>
                    <div className={''}>
                        <h4 className={'text-white opacity-75 pb-4'}>USEFUL LINKS</h4>
                        <div className={'links'}>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>Support</Link>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>Web player</Link>
                            <Link to={''} className={'text-white block mt-2 transition duration-300 hover:text-green-700'}>Mobile app</Link>
                        </div>
                    </div>
                    <div className={'icons flex gap-4  p-2'}>

                        <svg className={'w-14 h-14 p-4 cursor-pointer hover:bg-opacity-40 transition duration-500 bg-white bg-opacity-30 fill-white  rounded-full'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                        <svg className={'w-14 h-14 bg-white p-4 cursor-pointer hover:bg-opacity-40 transition duration-500 bg-opacity-30 fill-white  rounded-full'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                        </svg>
                        <svg className={'w-14 h-14 bg-white p-4 cursor-pointer hover:bg-opacity-40 transition duration-500 bg-opacity-30 fill-white rounded-full' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                        </svg>
                    </div>
                </div>
                <div>

                </div>
                <div className={'flex justify-between pt-8 flex-wrap'}>
                    <div className={'flex gap-4'}>
                        <Link to={'/en'} className={'text-xs text-white font-light opacity-60 transition duration-300 hover:text-green-700 cursor-pointer'}>Legal</Link>
                        <Link to={'/en'} className={'text-xs text-white font-light opacity-60 transition duration-300 hover:text-green-700 cursor-pointer'}>Privacy Center</Link>
                        <Link to={'/en'} className={'text-xs text-white font-light opacity-60 transition duration-300 hover:text-green-700 cursor-pointer'}>Privacy Policy</Link>
                        <Link to={'/en'} className={'text-xs text-white font-light opacity-60 transition duration-300 hover:text-green-700 cursor-pointer'}>Cookies</Link>
                        <Link to={'/en'} className={'text-xs text-white font-light opacity-60 transition duration-300 hover:text-green-700 cursor-pointer'}>About Ads</Link>
                    </div>
                    <div>
                        <span className={'text-xs text-white block font-light opacity-60 transition duration-300 hover:text-green-700 cursor-pointer'}>Rwanda</span>
                        <span className={'text-xs text-white block font-light opacity-60'}>&copy; 2022 dush valentin</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}