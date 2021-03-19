import React from 'react'
import CardListItem from '../CardListItem'
import './Body.css'
//item.status:"Top" -- props.sort ="Top"
export default function ListQuestions(props) {
    console.log(props.questionsList)
    return (
        <div id="allList">
            { props.questionsList.map((question) => {


               <p>{question.Topic}</p>


            })}
        </div>
    )
}
