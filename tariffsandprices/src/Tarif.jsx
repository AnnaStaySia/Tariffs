import style from './style/tarif.module.scss'
import React from 'react'

export default function Tarif({item, activeTarif, setID}){
    const cl = activeTarif ? '.activeTarif' : null

    function handleActive(){
        setID(item.id)
    }

    return(
        <div className={style[item.color]}>
            <div className={`activeTarif {${cl}`} onClick={handleActive}>
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
        </div>   
    );
}