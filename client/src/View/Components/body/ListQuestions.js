import React from 'react'
import CardListItem from '../CardListItem'
import './Body.css'
//item.status:"Top" -- props.sort ="Top"
export default function ListQuestions(props) {
    console.log(props.questionsList)

    return (
        <div id="allList">
            { !!props.questionsList &&props.questionsList.map((question) => {

return <CardListItem hideImg="hideImg" companyName={question.Topic} par={question.par}/>
            //    <p>{question.Topic}</p>


            })}
        </div>
    )
}
