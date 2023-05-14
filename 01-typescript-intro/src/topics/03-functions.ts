function addNumbers( a: number, b: number ):number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
    return `${a + b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5)

// console.log({result, result2, multiplyResult});

interface Character {
    name: string,
    hp: number,
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const poje: Character = {
    name: 'Poje',
    hp: 50,
    showHp() {
        console.log(`puntos de vida: ${ this.hp }`);
    }
}
healCharacter(poje, 30);

console.log(poje);

export {};