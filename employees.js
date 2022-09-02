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
    
    /**
     * gets the HTML content that is appended to the DOM
     */
    getHtmlContent() {
        let htmlContent = `
    <section class="row-fluid p-0 d-flex justify-content-center">
        <div class="card col-3 m-3 p-2 bg-dark text-light"  style="width: 32rem">
            <h1 class="p-2">${this.name}</h1>
            <h1 class="p-2">Manager</h1>
            <ul class="list-group list-group-flush p-2">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office: ${this.officeNum}</li>
            </ul>
        </div>
    </section>
    `;
        return htmlContent;
    }
}


class Engineer extends Employee {
    constructor(name, id, email, githubName) {
        super(name, id, email);
        this.githubName = githubName;
    }

    /**
     * gets the HTML content that is appended to the DOM
     */
    getHtmlContent() {
        let htmlContent = `
    <div class="card col-3 m-3 p-2 bg-primary text-light" style="width: 32rem">
        <h1 class="p-2">${this.name}</h1>
        <h1 class="p-2">Engineer</h1>
        <ul class="list-group list-group-flush p-2">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="${this.email}">${this.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https:github.com/${this.githubName}" target="__blank">${this.githubName}</a></li>
        </ul>
    </div>
    `;
        return htmlContent;
    }
}


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    /**
     * gets the HTML content that is appended to the DOM
     */
    getHtmlContent() {
        let htmlContent = `
    <div class="card col-3 m-3 p-2 bg-success text-light" style="width: 32rem">
        <h1 class="p-2">${this.name}</h1>
        <h1 class="p-2">Intern</h1>
        <ul class="list-group list-group-flush p-2">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="${this.email}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
    </div>
    `;
        return htmlContent;
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}
