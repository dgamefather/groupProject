var db = {};
var loginInfo = require('../assets/login');
var watch = require('../assets/movieList');
var shows = require('../assets/searchList');
module.exports = {
    before: browser => {
        db = browser.page.moviesAnywhere();
        db
            .navigate()
            .login(loginInfo);
    },
    after: browser => {
        db
            .navigate()
            .logout();
        browser
            // .pause()
            .end();
    },
    'Search Movie': browser => {
        shows.forEach(search => {
            db
                .searchBar(search);
        });
    },
    'Clear Watchlist': browser => {
        watch.forEach(movie => {
            db
                .removeMovie(movie);
        });
        // db
        //     .clearWatch();
    },
    'Add Movies': browser => {
        watch.forEach(movie => {
            db
                .addMovie(movie);
        });
    },
    'Registration Nav': browser => {
        db
            .regInfoCheck();
    },
}