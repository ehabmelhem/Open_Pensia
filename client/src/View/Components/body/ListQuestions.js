import React from 'react'
import CardListItem from '../CardListItem'


export default function ListQuestions(props) {
    return (
        <div>
            {props.companies.map((item)=>{
                if(item.sort == props.sort)
             return  <CardListItem type="questionBar" questionTitle={item.name} questionStatus={item.par} />
            })}
        </div>
    )
}
/**
 * logo
 * name
 * par
 */