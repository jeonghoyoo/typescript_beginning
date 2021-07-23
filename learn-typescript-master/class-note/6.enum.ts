enum shoes {
    Nike = 10,
    Adidas
}

var myShoes = shoes.Adidas;
console.log(myShoes); // Adidas

// 예제
function askQuestion(answer: string) {
    if (answer === 'yes') {
        console.log('correct!');
    }

    if (answer === 'no') {
        console.log('try again!');
    }
}
askQuestion('Yes');
askQuestion('y');
askQuestion('Y');

enum Answer {
    Yes,
    No,
}

function askQuestionEnum(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('correct!');
    }

    if (answer === Answer.No) {
        console.log('try again!');
    }
}
askQuestionEnum(Answer.Yes);
askQuestionEnum(Answer.No);