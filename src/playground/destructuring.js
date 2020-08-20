const person = {
  name: "Oscar",
  age: 24,
  location: {
    city: "Copenhagen",
    temp: 28,
  },
};

const { name, age } = person;

console.log(`${name} is ${age} years old.`);

const { temp: temperature, city } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}
