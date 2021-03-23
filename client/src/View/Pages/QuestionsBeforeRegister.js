
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