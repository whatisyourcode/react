 import "./Body.css";
 import { useState } from "react";
 
 function Body(){
    console.log("update Body");
    // useState 로부터 count는 0을 setCount는 set역할로 비구조화 할당을 받는다
    const [count,setCount] = useState(0);
    const onIncrease =  () => {
        setCount(count + 1);
    }
       return ( 
        <div className="body">
            <h1>Body</h1>
            <h2>{count}</h2>
            <button onClick={onIncrease}>증가</button>
        </div>
   )
}



export default Body;