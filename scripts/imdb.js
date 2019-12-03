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