const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
      super(name, id, email);
      this.office = office;
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
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office: ${this.office}</li>
            </ul>
        </div>
    </section>
  `;
      return htmlContent;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;