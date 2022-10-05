const { toWeb } = require('jsdom/lib/jsdom/living/helpers/http-request.js');
const Intern = require('../js/intern.js');

describe('Intern', () => {
  
  const myIntern = new Intern('Jake', 1, 'fake@gmail.com', 'schoolName');
  
  it('should return a intern with the passed in name', () => {
    expect(myIntern.name).toBe('Jake');
  });
  
  it('should return a intern with the passed in id', () => {
    expect(myIntern.id).toBe(1);
  });

  it('should return a intern with the passed in email', () => {
    expect(myIntern.email).toBe('fake@gmail.com');
  });

  it('should return a intern with the passed in school name', () => {
    expect(myIntern.school).toBe('schoolName');
  });

  it('should return the role "Intern" via the getRole() method', () => {
    expect(myIntern.getRole()).toBe('Intern');
  }); 

  it("should return the intern's school via the getSchool() method", () => {
    expect(myIntern.getSchool()).toBe('schoolName');
  });
});