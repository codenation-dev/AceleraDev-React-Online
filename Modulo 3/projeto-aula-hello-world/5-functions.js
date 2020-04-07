function main() {
  const name = "React";
  const version = 16.3;

  console.log(`${name} ${version}`);
}

main();

//parametros
function showAge(user, age) {
  return `${user} tem ${age} anos`;
}

const result = showAge("Bill", 20);
console.log(result);

//valroes default
function getUserSalary(salary = 1) {
  return salary;
}

console.log(getUserSalary());
console.log(getUserSalary(20));

//rest
function showUsers(...users) {
  for (let index = 0; index < users.length; index++) {
    console.log(users[index]);
  }
}
showUsers("react");
showUsers("react", "vue", "angular");
