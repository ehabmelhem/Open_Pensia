import React from 'react'
import NavBarLists from '../Components/NavBarLists'
import ListQuestions from '../Components/body/ListQuestions'
import ListQuestionsByFetch from '../Components/body/ListQuestionsByFetch'

const questionsList = [
    { status:{"results":true},Topic: 'פרשמרקט', par: 'קמעונאות מזון' },
    { status:{"results":true},  Topic: 'הולמס פלייס', par: 'חדרי כושר' },
    { status:{"results":true},  Topic: 'חילן', par: 'טכנולוגיה' },
    { status:{"results":false}, Topic: 'בנק הפועלים', par: 'בנקאות' },
    { status:{"results":false}, Topic: 'פרשמרקט', par: 'קמעונאות מזון' },
    { status:{"results":false}, Topic: 'הולמס פלייס', par: 'חדרי כושר' },
    { status:{"results":false}, Topic: 'חילן', par: 'טכנולוגיה' },
    { status:{"results":false},  Topic: 'בנק הפועלים', par: 'בנקאות' }
  ,
  { status:"Open",Topic: 'פרשמרקט', par: 'קמעונאות מזון' },
  { status:"Open",  Topic: 'הולמס פלייס', par: 'חדרי כושר' },
  { status:"Open",  Topic: 'חילן', par: 'טכנולוגיה' },
  { status:"Open", Topic: 'בנק הפועלים', par: 'בנקאות' },
  { status:"Open", Topic: 'פרשמרקט', par: 'קמעונאות מזון' },
  { status:"Open", Topic: 'הולמס פלייס', par: 'חדרי כושר' },
  { status:"Open", Topic: 'חילן', par: 'טכנולוגיה' },
  { status:"Open",  Topic: 'בנק הפועלים', par: 'בנקאות' }
,
{ status:"Open",Topic: 'פרשמרקט', par: 'קמעונאות מזון' },
{ status:{"results":false},  Topic: 'הולמס פלייס', par: 'חדרי כושר' },
{ status:{"results":true},  Topic: 'חילן', par: 'טכנולוגיה' },
{ status:{"results":false}, Topic: 'בנק הפועלים', par: 'בנקאות' },
{ status:{"results":true}, Topic: 'פרשמרקט', par: 'קמעונאות מזון' },
{ status:{"results":false}, Topic: 'הולמס פלייס', par: 'חדרי כושר' },
{ status:{"results":true}, Topic: 'חילן', par: 'טכנולוגיה' },
{ status:{"results":false},  Topic: 'בנק הפועלים', par: 'בנקאות' }
 ]

export default function VotesList(props) {
 if(props.fetch !== null && props.fetch !== undefined){
     console.log("joined")
        return(
              <div>
            <NavBarLists title={props.title}/>
            <ListQuestionsByFetch  fetch={props.fetch}/>
        </div>
        )
    }
    else
    return (
        <div>
            <NavBarLists title={props.title}/>
            <ListQuestions fetch={props.fetch} questionsList={questionsList} sort={props.status}/>
        </div>
    )
}
