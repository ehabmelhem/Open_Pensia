import React from 'react'
import CardListItem from '../CardListItem'
import './Body.css'
//item.status:"Top" -- props.sort ="Top"
export default function ListQuestions(props) {
    return (
        <div id="allList">
            {props.questionsList.map((item)=>{
                if(props.sort == "results"){
                    if(item.status.results == true){
                        return <CardListItem  hideImg="hideImg" name={item.name} par={item.par} toLink="/VoteDirectors" />
                    }
                }
                if(item.status == props.sort)
             return  <CardListItem  hideImg="hideImg" name={item.name} par={item.par} toLink="/VoteDirectors" />
            })}
        </div>
    )
}
