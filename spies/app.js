
const db = require('./db');

const handleSignUp = (email, password) => {

    console.log(`\t app.js handleSignUp called with ${email} ${password}`);
    db.saveUser(email, password);
};

module.exports.handleSignUp = handleSignUp;
