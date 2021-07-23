interface Person {
    name: string;
    age: number;
}

var user: Person = {
    name: 'user',
    age: 30,
}

type PersonAlias = {
    name: string;
    age: number;
}



var student: PersonAlias = {
    name: 'user',
    age: 30,
}
