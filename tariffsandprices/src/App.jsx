import './style/App.scss';
import Tarif from './Tarif'

const arr = [
    {
        title: 'Безлимитный 300',
        price: 200 +'руб/мес',
        speed: 'до 10 Мбит/сек',
        info: 'Объем включенного трафика не ограничен',
        color: 'skyblue'
    },
    {
        title: 'Безлимитный 450',
        price: 400 +'руб/мес',
        speed: 'до 50 Мбит/сек',
        info: 'Объем включенного трафика не ограничен',
        color: 'lightgreen'
    },
    {
        title: 'Безлимитный 550',
        price: 600 +'руб/мес',
        speed: 'до 100 Мбит/сек',
        info: 'Объем включенного трафика не ограничен',
       color: 'red' 
    },
    {
        title: 'Безлимитный 1000',
        price: 800 +'руб/мес',
        speed: 'до 200 Мбит/сек',
        info: 'Объем включенного трафика не ограничен',
        color: 'gray'
    }
]

export default function App(){
    return(
            <div className='wrapper'>
                {arr.map(item=><Tarif{...item}/>)}
            </div>
    );
}