import  React from 'react'

export default  function Player(props){

    return(
        <div className={'flex p-4 bg-black sticky bottom-0'}>
            <div className={'flex'}>
                <div>
                    <img src={props.img} alt={"this is shit"}/>
                </div>
                <div className={'text-white'}>
                     <h2>{props.song}</h2>
                    <p>{props.artists}</p>
                </div>
                <div className={'icons'}>

                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}