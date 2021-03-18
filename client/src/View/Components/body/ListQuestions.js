import React from 'react'
import CardListItem from '../CardListItem'
import './Body.css'
//item.status:"Top" -- props.sort ="Top"
export default function ListQuestions(props) {
    return (
        <div id="allList">
            { props.questionsList.map((item)=>{
                if(item.status == props.sort){
                    console.log(item.status)
                    return  <CardListItem  hideImg="hideImg" status={item.status} name={item.Topic} par={item.par} toLink="/VoteDirectors" />
                }

                if(props.sort.results == item.status.results ){                   
                        return <CardListItem  hideImg="hideImg" status="results" name={item.Topic} par={item.par} toLink="/VoteDirectors" />                   
                }
               
            })}
        </div>
    )
}
