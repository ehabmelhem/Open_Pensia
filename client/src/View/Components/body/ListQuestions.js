import React from 'react'
import QuestionListItem from '../QuestionListItem'
import './Body.css'
//item.status:"Top" -- props.sort ="Top"
export default function ListQuestions({questionsList, sort}) {
    console.log(questionsList)

    return (
        <div id="allList">
            { !!questionsList &&questionsList.map((question) => {


               return <QuestionListItem key={question._id} question={question} />


            })}
        </div>
    )
}
