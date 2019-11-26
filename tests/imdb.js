var db = {}
var loginInfo = require('../testAssets/login')
module.exports = {
    before: browser => {
        db = browser.page.moviesAnywhere();
        db
            .navigate();
    },
    after: browser => {
        browser
            .end;
    },
    'Login': browser => {
        db
            .login(loginInfo);
    },
    // 'Logoff': browser => {
    //     db
    //         .logout();
    // },
}