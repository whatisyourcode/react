exports.sayLove = name => {
    return `I love ${name}`;
}

exports.sayHello = name => {
    console.log(this.sayLove("여러분"));
    return `Hello ${name}`;
}

exports.value = 1234; // module.exports.value = 1234;와 같다.