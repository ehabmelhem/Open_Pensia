import React, { useEffect, useState } from 'react'
import CardListItem from '../CardListItem'
import './Body.css'
//item.status:"Top" -- props.sort ="Top"
export default function ListQuestionsByFetch(props) {
   const [questionsList,setQuestionsList] = useState();

   useEffect(()=>{
       fetch(`${props.fetch}`).then(r=>r.json()).then(data=>console.log(data))
   },[])

    return (
        <div id="allList">
            { !!questionsList && questionsList.map((question) => {
return <CardListItem hideImg="hideImg" companyName={question.Topic} par={question.par}/>
            })}
        </div>
    )
}
