 import "./Body.css";
 import { useState } from "react";
 
 function Body(){
       const [text,setText] = useState("");
       const [date,setDate] = useState("");
       const [option,setOption] = useState("");

       const handleSelect = (e) => {
            setOption(e.target.value);
       }

       const handleClick = (e) =>{
            setDate(e.target.value);
       }

       const handleChange = (e) => {
            setText(e.target.value);
       }
       return ( 
        <div className="body">
            <h1>Body</h1>
            <select value={option} onChange={handleSelect}> 
                <option key={"1번"}>1번</option>
                <option key={"2번"}>2번</option>
                <option key={"3번"}>3번</option>
            </select>
            <input type="text" value={text} onChange={handleChange} />
            <input type="text" value={date} onChange={handleClick} />
            <p>{text},{date},{option}</p>
        </div>
   )
}



export default Body;