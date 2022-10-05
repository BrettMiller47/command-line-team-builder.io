const { toWeb } = require('jsdom/lib/jsdom/living/helpers/http-request.js');
const Manager = require('../js/manager.js');

describe('Manager', () => {

  const myManager = new Manager('Jake', 1, 'fake@gmail.com', 3);

  it('should return a manager with the passed in name', () => {
    expect(myManager.name).toBe('Jake');
  });
  
  it('should return a manager with the passed in id', () => {
    expect(myManager.id).toBe(1);
  });

  it('should return a manager with the passed in email', () => {
    expect(myManager.email).toBe('fake@gmail.com');
  });

  it('should return a manager with the passed in office number', () => {
    expect(myManager.officeNum).toBe(3);
  });

  it('should return the role "Manager" via the getRole() method', () => {
    expect(myManager.getRole()).toBe('Manager');
  });
});