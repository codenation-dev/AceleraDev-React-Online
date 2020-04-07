const framework = {
  name: "React",
  version: 16.4,
};

console.log(framework);

class User {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  get userAge() {
    return `${this.age} anos`;
  }
}

const user = new User("React", 5, "framework");
console.log(user.userAge);
