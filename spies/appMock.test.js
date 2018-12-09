const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('spy', () => {

    describe('#spy', () => {

        it('should call spy correctly', () => {
            const spy = expect.createSpy();
            spy();
            expect(spy).toHaveBeenCalled();
        });

    });
    
    describe('#spy with', () => {
        
        it('should call spy with correctly', () => {
            const spy = expect.createSpy();
            spy('gagan');
            expect(spy).toHaveBeenCalledWith('gagan');
        });

    });
});

describe('spies/app', () => {

    const email  = 'gagan@gmail.com';
    const password = 'Admin@123';

    const db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    describe('#handleSignUp mock db call', () => {

        it(`should call db.saveUser with ${email} ${password}`, () => {
        
            app.handleSignUp(email, password);
            expect(db.saveUser).toHaveBeenCalledWith(email, password);
    
        });

    });

});