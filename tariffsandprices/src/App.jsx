import React from 'react'
import {useState} from 'react'
import './style/App.scss';
import Tarif from './Tarif'

const arr = [
    {
        title: 'Безлимитный 300',
        price: 200 +'руб/мес',
        speed: 'до 10 Мбит/сек',
        info: 'Объем включенного трафика не ограничен',
        color: 'skyblue',
        id: 1
    },
    {
        title: 'Безлимитный 450',
        price: 400 +'руб/мес',
        speed: 'до 50 Мбит/сек',
        info: 'Объем включенного трафика не ограничен',
        color: 'lightgreen',
        id: 2
    },
    {
        title: 'Безлимитный 550',
        price: 600 +'руб/мес',
        speed: 'до 100 Мбит/сек',
        info: 'Объем включенного трафика не ограничен',
       color: 'red',
       id: 3 
    },
    {
        title: 'Безлимитный 1000',
        price: 800 +'руб/мес',
        speed: 'до 200 Мбит/сек',
        info: 'Объем включенного трафика не ограничен',
        color: 'gray',
        id: 4  
    }
]

export default function App(){
const [id, setID] = useState(0)

    return(
        <>
            <div className='wrapper'>
                {arr.map((item, index)=> <Tarif
                item={item}
                key={index}
                activeTarif={item.id === id}
                setID={setID}
                />)}
            </div>
        </>
    )
}


    
    // return(
    //     <>
    //         <div className='wrapper'>
    //             {arr.map(item=><Tarif{...item}/>)}
    //         </div>
    //     </>
    // );
