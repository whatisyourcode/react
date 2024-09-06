 function Body2() {
    const num = 19;
    const arr = [1,2,3];
    const obj = {a: 10, b: 20};
    const name = '리액트';
    const name2 = '리액트2';
    const numA = 10;
    const numB = 20;

    if(num % 2 === 0){
        return   <h2>짝수</h2>
    }else {
       return  <h2>홀수</h2>
    }

    // return (
    //     <div>
    //         <h1>Body</h1>
    //         <h2>{arr}</h2>
    //         <h2>{num}은 {num %2 === 0 ? "짝수" : "홀수"}</h2>
        
    //         <h2>{obj.a}, {obj.b} </h2>
    //         <h2>{name + name2}</h2>
    //         <h3>{numA} + {numB} = { numA + numB }</h3>
    //     </div>
    // )
}

export default Body;