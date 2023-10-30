export default class Dog {
    constructor(public name: string, public breed: string, age: number) {}
    bark() {
        console.log("Woof!");
    }
}