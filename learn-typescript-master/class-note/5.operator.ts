// union type
var userId: string | number | boolean = 10;

function logMessage(value: string | number) {
    if (typeof value === `number`) {
        value.toLocaleString();
    } else {
        value.toString();
    }
    throw new TypeError('value must be string or number.');    
}

logMessage('hello');
logMessage(100);

// Union type 특징
// interface Developer {
//     name: string;
//     skill: string;
// }

// interface Person {
//     name: string;
//     age: number
// }

// function askeSomeone(someone: Developer | Person) {
//     someone.name;
// }

// intersection Type
var neverUser: string & number & boolean;

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number
}

function askeSomeone(someone: Developer & Person) {
    someone.name;
    someone.age;
    someone.skill;
}