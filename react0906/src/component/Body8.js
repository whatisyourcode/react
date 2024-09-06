import "./Body.css";
import { useState } from "react";

function Body() {
    const [state, setState] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: ""
    });
    const handleOnChange = (e) => {
        console.log("현재 수정 대상:", e.target.name);
        console.log("현재 수정 값:", e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };



    // const [name,setName] = useState("");
    // const [gender,setGender] = useState("");
    // const [birth,setBirth] = useState("");
    // const [bio,setBio] = useState(""); 

    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // }

    // const OnChangeGender = (e) => {
    //     setGender(e.target.value);
    // }

    // const onChangeBirth = (e) => {
    //     setBirth(e.target.value);
    // }

    // const onChangeBio = (e) => {
    //     setBio(e.target.value);
    // }
    
    return (
        <div className="body">
            <h1>Body</h1>
            <div>
                <input name="name" value={state.name} onChange={handleOnChange} placeholder="이름" />
            </div>
            <div>
                <select name="gender" value={state.gender} onChange={handleOnChange}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" name="birth" value={state.birth} onChange={handleOnChange} />
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={handleOnChange} />
            </div>
            <p>{state.name},{state.gender},{state.birth},{state.bio}</p>
        </div>
    )
}



export default Body;