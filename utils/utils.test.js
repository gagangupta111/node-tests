const expect = require('expect');

const utils = require('./utils');

it('Should add 2 numbrs', () => {
    const res = utils.add(3,2);

    expect(res).toExist('Should Exist!');
    expect(res).toEqual(5).toBeA('number');

})

it('Should sub 2 numbrs', () => {
    const res = utils.sub(3,2);

    expect(res).toNotExist('Result Should be undefined');
    
});


it('Should sub 2 numbrs and return ', () => {
    const res = utils.returnSub(3,2);

    expect(res).toExist('Should Exist!');
    expect(res).toEqual(1, 'result Should be 1').toBeA('number');
    
});

it('test equal and tobe', () => {

    expect({name: "Gagan"}).toEqual({name: "Gagan"});

});

it('test include', () => {

    expect([1,2,3,4]).toInclude(4, 'Should have 4 also');

});

it('test include property', () => {

    expect({
        name : "gagan",
        age: 29,
        address: "India"
    }).toInclude({
        age: 29
    }, 'Should have age : 29 ');

});


it('test exclude property', () => {

    expect({
        name : "gagan",
        age: 29,
        address: "India"
    }).toExclude({
        age: 26
    }, 'Should not have age : 26 ');

});

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