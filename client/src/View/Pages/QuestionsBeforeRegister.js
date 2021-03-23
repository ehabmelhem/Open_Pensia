<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import "./QuestionsBeforeRegister.css";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function QuestionsBeforeRegister() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const history = useHistory();
  function toLoginPage() {
    history.push('Login')
  }





  const handleChange = (event) => {
    const name = event.target.name;
    console.log(event.target.value)
    setState({
      ...state,
      [name]: event.target.value,
    });
<<<<<<< Updated upstream
  };

  return (

    <div className="bod">
      <div className="icon"> </div>
      <div className="space" />
      <div className="direction">
        <div className="titleQ">2 שאלות קצרות ואנחנו בפנים</div>
        <div className="space" />
        <div className="name">בחר/י גוף פנסיוני</div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Age</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="ten">Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <div className="space" />
        <div className="line" />
        <div className="space" />
        <div className="channelname">בחר/י אפיק חיסכון</div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Age</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value="ten">Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <div className="space" />
        <div className="line" />
        <button className="but">אהבתי</button>
        <div />
        <a className='signin' onClick={toLoginPage}>יש לי כבר חשבון </a>
      </div>
    </div>



  )
}
=======
 
    const savePersonalInfo = (e) => {
        e.preventDefault();
        setuser({firstName : "kabha" , lastName : "rwed" , email : "kabha" , phone : "052658821" , password : "asdasd", status : "true", fundName : "ddd",chanel : "fsde",registerDate : "arab"})
            fetch("http://localhost:3002/new-user/add-user", {
              method: "POST",
              headers: {
                "Accept": "application/json; odata=verbose",
                "Content-Type": "application/json",
              },
<<<<<<< Updated upstream

              body: JSON.stringify({ userinformation : user }),

=======
              body: JSON.stringify({ userinformation : user }),
              body: JSON.stringify({ isname: name }),
>>>>>>> Stashed changes
            })
              .then((r) => r.json())
              .then((data) => {
               console.log("A")
              });
    }
    return (
        <div className="body">
            <h3 className="info">נתוני ההצבעה שלך שמורים במערכת</h3>
            <br></br>
             < Inputclass textenglish  = {"nameprivate"}  texter = {"שם פרטי"} ></Inputclass>
             < Inputclass textenglish  = {"family"}  texter = {"שם משפחה"} ></Inputclass>

             < Inputclass textenglish  = {"email"}  texter = {"כתובת מייל"} ></Inputclass>
             < Inputclass textenglish  = {"phone"}  texter = {"מספר טלפון"} ></Inputclass>

         <br></br>
<button  onClick= {savePersonalInfo} className="but">הלאה</button>
        </div>
<<<<<<< Updated upstream
    )   
    }
=======
    
    )
}   
>>>>>>> Stashed changes
>>>>>>> Stashed changes
