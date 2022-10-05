const { toWeb } = require('jsdom/lib/jsdom/living/helpers/http-request.js');
const Employee = require('../js/employee.js');

describe('Employee', () => {
  
  const myEmployee = new Employee('Jake', 1, 'fake@gmail.com');
  
  it('should return an employee with the passed in name', () => {
    expect(myEmployee.name).toBe('Jake');
  });
  
  it('should return an employee with the passed in id', () => {
    expect(myEmployee.id).toBe(1);
  });

  it('should return an employee with the passed in email', () => {
    expect(myEmployee.email).toBe('fake@gmail.com');
  });
  
  it('should return the role "Employee" via the getRole() method', () => {
    expect(myEmployee.getRole()).toBe('Employee');
  }); 
});