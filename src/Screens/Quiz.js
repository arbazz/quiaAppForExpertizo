import React, { useEffect, useState } from 'react'
import './Style.css'
import question from './question.json';
import { Line } from 'rc-progress';
import ReactStars from 'react-stars'
import { ReactComponent as Star } from '../assets/5-stars.svg';


const Quiz = () => {
    const [qustionIndex, setQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [difficulty, setDifficulty] = useState(0);
    const [score, setScore] = useState(0);
    const [wrong, setWrong] = useState(0)
    useEffect(() => {
        question[qustionIndex].incorrect_answers.push(question[qustionIndex].correct_answer)
        const newArray = shuffle(question[qustionIndex].incorrect_answers)
        // console.log(newArray)
        setAnswers(newArray);
        // console.log(difficulty)

    })
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    const handleClick = (ans) => {
        console.log("word")
        setQuestionIndex(qustionIndex + 1)
        if(question[qustionIndex].difficulty === "hard"){
            setDifficulty(3)
        }else if(question[qustionIndex].difficulty === "medium"){
            setDifficulty(2)
        }else{
            setDifficulty(1);
        }

        console.log(ans)
        if (ans === question[qustionIndex].correct_answer) {
            setScore(score + 1);
        } else {
            setWrong(wrong + 1)
        }
    }
    // console.log(question)
    const progress = qustionIndex * 5;
    if (qustionIndex === 19) {
        return (
            <div className="finalSCore">
                <p>Your score is {score * 100}</p>
            </div>
        )
    }

    return (
        <div className="quiz-container">
            <Line percent={progress} strokeWidth="4" strokeColor="#D3D3D3" />

            <div className="sec-contiaenr">

                <p className="question">Question {qustionIndex + 1} of 20</p>
                <p className="categ">{question[0].category}</p>
                

                {difficulty ===3 ? 
                <>
                <Star className="star"/>
                <Star className="star"/>
                <Star className="star"/>
                </>
                : 
                difficulty === 2 ? 
                <>
                <Star className="star"/>: 
                <Star className="star"/>: 
                </>:
                <Star className="star"/> 
            }

                <div className="question-1">
                    <p className="question-text">{question[qustionIndex].question.replace(/%20/g, " ").replace(/%27/g, "\"").replace(/%3F/g, "?")}</p>
                </div>
                {answers.length && <div className="column">
                    <div className="row">
                        {answers[0] && <p onClick={() => handleClick(answers[0])}
                            className="options">
                            {answers[0].replace(/%20/g, " ").replace(/%27/g, "\"").replace(/%3F/g, "?")}
                        </p>}
                        {answers[1] && <p className="options" onClick={() => handleClick(answers[1])}>
                            {answers[1].replace(/%20/g, " ").replace(/%27/g, "\"").replace(/%3F/g, "?")}</p>}
                    </div>
                    <div className="row">
                        {answers[2] && <p className="options" onClick={() => handleClick(answers[2])}>{answers[2].replace(/%20/g, " ").replace(/%27/g, "\"").replace(/%3F/g, "?")}</p>}
                        {answers[3] && <p className="options" onClick={() => handleClick(answers[4])}>{answers[3].replace(/%20/g, " ").replace(/%27/g, "\"").replace(/%3F/g, "?")}</p>}
                    </div>
                </div>}
                <div className="score">
                    <p>Score {score * 100 / 20}</p>
                </div>
                <Line
                    percent={progress}
                    strokeWidth="1"
                    strokeColor="#D3D3D3"
                    strokeColor="black"
                    strokeLinecap="square"
                    strokeWidth="2"
                    trailColor="grey" />
                <p>Max score {100 - wrong * 5}</p>
                <Line
                    percent={100 - wrong * 5}
                    strokeWidth="1"
                    strokeColor="#D3D3D3"
                    strokeColor="black"
                    strokeLinecap="square"
                    strokeWidth="2"
                    trailColor="grey" />
            </div>
        </div>
    )
}

export default Quiz