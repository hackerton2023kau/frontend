import React from 'react';
import {Link} from "react-router-dom" ;
import '../App.css';
import SideList from './sideList';

const Main = () =>{
    return (
        <div className='container'>
            <SideList/>
            <div className='first-question'>
                <Link to="/useQuestion"><button>문제 있을때</button></Link>
            </div>
            <div className='second-question'>
                <Link to="/useKeywords"><button>개념과 키워드만</button></Link>
            </div>
            <div className='third-question'>
                <Link to="/usePicKeywords"><button>키워드 사진</button></Link>
            </div>
            <div className='first-question'>
                <Link to="/contact"><button>면접</button></Link>
            </div>
        </div>
    )

}

export default Main;