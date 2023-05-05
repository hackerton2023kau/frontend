import {React, useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom" ;
import axios from 'axios';
import '../App.css';

const QuestionResult = () =>{
    const location = useLocation();
    const file = location.state.file;
    //이전페이지에서 답안도 받아야됨 api 가따가
    const [imageSrc, setImageSrc] = useState('');
    const [showAns, setShowAns] = useState(0); // 1이면 보이기, 0이면 답안 숨기기
    const [getAns, setGetAns] = useState(0); // 1면 map
    const [answerList, setAnswerList] = useState([
        {
          pic: '',
          ans: ''
        }
      ]); //답안목록


    const answerHandler = () => {
        setShowAns(!showAns);
    }

    const getAnswer = () => {// 최초 다른 문제를 받아와 answerList를 초기화
        setGetAns(1);
        //api
        if(answerList[0].pic === null){
            setAnswerList();
        }
    }
    
    const getAnswer2 = () => {// 이후 다른 문제를 받아와 answerList에 append
        setGetAns(getAns+1);
        //api
        setAnswerList(answerList => [...answerList, answerList]);
        console.log("dd");
    }

    useEffect(() => {
        console.log(file);
        console.log('컴포넌트가 화면에 나타남');
        setImageSrc(URL.createObjectURL(file));
      }, []);


    
    return (
        <div className='container'>
            <div className='q-section'>
                <div className='result-usepic-title'>
                    문제
                </div>
                <div className='result-usepic'>
                    <img style={{width:"75%", height:"500px"}} src={imageSrc} alt="preview-img" />
                </div>
                <div className='result-usepic-answer'>
                    {showAns ? <button onClick={answerHandler}>▶ 숨기기</button> : <button onClick={answerHandler}>▼ 답안보기</button>}
                </div>
                <div className='result-usepic-answer2'>
                    {showAns ? "답안 들어오는곳" : ""}
                </div>
                <div className='result-usepic-gene'>
                    <button className='inner' onClick={getAnswer}>다른 문제 만들기</button>
                </div>
                {getAns ? answerList.map(item =>
                    <div key={item.pic}>
                        <div className='result-usepic-title'>
                            문제
                        </div>
                        <div className='result-usepic'>
                            <img style={{width:"75%", height:"500px"}} src={imageSrc} alt="preview-img" />
                        </div>
                        <div className='result-usepic-answer'>
                            {showAns ? <button onClick={answerHandler}>▶ 숨기기</button> : <button onClick={answerHandler}>▼ 답안보기</button>}
                        </div>
                        <div className='result-usepic-answer2'>
                            {showAns ? "답안 들어오는곳" : ""}
                        </div>
                        <div className='result-usepic-gene'>
                            <button className='inner' onClick={getAnswer2}>다른 문제 만들기</button>
                        </div>
                    </div>) 
                : <div></div>
                }
            </div>
        </div>
    )

}

export default QuestionResult;