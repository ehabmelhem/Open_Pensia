import React from 'react'
import CardListItem from '../CardListItem'
import './Body.css'

export default function ListQuestions(props) {
    return (
        <div id="allList">
            {props.companies.map((item)=>{
                if(item.sort == props.sort)
             return  <CardListItem  hideImg="hideImg" name={item.name} par={item.par} />
            })}
        </div>
    )
}
/**
 * logo
 * name
 * par
 */