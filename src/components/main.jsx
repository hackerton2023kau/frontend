import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom" ;

const Main = () =>{
    return (
        <div className='container'>
            <div className='first-question'>
                <Link to="/useQuestion"><button>문제 있을때</button></Link>
            </div>
            <div className='second-question'>
                <Link to="/useKeywords"><button>개념과 키워드만</button></Link>
            </div>
        </div>
    )

}

export default Main;