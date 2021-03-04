import './DetailsOfVoting.css'
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

function DetailsOfVoting({ voting }) {
    return (

        <div className="mainDiv">
            <div className="grid-container">
                <div style={{ fontSize: "40px" }}>



                    {voting.map(({ disApprovePer }, index) => {
                        return (
                            <h1 key={index}>
                                {disApprovePer}
                            </h1>
                        );
                    })
                    }

                    <p>נגד</p>

                </div>
                <div style={{ fontSize: "100px" }}>
                <br></br>

                    <br></br><br></br><br></br>
                    <span className="linebetween"></span>
                </div>

                <div style={{ fontSize: "40px" }}>


                    {voting.map(({ ApprovePer }, index) => {
                        return (
                            <h1 key={index}>
                                {ApprovePer}
                            </h1>
                        );
                    })}


                    <p>בעד</p>

                </div>


            </div>

            {/* end content */}


            {/* question */}

            <br></br>
            <h3 style={{ color: "#324483" }}>

                מה הבחירה שלך?

                   </h3>

            {/* end question */}



            {/* icons view */}

            <div className="grid-container">
                <div>


                    <AiFillDislike className="divlike" style={{ color: "#324483" }} />
                    <h2>אני נגד</h2>

                </div>
                <div ></div>
                <div >

                    <AiFillLike className="divlike" style={{ color: "#324483" }} />
                    <h2>אני בעד</h2>

                </div>

            </div>

        </div>
    );
}

export default DetailsOfVoting;
