import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./QuestionsBeforeRegister.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function QuestionsBeforeRegister({ chanelC, fundnameC }) {
  const [fundNames, setFundNames] = useState([]);
  const [chanellNames, setChanellNames] = useState([]);
  const [FundsData, setFundsData] = useState({});
  const [fundNameChosen, setFundNameChosen] = useState("");
  const [chanellNameChosen, setChanellNameChosen] = useState("");
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const history = useHistory();
  function toLoginPage() {
    history.push("Login");
  }

  async function getAllFund(e) {
    await fetch("/proxy/get-all-fund", {
      method: "POST",
      headers: {
        Accept: "application/json; odata=verbose",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((r) => r.json())
      .then((data) => {
        let arr = [];
        for (let key in data.data) {
          arr.push(key);
        }
        setFundNames(arr);
        setFundsData(data.data);
        console.log(arr);
      });
  }
  useEffect(() => {
    getAllFund();
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    console.log(event.target.value);
    setFundNameChosen(event.target.value);

    setChanellNames(FundsData[event.target.value]);

    fundnameC(event.target.value);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChanell = (event) => {
    const name = event.target.name;
    console.log(event.target.value);
    setChanellNameChosen(event.target.value);
    chanelC(event.target.value);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  //fundsData[fundsChoosen]=>Array
  return (
    <div>
      <div className="icon"> </div>
      <div className="space" />
      <div className="direction">
        <div className="titleQ">2 שאלות קצרות ואנחנו בפנים</div>
        <div className="space" />
        <div className="name">בחר/י גוף פנסיוני</div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple"></InputLabel>
          <Select className="select"
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {fundNames.map((index, fund) => (
              <option key={fund} value={index}>
                {index}
              </option>
            ))}
          </Select>
        </FormControl>

        <div className="channelname">בחר/י אפיק חיסכון</div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple"></InputLabel>
          <Select className="select"
            native
            value={state.year}
            onChange={handleChanell}
            inputProps={{
              name: "year",
              id: "year-native-simple",
            }}
          >
            <option aria-label="None" value="" />

            {chanellNames.map((index2, chanell) => (
              <option key={chanell} value={index2}>
                {index2}
              </option>
            ))}
          </Select>
        </FormControl>

        <div />
      </div>
    </div>
  );
}
