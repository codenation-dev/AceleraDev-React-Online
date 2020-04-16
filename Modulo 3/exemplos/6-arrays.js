const users = ["Jorge", "Nema", "Karen"];
console.log(users);

const randomArray = [1, "lion", true, BigInt(2 ** 101)];
console.log(randomArray[2]);

console.log(users.length);

console.log("Add");
users.push("Ray");
console.log(users);

users.pop();
console.log(users);

//spread
console.log("Spread");
let newUsers = users;
newUsers[0] = "Matt";
console.log(newUsers);
console.log(users);

newUsers = [...users];
newUsers[0] = "Jorge";
console.log(newUsers);
console.log(users);
