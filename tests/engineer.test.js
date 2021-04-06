const Engineer = require('../lib/engineer');

//test for Engineer
describe('Engineer', () => {
    it('should return github username from getGitHub function', () => {
        let user = 'user';
        let engineerGitHub = new Engineer('Brandon', 1, 'test@gmail.com', user);
        expect(engineerGitHub.getGitHub(user)).toEqual('user');
    });
    it('should return employee role from getGitHub function', () => {
        let role = 'Engineer';
        let engineerRole = new Engineer('Brandon', 1, 'test@gmail.com', role);
        expect(engineerRole.getGitHub(role)).toEqual('Engineer');
    });
});