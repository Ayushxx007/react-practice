import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from "./Components/Body.jsx";
import Header from "./Components/Header.jsx";





const App=()=>{

    return(
        <div id="app">


            <Header/>
            <Body/>
            
           
         




        </div>




    )
};



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);