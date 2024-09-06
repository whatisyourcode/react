 import "./Body.css";
 
 function Body({name,location,favoriteList}) {
    // 비구조화 할당
 //   const {name,location} = props;
 //   console.log(props);
    return (
        <div className="body">
                <h1>Body</h1>
                <h2>{name}</h2>
                {name}님은 {location}에 사시는군요.
                <h2>좋아하는 과일</h2>
                {favoriteList.length}개의 과일을 좋아하시는군요.
                <ul>
                    {favoriteList.map((item,index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
        </div>
    );
}

Body.defaultProps = {
    name: "이름없음",
    location: "위치 없음",
    favoriteList: []
}

export default Body;