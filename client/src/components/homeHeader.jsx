import React from 'react'
import testImg from "../img/test.jpg";
import {useState} from 'react';

export default function  HomeHeader(props){
    const [navFill,setNavFill] = useState("bg-[#222]")
    window.addEventListener('scroll',(e)=>{
        if(e.scrollY < 100){
            console.log(e.scrollY)
            setNavFill("bg-[#111]")
        }
    })
    return(
        <header className={`p-4 w-full ${navFill} bg-opacity-80 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm`}>
            <div className={'btns flex gap-4'}>
                <button className={'p-2 w-[40px] h-[40px] bg-black flex justify-center items-center shadow-md rounded-full'}>
                    <svg className={'w-4 h-4 fill-white'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
                    </svg>
                </button>
                <button className={'p-2 w-[40px] rotate-180 h-[40px] bg-black  flex justify-center items-center shadow-md rounded-full'}>
                    <svg className={'w-4 h-4 fill-white'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
                    </svg>
                </button>
            </div>
            <div className={'flex gap-4 px-5'}>
                <button className={'border-[1px] p-1 px-5 text-white text-sm border-white rounded-full'}>Upgrade</button>
                <div className={'flex gap-2 items-center p-1 bg-black rounded-full pr-2 cursor-pointer'}>
                    <img className={'w-6 h-6 object-cover rounded-full '} src={props.user?props.user.images[0].url:testImg}/>
                    <span className={'text-xs text-white'}>{props.user?props.user.display_name: ""}</span>
                    <svg className={'fill-white w-3 h-3'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
                    </svg>
                </div>
            </div>
        </header>
    )
}