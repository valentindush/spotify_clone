import React, {useState} from 'react'

export default  function HomeCard(props){
    const [showBtn,setShowBtn] = useState(false)
    const roundedClass = (props.rounded === true)? "rounded-full w-[90%] m-[auto]": "rounded-md"
    return(
        <div onMouseOver={()=>setShowBtn(true)} onMouseLeave={()=>setShowBtn(false)} className={'card w-[250px] h-[250px] bg-[#222] p-2 pb-3 rounded-md relative cursor-pointer hover:bg-[#111] hover:bg-opacity-50 transition duration-300 overflow-hidden'}>
            <div className={'h-[70%]'}>
                <img className={`h-[100%] w-[100%] object-cover ${roundedClass}`} src={props.img} alt={'img'}/>
            </div>
            <div>
                <h2 className={'text-white text-lg pt-2 pb-2'}>{props.t}</h2>
                <h3 className={'text-white text-sm'}>{props.subt}</h3>
            </div>
            {showBtn === true &&
                <div onClick={()=>props.handler(props.uri)} className={'bg-[#1ed760] w-[50px] h-[50px] absolute right-5 top-[50%] flex items-center justify-center  rounded-full'}>
                    <svg className={'w-5 h-5 fill-black'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/>
                    </svg>
                </div>}
        </div>
    )
}