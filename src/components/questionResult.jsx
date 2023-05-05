import {React, useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom" ;

const QuestionResult = () =>{
    const location = useLocation();
    const file = location.state.file;
    const [imageSrc, setImageSrc] = useState('');
    console.log(file);

    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        setImageSrc(URL.createObjectURL(file));
      }, []);


    
    return (
        <div className='container'>
            <img style={{width:"500px", height:"500px"}} src={imageSrc} alt="preview-img" />
        </div>
    )

}

export default QuestionResult;