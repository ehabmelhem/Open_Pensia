import React, { useState, useEffect } from 'react';
import ButtonShow from './ButtonShow'
import PersonaiInfo from './QuestionsBeforeRegister'
import Inputclass from '../Components/InputText'
export default function SignUp() {
    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(false);
    const [sort, setSort] = useState("PersonalInfo");

    function select(selectedButton) {
        switch (selectedButton) {
            case 'button1':
                setButton1(true);
                setButton2(false);
                setSort("PersonalInfo")
                break;

            case 'button2':
                setButton1(false);
                setButton2(true);
                setSort("Confirmation")
                break;

            
            default:
                break;
        }
    }
    function PassToConfirm(e){
        setButton1(false)
        setButton2(true)
        setSort("Confirmation")
    }
    return (
        <div>

            <div id="buttonsBar">
                <div id="button1" onClick={() => select('button1')}> <ButtonShow text="פרטים אישיים" selected={button1} /> </div>
                <div id="button2" onClick={() => select('button1')}> <ButtonShow text="אימות נתונים" selected={button2} /></div>
            </div>

            {sort==="PersonalInfo"?
            <button onClick={PassToConfirm}/>:<div>sdljhsldh</div>}
            



        </div>
    )
}
