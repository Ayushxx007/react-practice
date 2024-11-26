import URL from "../utils/constants.js";
import {useState} from "react";

const Header=()=>{

    const [loginout, setLoginout] = useState("login");


    return (
        <div id="Header">

            <img id="img" src={URL}></img>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li> yoyo</li>
                <button onClick={()=>{setLoginout("logout");}}>{loginout}</button>
                

                </ul>
               


        </div>


    )
};


export default Header;