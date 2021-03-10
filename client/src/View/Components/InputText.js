
import './InputText.css'

function InputText({ texter }) {
    return (
        <div>
            {console.log(texter)}
            <h3 className="textdisplay">
                {texter}
            </h3>
            <br></br>

            <input type="text" className="textinput" ></input>
            
        </div>
    );
}

export default InputText;