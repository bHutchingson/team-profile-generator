const Manager = require('../lib/manager');

//test for Manager
describe('Manager', () => {
    it('should return manager office number from getOfficeNumber function', () => {
        let officeNumber = '1';
        let managerOfficeNumber = new Manager('Brandon', '1', 'test@gmail.com', officeNumber);
        expect(managerOfficeNumber.getOfficeNumber(officeNumber)).toEqual('1');
    });
    it('should return employee role from getGitHub function', () => {
        let role = 'Manager';
        let managerRole = new Manager('Brandon', 1, 'test@gmail.com', role);
        expect(managerRole.getRole(role)).toEqual('Manager');
    });
});