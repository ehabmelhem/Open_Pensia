import React from 'react'
import './CardListItem.css'

export default function CompanyBar(props) {
    const Arrow = "<"
        switch (props.type) {
            case "companyBar":
                return (
                    <li className="liBar">
            <img id="companyImg" src={props.companyImgSrc} />
            <p id="companyName">{props.companyName}</p>
            <p id="companyType">{props.companyType}</p>
            <img id="Arrow" src="https://i.ibb.co/j3xJsLZ/ezgif-3-95b9420870fb-removebg-preview.png"/>
        </li>
                    )
                break;
                case "questionBar":
                    return (
                        <li className="liBar">
                        <p id="questionTitle">{props.questionTitle}</p>
                        <p id="questionStatus">{props.questionStatus}</p>
                        <img id="arrowQuestion" src="https://i.ibb.co/j3xJsLZ/ezgif-3-95b9420870fb-removebg-preview.png"/>
                    </li>
                        )
                    break;

            default:
                break;
        }
    
}
