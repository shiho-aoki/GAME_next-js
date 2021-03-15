import style from './layout.module.css';

export default function Layoyt({ children }){
    return <div className={style.container}>{ children }</div>
}