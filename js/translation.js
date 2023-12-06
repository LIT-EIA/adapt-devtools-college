define(function(require) {

    var en = require('../assets/lang/en');
    var fr = require('../assets/lang/fr');

    function initializeI18N(){
        $.i18n().load({ 'en' : en, 'fr' : fr });
        Handlebars.registerHelper('t', function(key, $1) {
            var lang = localStorage.getItem("lang") || 'en';
            $.i18n().locale = lang;
            return $.i18n(key, $1);
        });
        Handlebars.registerHelper('tp', function(string, key) {
            var lang = localStorage.getItem("lang") || 'en';
            $.i18n().locale = lang;
            return $.i18n(string+key);
        });
    };

    return initializeI18N;
});