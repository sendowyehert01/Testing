import Dog from "./Dog";
import { add, multiply, divide } from "./utils";
import ShelterDog from "./ShelterDog";


const elton = new Dog('Wowsi', 'Askal', 12);
elton.bark();

console.log(add(2,4));
console.log(multiply(2,4));
console.log(divide(2,4));

const buffy = new ShelterDog('Robertttttttttttttttttt', 'bulldog', 12, 'Laguna');