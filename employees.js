class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}


class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
}


class Engineer extends Employee {
    constructor(name, id, email, githubName) {
        super(name, id, email);
        this.githubName = githubName;
    }
}


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}
