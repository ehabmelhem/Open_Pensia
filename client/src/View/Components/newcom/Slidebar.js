// import React, { useEffect } from 'react';
// import Switch from '@material-ui/core/Switch';
// import Paper from '@material-ui/core/Paper';
// import Slide from '@material-ui/core/Slide';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: 180,
//   },
//   wrapper: {
//     width: 100 + theme.spacing(2),
//   },
//   paper: {
//     zIndex: 1,
//     position: 'relative',
//     margin: theme.spacing(1),
//   },
//   svg: {
//     width: 100,
//     height: 100,
//   },
//   polygon: {
//     fill: theme.palette.common.white,
//     stroke: theme.palette.divider,
//     strokeWidth: 1,
//   },
// }));

// export default function SimpleSlide(props) {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState(false);

//   return (
//     <div className={classes.root}>
//       <div className={classes.wrapper}>
//         <Slide direction="left" in={props.ToF} mountOnEnter unmountOnExit>
//           <Paper elevation={4} className={classes.paper}>
//           <ul id="allListMenu">
//                 <li className="eachLineInMenu">חברות האחזקה שלי</li>
//                 <li className="eachLineInMenu">הצבעות ממתינות לתשובה</li>
//                 <li className="eachLineInMenu">היסטורית הצבעות</li>
//                 <li className="eachLineInMenu">הצבעות פתוחות</li>
//                 <li className="eachLineInMenu">שתף לחברים</li>
//                 <li className="eachLineInMenu">תרומה לעמותה</li>
//                 <li className="eachLineInMenuLast">התנתק/י</li>
//             </ul>
//           </Paper>
//         </Slide>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { FaBars,FaCartPlus } from "react-icons/fa";
import { AiOutlineClose,AiFillHome } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import {IconContext} from "react-icons";

import "./Slidebar.css";


const Sidebar = ({}) => {
    const [sidebar,setSidebar] =useState(false);

    const showSidebar =()=>{
        setSidebar(!sidebar)
    }

    console.log(sidebar);
    return ( <>
    <IconContext.Provider value={{color:"#fff"}}>
    <div className="navbar">
        <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
        </Link>
    </div>
    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={()=> setSidebar(false)}>
                <Link to="#" className="menu-bars">
                    <AiOutlineClose/>
                </Link>
            </li>
            <li className="nav-text">
                <Link to="/" className="menu-bars">
                    
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-text">
                <Link to="/reports" className="menu-bars">
                   
                    <span>Reports</span>
                </Link>
            </li>
            <li className="nav-text">
                <Link to="/products" className="menu-bars">
                   
                    <span>Products</span>
                </Link>
            </li>
        </ul>
    </nav>
    </IconContext.Provider>
    </>);
}
 
export default Sidebar;