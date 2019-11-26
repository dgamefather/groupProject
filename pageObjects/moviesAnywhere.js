var movieCommands = {
    login: function (userData) {
        this
            .waitForElementPresent('@page')
            .click('@login')
            .waitForElementPresent('@imdb')
            .click('@imdb')
            .waitForElementPresent('@pass')
            .click('@email')
            .setValue('@email', userData.user)
            .setValue('@pass', userData.password)
            .click('@signIn')
            .waitForElementPresent('@page')
            .verify.containsText('@menuOpen', "Hello");
        return this;
    },
    clearWatch: function () {
        this
            .click

        return this;
    },
    addWatch: function (query) {
        this
            .clearWatch()
            .click('@search')
            .setValue('@search', query)
            .click('searchBtn')

        return this;
    },
    logout: function () {
        this
            .click('@menuOpen')
            .waitForElementPresent('@accountMenu')
            .click('@signOut')
            .waitForElementPresent('@page')
            .verify.containsText('@login', "Sign In");
        return this;
    }
}
module.exports = {
    url: 'https://www.imdb.com/',
    commands: [movieCommands],
    elements: {
        // Page Is Loaded
        page: '#colorbox',

        // Nav Bar
        tv: {
            selector: '(//a[@class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--baseAlt ipc-button--textPrimary ipc-text-button navbar__flyout__text-button-after-mobile navbar__imdb-tv--toggle"])',
            locateStrategy: 'xpath'
        },
        menuOpen: {
            selector: '//label[@class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--baseAlt ipc-button--textPrimary ipc-text-button navbar__flyout__text-button-after-mobile navbar__user-menu-toggle__button"]',
            locateStrategy: 'xpath'
        },
        accountMenu: {
            selector: '(//ul[@class="ipc-list mdc-list imdb-header__account-menu ipc-list--baseAlt"])',
            locateStrategy: 'xpath'
        },
        activity: {
            selector: '(//span[@class="ipc-list-item__text"][contains(text(), "Your Activity")])',
            locateStrategy: 'xpath'
        },
        ratings: {
            selector: '(//span[@class="ipc-list-item__text"][contains(text(), "Your Ratings")])',
            locateStrategy: 'xpath'
        },

        // Search
        search: '#suggestion-search',
        searchBtn: '#suggestion-search-button',

        // Watchlist
        watchlist: {
            selector: '(//span[@class="ipc-list-item__text"][contains(text(), "Your Watchlist")])',
            locateStrategy: 'xpath'
        },
        //Selectors for Watchlist page
        watchEdit: '[title="edit"]',
        selectAll: '[class="lister-edit-total-selection"]',
        deleteBtn: '[#delete_items]',
        doneBtn: '[class="list-edit-done"]',
        createBtn: '[class="seemore"]',

        // Login & Sign Out
        login: {
            selector: '(//a[@class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--baseAlt ipc-button--textPrimary ipc-text-button imdb-header__signin-text"])',
            locateStrategy: 'xpath'
        },
        imdb: {
            selector: '(//span[contains(text(), "Sign in with IMDb")])',
            locateStrategy: 'xpath'
        },
        email: '#ap_email',
        pass: '#ap_password',
        signIn: '#signInSubmit',
        signOut: {
            selector: '(//span[@class="ipc-list-item__text"][contains(text(), "Sign Out")])',
            locateStrategy: 'xpath'
        },

        // Account Settings
        settings: {
            selector: '(//span[@class="ipc-list-item__text"][contains(text(), "Account Settings")])',
            locateStrategy: 'xpath'
        },
        //Selectors for Edit Profile page
        editBio: '[name="bio"]',
        editBtn: {
            selector: '//a[text()="Edit"]',
            locateStrategy: 'xpath'
        },
        saveBtn: {
            selector: '//div[text()="Save Description"]',
            locateStrategy: 'xpath'
        },
        //Selectors for Registration Info Card
        regBtn: {
            selector: '//a[text()="Registration FAQ"]',
            locateStrategy: 'xpath'
        },
        imbdFaq: {
            selector: '//a[text()="IMDb FAQ"]',
            locateStrategy: 'xpath'
        },
        privBtn: {
            selector: '//a[text()="Privacy Policy"]',
            locateStrategy: 'xpath'
        },
        accSetBtn: {
            selector: '//a[text()="Your Account Settings"]',
            locateStrategy: 'xpath'
        },
        helpRegBtn: {
            selector: '//a[text()="Get help completing registration"]',
            locateStrategy: 'xpath'
        },
    }
}