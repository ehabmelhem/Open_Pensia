import React from 'react'
import NavBarLists from '../Components/NavBarLists'
import ListQuestions from '../Components/body/ListQuestions'

const questionsList = [
    { sort:1,name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { sort:2,  name: 'הולמס פלייס', par: 'חדרי כושר' },
    { sort:0,  name: 'חילן', par: 'טכנולוגיה' },
    { sort:0, name: 'בנק הפועלים', par: 'בנקאות' },
    { sort:2, name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { sort:2, name: 'הולמס פלייס', par: 'חדרי כושר' },
    { sort:1, name: 'חילן', par: 'טכנולוגיה' },
    { sort:0,  name: 'בנק הפועלים', par: 'בנקאות' }
  ,
  { sort:1,name: 'פרשמרקט', par: 'קמעונאות מזון' },
  { sort:2,  name: 'הולמס פלייס', par: 'חדרי כושר' },
  { sort:0,  name: 'חילן', par: 'טכנולוגיה' },
  { sort:0, name: 'בנק הפועלים', par: 'בנקאות' },
  { sort:2, name: 'פרשמרקט', par: 'קמעונאות מזון' },
  { sort:2, name: 'הולמס פלייס', par: 'חדרי כושר' },
  { sort:1, name: 'חילן', par: 'טכנולוגיה' },
  { sort:0,  name: 'בנק הפועלים', par: 'בנקאות' }
,
{ sort:1,name: 'פרשמרקט', par: 'קמעונאות מזון' },
{ sort:2,  name: 'הולמס פלייס', par: 'חדרי כושר' },
{ sort:0,  name: 'חילן', par: 'טכנולוגיה' },
{ sort:0, name: 'בנק הפועלים', par: 'בנקאות' },
{ sort:2, name: 'פרשמרקט', par: 'קמעונאות מזון' },
{ sort:2, name: 'הולמס פלייס', par: 'חדרי כושר' },
{ sort:1, name: 'חילן', par: 'טכנולוגיה' },
{ sort:0,  name: 'בנק הפועלים', par: 'בנקאות' }
 ]

export default function VotesList(props) {
    return (
        <div>
            <NavBarLists title={props.title}/>
            <ListQuestions questionsList={questionsList} sort={props.sort}/>
        </div>
    )
}
