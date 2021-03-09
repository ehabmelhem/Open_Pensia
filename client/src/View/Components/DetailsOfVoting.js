import './DetailsOfVoting.css'
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

function DetailsOfVoting({ voting }) {
    return (

        <div className="mainDiv" >
            
            <br></br><br></br>

            <div className="grid-container" >
                <div className="percent-div" >


                    {
                        voting.map(({ disApprovePer }, index) => {
                            return (
                                <h1 key={index} > { disApprovePer} </h1>
                            );
                        })
                    }

                    <p> נגד </p>

                </div>
                <div>

                    <br></br>
                    <span className="linebetween" > </span>
                </div >

                <div className="percent-div" >


                    {
                        voting.map(({ ApprovePer }, index) => {
                            return (<h1 key={index} > { ApprovePer} </h1>
                            );
                        })
                    }


                    <p> בעד </p>

                </div>

           <br></br>           <br></br>

            </div>

            { /* end content */}


            { /* question */}

            <p className="bold-font" >

                מה הבחירה שלך ?

        </p>

            { /* end question */}



            { /* icons view */}
            <div className="grid-container" >
                <div className="body-div">


                    <AiFillDislike className="body-dislike" />
                    <p > אני נגד </p>

                </div> <div > </div> 
                <div className="body-div">

                    <AiFillLike className="body-like" />
                    <p > אני בעד </p>

                </div>

            </div>

        </div>
    );
}

export default DetailsOfVoting;