var movieCommands = {
    login: function (userData) {
        this
            .waitForElementPresent('@page')
            .moveToElement('@login', 0, 0)
            .click('@login')
            .waitForElementPresent('@imdb')
            .click('@imdb')
            .waitForElementPresent('@pass')
            .click('@email')
            .setValue('@email', userData.user)
            .setValue('@pass', userData.password)
            .click('@signIn')
            .waitForElementPresent('@page')
            .moveToElement('@menuOpen', 0, 0)
            .verify.containsText('@menuOpen', "Hello");
        return this;
    },
    clearWatch: function () {
        const browser = this.api;
        this
            .click('@menuOpen')
            .click('@watchlist')
            .waitForElementVisible('@watchEdit')
            .click('@watchEdit')
            .waitForElementVisible('@selectAll')
            .moveToElement('@selectAll', 0, 0)
            .click('@selectAll')
        // .moveToElement('#totalCheck', 0, 0, (result) => {
        //     console.log('result', result);
        //     browser
        //         .execute('arguments[0].scrollIntoView({behavior: "instant", block: "center", inline: "center"})', [result.value]);
        //     console.log('result.value', result.value);
        //     browser
        //         .click(result.value.ELEMENT);
        // })
        //     .click('@deleteBtn')
        //     .api.acceptAlert()
        // this
        //     .click('@doneBtn')
        //     .waitForElementVisible('@createBtn')
        //     .verify.containsText('@createBtn', 'Create a new list');
        return this;
    },
    removeMovie: function (data) {
        this
            .waitForElementPresent('@search')
            .setValue('@search', data)
            .useXpath()
            .waitForElementPresent(`//div[contains(text(), "${data}")]`)
            .click(`//div[contains(text(), "${data}")]`)
            .waitForElementPresent('@title')
            .verify.containsText('@title', data)
            .click('@watchBtn')
            .verify.containsText('@watchBtn', 'Add to Watchlist');
        return this;
    },
    addMovie: function (data) {
        this
            .waitForElementPresent('@search')
            .setValue('@search', data)
            .useXpath()
            .waitForElementPresent(`//div[contains(text(), "${data}")]`)
            .click(`//div[contains(text(), "${data}")]`)
            .waitForElementPresent('@title')
            .verify.containsText('@title', data)
            .click('@watchBtn')
            .verify.containsText('@watchBtn', 'Added to Watchlist')
        return this
    },
    regInfoCheck: function () {
        this
            .waitForElementPresent('@page')
            .click('@menuOpen')
            .waitForElementPresent('@settings')
            .click('@settings')
            .waitForElementPresent('@page')
            .click('@regBtn')
            .waitForElementPresent('@help')
            .api.back()
        this
            .waitForElementPresent('@settings')
            .click('@imdbFaq')
            .waitForElementPresent('@help')
            .verify.containsText('@faqTitle', 'For entertainment fans')
            .api.back()
        this
            .waitForElementPresent('@settings')
            .click('@privBtn')
            .waitForElementPresent('@page')
        return this
    },
    logout: function () {
        this
            .moveToElement('@menuOpen', 0, 0)
            .click('@menuOpen')
            .waitForElementPresent('@signOut')
            .click('@signOut')
            .waitForElementPresent('@page')
            .moveToElement('@login', 0, 0)
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
        title: '.title_wrapper',
        help: '#a-popover-root',

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
            selector: '//a[@class="ipc-list__item mdc-list-item"][1]',
            locateStrategy: 'xpath'
        },
        ratings: {
            selector: '//a[@class="ipc-list__item mdc-list-item"][3]',
            locateStrategy: 'xpath'
        },

        // Search
        search: '#suggestion-search',
        searchBtn: '#suggestion-search-button',

        // Watchlist
        watchlist: {
            selector: '//a[@class="ipc-list__item mdc-list-item"][2]',
            locateStrategy: 'xpath'
        },
        //Add Movies to Watchlist
        watchBtn: '.uc-add-wl-button',
        //Selectors for Watchlist page
        watchEdit: '[title="Edit"]',
        selectAll: '#totalCheck',
        deleteBtn: '#delete_items',
        doneBtn: '.list-edit-done',
        createBtn: '.seemore',

        // Login & Sign Out
        login: 'a[class*="imdb-header__signin-text"]',

        imdb: {
            selector: '(//span[contains(text(), "Sign in with IMDb")])',
            locateStrategy: 'xpath'
        },
        email: '#ap_email',
        pass: '#ap_password',
        signIn: '#signInSubmit',
        signOut: {
            selector: '//a[@class="ipc-list__item mdc-list-item"][5]',
            locateStrategy: 'xpath'
        },

        // Account Settings
        settings: {
            selector: '//a[@class="ipc-list__item mdc-list-item"][4]',
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
        regTitle: '#article_content',
        imdbFaq: {
            selector: '//a[text()="IMDb FAQ"]',
            locateStrategy: 'xpath'
        },
        faqTitle: {
            selector: '//li[@data-a-tab-name="imdb"]',
            locateStrategy: 'xpath'
        },
        privBtn: {
            selector: '//a[text()="Privacy Policy"]',
            locateStrategy: 'xpath'
        },
        privTitle: '.widget_nested',
    }
}