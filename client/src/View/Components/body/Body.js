import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import ButtonShow from './ButtonShow'
import ListQuestions from './ListQuestions'
import './Body.css'

//redux
import { fetchCompanyQuestions } from '../../../redux/Company/CompanyActions'

const questionsList = [
    { status: "Top", Topic: 'פרשמרקט', par: 'קמעונאות מזון' },
    { status: { "results": true }, Topic: 'הולמס פלייס', par: 'חדרי כושר' },
    { status: { "results": false }, Topic: 'חילן', par: 'טכנולוגיה' },
    { status: "Open", Topic: 'בנק הפועלים', par: 'בנקאות' },
    { status: { "results": true }, Topic: 'פרשמרקט', par: 'קמעונאות מזון' },
    { status: "Open", Topic: 'הולמס פלייס', par: 'חדרי כושר' },
    { status: "Top", Topic: 'חילן', par: 'טכנולוגיה' },
    { status: "Open", Topic: 'בנק הפועלים', par: 'בנקאות' }
]

export default function Body(props) {

    const dispatch = useDispatch();

    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [sort, setSort] = useState("Open");
    const [allQuestions, setAllQuestions] = useState([]);

    useEffect(() => {
        dispatch(fetchCompanyQuestions(props.security_ID))

        // fetch('/proxy/get-Question-by-secur-Id', {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ "Security_ID": `${props.security_ID}` })
        // }).then(r => r.json()).then(data => {
        //     console.log(data.data);
        //     setAllQuestions(data.data);
        // });
    }, [])


    function select(selectedButton) {
        switch (selectedButton) {
            case 'button1':
                setButton1(true);
                setButton2(false);
                setButton3(false);
                setSort("Top")
                break;

            case 'button2':
                setButton1(false);
                setButton2(true);
                setButton3(false);
                setSort("Open")
                break;

            case 'button3':
                setButton1(false);
                setButton2(false);
                setButton3(true);
                setSort({ "results": true })
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <div id="buttonsBar">
                <div id="button1" onClick={() => select('button1')}> <ButtonShow text="הכי חמים" selected={button1} /> </div>
                <div id="button2" onClick={() => select('button2')}> <ButtonShow text="פתוחים" selected={button2} /></div>
                <div id="button3" onClick={() => select('button3')}>  <ButtonShow text="תוצאות" selected={button3} /></div>
            </div>

            <ListQuestions questionsList={questionsList} sort={sort} />
        </div>
    )
}
/*
 * change the questionList props to allQuestions
 */
