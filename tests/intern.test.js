const Intern = require('../lib/intern');

//test for Intern
describe('Intern', () => {
    it('should return intern school from getSchool function', () => {
        let school = 'OSU';
        let internSchool = new Intern('Brandon', 1, 'test@gmail.com', school);
        expect(internSchool.getSchool(school)).toEqual('OSU');
    });
    it('should return employee role from getRole function', () => {
        let role = 'Intern';
        let internRole = new Intern('Brandon', '1', 'test@gmail.com', 'OSU', role);
        expect(internRole.getRole(role)).toEqual('Intern');
    });
});