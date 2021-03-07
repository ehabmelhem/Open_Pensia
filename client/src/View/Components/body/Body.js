import React,{useState} from 'react'
import ButtonShow from './ButtonShow'
import ListQuestions from './ListQuestions'
import './Body.css'

const companies = [
    { sort:1, logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { sort:2, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' },
    { sort:2, logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { sort:2, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
    { sort:1, logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' }
 ,
    { sort:1, logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { sort:2, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' },
    { sort:2, logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { sort:2, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
    { sort:1, logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' }
,
    { sort:1, logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { sort:2, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' },
    { sort:2, logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { sort:2, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
    { sort:1, logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
    { sort:0, logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' }
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
           
            <ListQuestions companies={companies} sort={sort}/> 
        </div>
    )
}
