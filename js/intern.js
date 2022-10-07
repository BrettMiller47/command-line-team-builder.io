const Employee = require('./employee');

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
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
    </div>
  `;
      return htmlContent;
  }
  
  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;