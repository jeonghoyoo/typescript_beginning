class PersonTs {
    private name: string; // 접근제한자 사용 가능
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

var userTs = new PersonTs('user1', 30);
console.log(userTs.age);
