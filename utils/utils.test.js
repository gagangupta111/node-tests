const expect = require('expect');

const utils = require('./utils');

describe('utils', () => {

    describe('#add', () => {
        it('Should add 2 numbrs', () => {
            const res = utils.add(3,2);
        
            expect(res).toExist('Should Exist!');
            expect(res).toEqual(5).toBeA('number');
        
        });
    });
    
    describe('#sub', () => {
        it('Should sub 2 numbrs', () => {
            const res = utils.sub(3,2);
        
            expect(res).toNotExist('Result Should be undefined');
            
        }); 
    });
    
    describe('#returnSub', () => {
        it('Should sub 2 numbrs and return ', () => {
            const res = utils.returnSub(3,2);
        
            expect(res).toExist('Should Exist!');
            expect(res).toEqual(1, 'result Should be 1').toBeA('number');
            
        });    
    });
    
    describe('#setName', () => {
        
        it('test setName function', () => {
    
            var user = {name: "Gagan Gupta", age: 29};
            var fullName = "Gagan Gupta";
            
            fullName = utils.setName(user, fullName);
            
            expect(user).toEqual(fullName, "Both variables should have equal values");
            expect(user).toInclude({
                firstName: 'Gagan',
                lastName: 'Gupta'
            }, "Should include name properties also");
    
        });
    
    });
    
    describe('#addAsync', () => {
    
        it('Should add Async 2 numbrs', (done) => {
            const res = utils.addAsync(3,2, (res) => {
        
                expect(res).toExist('Should Exist!');
                expect(res).toEqual(5).toBeA('number');
                done();
            });
        
        });    
    });
    
    describe('#square', () => {
        it('test square of a number', () => {
    
            expect(utils.square(7)).toExist().toBeA('number').toBe(49);
        
        });    
    });
    
    describe('#squareAsync', () => {
        
        it('test Async square of a number', (done) => {
    
            utils.squareAsync(9, (res) => {
                expect(res).toExist().toBeA('number').toBe(81);
                done();
            });
        
        });
    });

});

describe('No Method', () => {

    describe('No method1', () => {
        it('test equal and tobe', () => {
    
            expect({name: "Gagan"}).toEqual({name: "Gagan"});
        
        });    
    });
    
    describe('No Method2', () => {
        it('test include', () => {
    
            expect([1,2,3,4]).toInclude(4, 'Should have 4 also');
        
        });    
    });
    
    describe('No Method3', () => {
        it('test include property', () => {
    
            expect({
                name : "gagan",
                age: 29,
                address: "India"
            }).toInclude({
                age: 29
            }, 'Should have age : 29 ');
        
        }); 
    });
    
    describe('No method4', () => {
        it('test exclude property', () => {
    
            expect({
                name : "gagan",
                age: 29,
                address: "India"
            }).toExclude({
                age: 26
            }, 'Should not have age : 26 ');
        
        });    
    });

});
