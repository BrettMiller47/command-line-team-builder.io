const { toWeb } = require('jsdom/lib/jsdom/living/helpers/http-request.js');
const Engineer = require('../js/engineer.js');

describe('Engineer', () => {

  const myEngineer = new Engineer('Jake', 1, 'fake@gmail.com', 'githubName');

  it('should return a engineer with the passed in name', () => {
    expect(myEngineer.name).toBe('Jake');
  });
  
  it('should return a engineer with the passed in id', () => {
    expect(myEngineer.id).toBe(1);
  });

  it('should return a engineer with the passed in email', () => {
    expect(myEngineer.email).toBe('fake@gmail.com');
  });

  it('should return a engineer with the passed in GitHub name', () => {
    expect(myEngineer.githubName).toBe('githubName');
  });

  it('should return the role "Engineer" via the getRole() method', () => {
    expect(myEngineer.getRole()).toBe('Engineer');
  });
  
  it("should return the engineer's GitHub name via the getGithub() method", () => {
    expect(myEngineer.getGithub()).toBe('githubName');
  });
});