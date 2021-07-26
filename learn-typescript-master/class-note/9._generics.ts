function logText(text) {
    console.log(text);
    return text;
}
logText(10); // number 10
logText('hi'); // string hi
logText(true); // true;

//---------------
// Type 별로 중복된 코드가 생김
function logTextTypeString(text: string) {
    console.log(text);
    text.split('').reverse().join('');
    return text;
}

function logTextTypeNumber(text: number) {
    console.log(text);
    text.toLocaleString();    
    return text;
}

// Union type
function logTextUnion(text: string | number) {
    console.log(text);
    return text;
}

const logValue = logTextUnion('hi');
logTextUnion(10);

// generic
function logTextGeneric<T>(text:T): T {
    console.log(text);
    return text;
}

const logStringValue = logTextGeneric<string>('hi'); // string hi
logStringValue.split('').reverse().join('');
logTextGeneric<number>(10); // number 10

logTextGeneric<boolean>(true); // true;


// interface /w generic
interface Dropdown {
    value: string;
    selected: boolean;
}
const obj: Dropdown = {
    value: 'hi',
    selected: true,
}

interface DropdownGeneric<T> {
    value: T;
    selected: boolean;
}
const objGener1: DropdownGeneric<string>  = {
    value: 'hi',
    selected: true,
}
objGener1.value.split('');
    

// generic /w type limit
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T ): T {
    console.log(text.length);
    return text;
}
logTextLength2('hi');


//generic /w keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem >(itemOption: T):T {

    return itemOption;
}
getShoppingItemOption('name');
getShoppingItemOption('price');
getShoppingItemOption('stock');

interface Todo {
    id: number;
    text: string;
    due: Date;
}

type TodoKeys = keyof Todo;

const todoKey: TodoKeys = 'id';

interface Person {
    name: string
    age: number
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key]=value
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}
const person: Person = {
    name: 'Anna',
    age:30,
}
setProperty(person, 'name', 'Anna')