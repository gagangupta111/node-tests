module.exports.add = (a,b) => a+b;

module.exports.sub = (a,b) => {
     a-b;
};

module.exports.returnSub = (a,b) => {
    return a-b;
};

module.exports.setName = (user, names) => {
    var arrayNames = names.split(' ');

    user.firstName = arrayNames[0];
    user.lastName = arrayNames[1];

    return user;
}

module.exports.addAsync = (a,b, callback) => {
    setTimeout(() => {
        callback( a + b );
    }, 1000);

};

const square = (a) => a*a;

const squareAsync = (a, callback) => {

    setTimeout(() => {
        callback(a*a);
    }, 1000);

};

module.exports.square = square;
module.exports.squareAsync = squareAsync;
