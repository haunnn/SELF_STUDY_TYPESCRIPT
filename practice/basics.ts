function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect Input!!')
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);        // Result is: 7.8
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phraseResult = 'Result is: '
add(number1, number2, printResult, phraseResult);