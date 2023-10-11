import React from 'react'
import style from './style/tarif.module.scss'

export default function Tarif({item, activeTarif, setID}){
    const colorStyle=style[item.color]
    const activeStyle = activeTarif ? style.activeTarif : '';

    function handleActive(){
        setID(item.id)
    }

return(
    <div className={`${colorStyle} ${activeStyle}`} onClick={handleActive}>
        <div className='titleWrapper'>
            <p className='title'>{item.title}</p>
        </div>   

        <div className='priceWrapper'>
            <p className='price'>{item.price}</p>
        </div>

        <div className='speedWrapper'>
            <p className='speed'>{item.speed}</p>
        </div>

        <div className='infoWrapper'>
            <p className='info'>{item.info}</p>
        </div>
    </div>
);
}