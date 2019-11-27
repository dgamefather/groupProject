var db = {};
var loginInfo = require('../testAssets/login');
var movies = require('../testAssets/movieList');
module.exports = {
    before: browser => {
        db = browser.page.moviesAnywhere();
        db
            .navigate();
    },
    after: browser => {
        // db
        //     .navigate()
        //     .logout();
        browser
            .pause()
            .end();
    },
    'Login': browser => {
        db
            .login(loginInfo);
    },
    'Clear Watchlist': browser => {
        // movies.forEach(movie => {
        //     db
        //         .removeMovie(movie);
        // });
        db
            .clearWatch();
    },
    // 'Add Movies': browser => {
    //     movies.forEach(movie => {
    //         db
    //             .addMovie(movie);
    //     });
    // },
    // 'Registration Nav': browser => {
    //     db
    //         .regInfoCheck();
    // },
}