import React from 'react'
import CardListItem from '../CardListItem'
import './Body.css'

export default function ListQuestions(props) {
    return (
        <div id="allList">
            {props.questionsList.map((item, index) => {
                if (item.sort == props.sort)
                    return <CardListItem
                        key={index}
                        hideImg="hideImg"
                        name={item.name}
                        par={item.par}
                        link="/"
                    />
            })}
        </div>
    )
}
/**
 * logo
 * name
 * par
 */