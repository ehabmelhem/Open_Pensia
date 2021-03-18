import React,{useState} from 'react'
import ButtonShow from './ButtonShow'
import ListQuestions from './ListQuestions'
import './Body.css'

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

export default function Body() {
    const [button1,setButton1] = useState(true);
    const [button2,setButton2] = useState(false);
    const [button3,setButton3] = useState(false);
    const [sort,setSort] = useState(0);


    function select(selectedButton){
        switch (selectedButton) {
            case 'button1':
                setButton1(true);
                setButton2(false);
                setButton3(false);
                setSort(0)
                break;
                
                case 'button2':
                    setButton1(false);
                    setButton2(true);
                    setButton3(false);
                    setSort(1)
                    break;  

                    case 'button3':
                        setButton1(false);
                        setButton2(false);
                        setButton3(true);
                        setSort(2)
                        break;      
            default:
                break;
        }
    }
    return (
        <div>
            <div id="buttonsBar">
           <div id="button1" onClick={()=>select('button1')}> <ButtonShow  text="הכי חמים" selected={button1}/> </div>
           <div id="button2" onClick={()=>select('button2')}> <ButtonShow text="סגורים" selected={button2}/></div>
           <div id="button3" onClick={()=>select('button3')}>  <ButtonShow text="פתוחים" selected={button3}/></div>
            </div>
           
            <ListQuestions questionsList={questionsList} sort={sort}/> 
        </div>
    )
}
