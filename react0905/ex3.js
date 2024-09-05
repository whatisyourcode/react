const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false }
    ];
    let nextArray = array.concat({ id: 4 }); // 새 항목 추가
    nextArray =  nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
    nextArray = nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정
    console.log(array);
    console.log(nextArray);