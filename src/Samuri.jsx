import samurai from './assets/samurai.png';
import menu from './assets/menu.svg';
import headphones from './assets/headphones.svg';
import { useState } from 'react';
import { useEffect } from 'react';



export default function Samuri(){
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(()=>{
    function hanlde(){
        setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', hanlde);
    return ()=>{
        window.removeEventListener('resize', hanlde);
    }
    },[])
    return (
    <main className="main">
    <div className="card">
    <div className='before' style={{height: (windowSize / 3) - 100, width: (windowSize / 3) - 100}}></div>
    <div className='after'></div>
        <header className='header'>
        <p>J . <span>tour</span></p> 
        <ul>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Facebook</li>
        </ul>
        <img className='menu' src={require(menu)} alt="menu" />
        </header>
        <p className='num'>1860</p>
        <p className='sm-text'>
        Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Ab, praesentium.
        </p>
        <p className='la-text'>
        Prehistory <br /> and ancient <br /> history
        </p>
        <ul className='list'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">FAQ</a></li>
        </ul>
        <div className='circuls'>
        <div className='circul'><p></p></div>
        <span className='line'></span>
        <div className='circul dash'></div>
        </div>
    <p className='text'>DRAG</p>
    <div>
        <div className='headphone'>
        <div className='pople'></div>
        <div className='pople'></div>
        <div className='pople'></div>
        <div className='pople'></div>
        <img width={"100%"} height={"100%"} src={headphones} alt="headphones" />
        </div>
    </div>
    </div> 
    <img className='image' height={(windowSize / 2) - 100} src={require(samurai)} alt="samurai" />
    </main>
    )
}
