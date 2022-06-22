import React, {useEffect, useState} from 'react'
import Nav from "../components/nav";
import testImg from '../img/test.jpg'
import HomeHeader from "../components/homeHeader";
import H2 from "../components/title";
import HomeCard from "../components/homeCard";
import Player from "../components/player";
import { useNavigate } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'
import SpotifyPlayer from 'react-spotify-player'

export default  function Home(){
    const [token,setToken] = useState("")
    const navigate = useNavigate()
    const[rPlaylists, setRplaylists] = useState([])
    const [f_playlist,setF_playlist] = useState(null)
    const [l_p,setL_p] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    const [recentlyPlayed, setRecentlyPlayed] = useState(null)
    const [currentSong,setCurrentSong] = useState("spotify:track:3gruCKVuhCsRjs3a3dG8CA")


    const getUserInfo = async(token)=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://api.spotify.com/v1/me", requestOptions)
        .then(response => response.json())
        .then((result)=>{
            setUserInfo(result)
        })
        .catch((error)=>{
            throw error
        });
    }

    const getRecentPlayedTracks = (token)=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        const date  = Date.now() - 604800000

        fetch("https://api.spotify.com/v1/me/player/recently-played?limit=10&before="+Date.now(), requestOptions)
        .then(response => response.json())
        .then((result)=>{
            setRecentlyPlayed(result)
            console.log(result)
        })
        .catch((error) => {throw error});
    }

    const getrPlaylists = async(code)=>{
 
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + code);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://api.spotify.com/v1/me/playlists", requestOptions)
        .then(response => response.json())
        .then((res)=>{
            setRplaylists(res.items)
        })
        .catch((error) => {
        console.log('error', error);
        });

    }

    const getPlaylist = (token)=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);
        let items;
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
    
        const PLAYLISTS = ["37i9dQZF1EQoqCH7BwIYb7","37i9dQZF1EQnqst5TRi17F","37i9dQZF1DWYkaDif7Ztbp","37i9dQZF1DZ06evO22OCjn"]
        const playlist = PLAYLISTS[Math.floor(Math.random() * PLAYLISTS.length)];
        fetch("https://api.spotify.com/v1/playlists/"+playlist, requestOptions)
        .then(response => response.json())
        .then((result)=>{
            setF_playlist(result)
            setCurrentSong(result.tracks.items[0].track.preview_url )
            setL_p(true)
        })
        .catch((error)=>{
            throw error
        });
    
    }

    useEffect(()=>{
        const token = window.location.hash.substring(1).split('&')[0].split('=')[1];
        setToken(token)
        if(!token){
            navigate("/login")
        }
        getrPlaylists(token)
        getPlaylist(token)
        getUserInfo(token)
        getRecentPlayedTracks(token)
        
    },[])

    const playSong = (url)=>{
        setCurrentSong(url)
        console.log(currentSong)
    }

    const size = {
        width: '100%',
        height: '100%',
    };
      const view = 'list'; // or 'coverart'
      const theme = 'black'; // or 'white'
       


    return(
            <section className={'w-screen h-screen overflow-hidden bg-gradient-to-t from-[#111] to-[#222] flex relative'}>
                <Nav  p={rPlaylists}/>
                <section className={'w-[calc(100%-220px)] overflow-auto'}>
                    <HomeHeader user={userInfo}/>

                    <div className={'p-4'}>
                        <H2 text={'Recently played'}/>
                        <div className="flex gap-3 flex-wrap pt-4">
                            {recentlyPlayed && recentlyPlayed.items.map((item,i)=>{
                                return (
                                    <HomeCard uri={item.track.uri} handler={playSong} key={i} img={item.track.album.images[0].url?item.track.album.images[0].url:testImg} t={item.track.album.name} subt={item.track.artists[0].name}/>
                                )

                            })}
                        </div>
                        
                    </div>

                    <div className={'p-4'}>
                        <H2 text={'We got this for you !'}/>
                        <div className={'flex gap-3 flex-wrap pt-4'}>
                            {f_playlist && f_playlist.tracks.items.map((item, index)=>{
                                return(
                                    <HomeCard uri={item.track.uri} handler={playSong} key={index} img={item.track.album.images[0].url?item.track.album.images[0].url:testImg} t={item.track.album.name} subt={item.track.artists[0].name}/>
                                )
                            })}
                      

                        </div>
                    </div>
                    <div className={'p-4'}>
                        <H2 text={`Made for ${userInfo?userInfo.display_name: "you"}`}/>
                        <div className={'flex gap-3 flex-wrap pt-4'}>

                            <HomeCard img={testImg} t={'Chill mix'} subt={"logan Joe logan Joe logan Joe logan Joe logan Joe"}/>
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
                    
                </section>

               {l_p && <div className="fixed bottom-0 z-10 w-screen h-24 bg-[#222]">

                    <SpotifyPlayer
                    size={size}
                    view={view}
                    theme={theme}
                    uri={currentSong}
                     />
                    
                </div>}
            </section>

    )
}