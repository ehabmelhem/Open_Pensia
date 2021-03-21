import React from 'react'
import NavBarLists from '../Components/NavBarLists'
import ListQuestions from '../Components/body/ListQuestions'
/*
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
*/
export default function VotesList(props) {
    return (
        <div>
            <NavBarLists title={props.title}/>
            <ListQuestions questionsList={questionsList} sort={props.status}/>
        </div>
    )
}
