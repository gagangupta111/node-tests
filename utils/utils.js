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
