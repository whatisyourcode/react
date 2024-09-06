 import "./Body.css";
 
 function Body(){
    function handleClick(e) {
        console.log(e.target);
        console.log(e.target.name);
    }

    return (
        <div className="body">
            <h1>Body</h1>
            <button name="A버튼" onClick={handleClick}>A버튼</button>
            <button name="B버튼" onClick={handleClick}>B버튼</button>
        </div>
    );
}



export default Body;