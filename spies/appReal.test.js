const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('spies/app', () => {

    const email  = 'gagan@gmail.com';
    const password = 'Admin@123';

    describe('#handleSignUp real db call', () => {

        it(`should call db.saveUser with ${email} ${password}`, () => {
        
            app.handleSignUp(email, password);
    
        });
        
    });

});