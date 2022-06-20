import React, {useEffect, useState} from 'react'
import Nav from "../components/nav";
import testImg from '../img/test.jpg'
import HomeHeader from "../components/homeHeader";
import H2 from "../components/title";
import HomeCard from "../components/homeCard";
import Player from "../components/player";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default  function Home(){
    const navigate = useNavigate()
    useEffect(()=>{
        document.title = "Web Player - Spotify"  
    },[])

    const code = new URLSearchParams(window.location.search).get("code")
    if(!code) navigate('/login')

    useEffect(()=>{
        if(code){

            axios.post("http://localhost:3001",{code})
            .then((res)=>{
                console.log(res.data)
            })
        }
    })

    return(
        <section className={'w-screen h-screen overflow-hidden bg-gradient-to-t from-[#111] to-[#222] flex relative'}>
            <Nav/>
            <section className={'w-[calc(100%-220px)] overflow-auto'}>
                <HomeHeader/>

                {/* {accessToken} */}

                <div className={'p-4'}>
                    <H2 text={'Recently played'}/>
                    <div className={'flex gap-3 flex-wrap pt-4'}>
                        <HomeCard img={testImg} t={'Ndi good'} subt={"logan Joe"}/>
                        <HomeCard img={testImg} t={'Ndi good'} subt={"logan Joe"}/>
                        <HomeCard img={testImg} t={'Ndi good'} subt={"logan Joe"}/>
                        <HomeCard img={testImg} t={'Ndi good'} subt={"logan Joe"}/>
                        <HomeCard img={testImg} t={'Ndi good'} subt={"logan Joe"}/>
                        <HomeCard img={testImg} t={'Ndi good'} subt={"logan Joe"}/>
                    </div>
                </div>
                <div className={'p-4'}>
                    <H2 text={'Made for dush_valentin'}/>
                    <div className={'flex gap-3 flex-wrap pt-4'}>
                        <HomeCard img={testImg} t={'Chill mix'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'Drill mix'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'Afro new'} subt={"logan  logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'Amapiano'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'90s Hiphop'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'Pop mix'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                    </div>
                </div>
                <div className={'p-4'}>
                    <H2 text={'Spotify Playlists'}/>
                    <div className={'flex gap-3 flex-wrap pt-4'}>
                        <HomeCard img={testImg} t={'Chill mix'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'Drill mix'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'Afro new'} subt={"logan  logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'Amapiano'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'90s Hiphop'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                        <HomeCard img={testImg} t={'Pop mix'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
                    </div>
                </div>
                <div className={'p-4'}>
                    <H2 text={'More like Popsmoke'}/>
                    <div className={'flex gap-3 flex-wrap pt-4'}>
                        <HomeCard img={testImg} rounded={true} t={'Popsmoke'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'Lil baby'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'Lil Durk'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'Lil Durk'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'DJ Khaled'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'50 cent'} subt={"Artist"}/>
                    </div>
                </div>
                <div className={'p-4'}>
                    <H2 text={'Trending artists'}/>
                    <div className={'flex gap-3 flex-wrap pt-4'}>
                        <HomeCard img={testImg} rounded={true} t={'Popsmoke'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'Lil baby'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'Lil Durk'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'Lil Durk'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'DJ Khaled'} subt={"Artist"}/>
                        <HomeCard img={testImg} rounded={true} t={'50 cent'} subt={"Artist"}/>
                    </div>
                </div>
                {/* <Player img={testImg} artists={"Popsmoke, Lil Baby"} song={"For the night"}/> */}
            </section>

        </section>
    )
}