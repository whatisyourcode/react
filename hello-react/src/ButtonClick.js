import React , { useState } from "react"


const ButtonClick= () => {
    const [count, setButton] = useState(0);
    
    return (
        <div>
        <p>{button}</p>
        <button onClick={()=> setCount(count+1)}>버튼</button>
        </div>

    );
}

export default ButtonClick;