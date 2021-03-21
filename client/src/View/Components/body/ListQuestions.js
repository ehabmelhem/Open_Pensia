import React from 'react'
import CardListItem from '../CardListItem'
import './Body.css'
//item.status:"Top" -- props.sort ="Top"
export default function ListQuestions({questionsList, sort}) {
    console.log(questionsList)

    return (
        <div id="allList">
            { !!questionsList &&questionsList.map((question) => {


               return (<p>{question.Topic}</p>)


            })}
        </div>
    )
}
