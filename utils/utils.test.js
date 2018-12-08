const utils = require('./utils');

it('Should add 2 numbrs', () => {
    const res = utils.add(3,2);

    if(res != 5){
        throw new Error(`Expected 5 but got ${res}`);
    }

})

it('Should sub 2 numbrs', () => {
    const res = utils.sub(3,2);

    if(res != 1){
        throw new Error(`Expected 1 but got ${res}`);
    }
    
})