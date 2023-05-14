
export class Person {

    constructor(public firstName: string, 
        public lastName: string,
        public address: string = 'No address'
        ){
        this.firstName = firstName;
        this.address = address;
        this.lastName = lastName;
    }

}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York');
//     }
// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        // this.person = new Person(realName);
    }
}

const person = new Person('Tony', 'Stark', 'New York');

const ironMan = new Hero('Iron Man',45,'Tony', person);

console.log(ironMan);