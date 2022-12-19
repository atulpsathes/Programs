let person = {
    name: 'Atul',
    age: 30
}
person.name = 'Aditya';
let selection = 'name';
person[selection] = 'Manasi';
console.log(person.name);
