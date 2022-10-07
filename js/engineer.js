const Employee = require('./employee');

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
              <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https:github.com/${this.githubName}" target="__blank">${this.githubName}</a></li>
          </ul>
      </div>
    `;
        return htmlContent;
    }
  
  getGithub() {
    return this.githubName;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;