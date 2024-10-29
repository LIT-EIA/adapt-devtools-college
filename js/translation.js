define(function(require) {

    var en = require('./lang/en');
    var fr = require('./lang/fr');

    function initializeI18N(){
        $.i18n().load({ 'en' : en, 'fr' : fr });
    };

    return initializeI18N;
});
