'use strict';

require(['utils'], function(utils) {
    console.debug(utils.isDeveloper());
    if (utils.isDeveloper()) {
        $('#about-page-development').show();
    }
    else {
        $('#about-page-development').hide();
    }
});
