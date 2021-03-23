import React, { useEffect, useState } from 'react'
import CardListItem from '../CardListItem'
import './Body.css'
//item.status:"Top" -- props.sort ="Top"
export default function ListQuestionsByFetch(props) {
   const [questionsList,setQuestionsList] = useState();

   useEffect(()=>{
       fetch(`${props.fetch}`).then(r=>r.json()).then(data=>{setQuestionsList(data.doc);
    })
},[])
console.log(questionsList)
    return (
        <div id="allList">
            {questionsList !== undefined && questionsList.filter(e=>e!==null).map((question) => {
                console.log('joined')
return <CardListItem status={question.status} hideImg="hideImg" companyName={question.Topic} par={question.par}/>
            })}
        </div>
    )
}
