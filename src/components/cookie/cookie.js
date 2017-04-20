//import our styles directly into the page
require('./cookie.scss');

//export our component, we need 'app' as an argument to know which module this component belongs to
module.exports = (app) => app.component('cookieComponent', {
    template: require('./cookie.html'),
    controllerAs: '$ctrl',
    transclude: {},
    bindings: {
        text1: '=',
        text2: '=',
        cookie: '=',
        privacy: '=',
        accept: '=',
    },
    controller: class cookieComponent {

        //we inject dependencies here but do not have access to bindings yet
        constructor($http, $timeout) {
            this.$http = $http;
            this.$timeout = $timeout;
        }

        //this runs automagically - we also now have access to our bindings
        $onInit() {
            console.info('cookie component loaded!!');
        };
    }
});

//$http - https://docs.angularjs.org/api/ng/service/$http