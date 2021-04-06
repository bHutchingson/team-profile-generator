const Employee = require('../lib/employee');

//test for Employee
describe('Employee', () => {
    it('should return employee name from getName function', () => {
        let name = 'Brandon';
        let employeeName = new Employee(name);
        expect(employeeName.getName(name)).toEqual('Brandon');
    });
    it('should return employee id from getId function', () => {
        let id = '1';
        let employeeId = new Employee('Brandon', id);
        expect(employeeId.getId(id)).toEqual('1');
    });
    it('should return employee email from getEmail function', () => {
        let email = 'test@gmail.com';
        let employeeEmail = new Employee('Brandon', '1', email);
        expect(employeeEmail.getEmail(email)).toEqual('test@gmail.com');
    });
    it('should return employee role from getRole function', () => {
        let role = 'Employee';
        let employeeRole = new Employee('Brandon', '1', 'test@gmail.com', role);
        expect(employeeRole.getRole(role)).toEqual('Employee');
    });
    
});