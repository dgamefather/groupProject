var db = {};
var loginInfo = require('../assets/login');
var movies = require('../assets/movieList');
module.exports = {
    before: browser => {
        db = browser.page.moviesAnywhere();
        db
            .navigate()
            .login(loginInfo);
    },
    after: browser => {
        // db
        //     .navigate()
        //     .logout();
        browser
            .pause()
            .end();
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