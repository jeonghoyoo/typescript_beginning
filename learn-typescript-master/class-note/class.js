class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('생성 완료!');
    }
}

var user1 = new Person('user1', 30); // 생성 완료!

function Perseon_(name,age) {
    this.name = name;
    this.age = age;
}

var user1_ = new Perseon_('user1', 30);