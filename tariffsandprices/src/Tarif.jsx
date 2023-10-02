import style from './style/tarif.module.scss'

export default function Tarif({title, price, speed, info, color}){
    return(
        <div className={style[color]}>
            <div className='titleWrapper'>
                <p className='title'>{title}</p>
            </div>   

            <div className='priceWrapper'>
                <p className='price'>{price}</p>
            </div>

            <div className='speedWrapper'>
                <p className='speed'>{speed}</p>
            </div>

            <div className='infoWrapper'>
                <p className='info'>{info}</p>
            </div>
        </div>   
    );
}