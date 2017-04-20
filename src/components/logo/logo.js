//import our styles directly into the page
require('./logo.scss');

//export our component, we need 'app' as an argument to know which module this component belongs to
module.exports = (app) => app.component('logoComponent', {
    template: require('./logo.html'),
    controllerAs: '$ctrl',
    transclude: {},
    bindings: {
        url: '=',
    },
    controller: class logoComponent {

        //we inject dependencies here but do not have access to bindings yet
        constructor($http, $timeout) {
            this.$http = $http;
            this.$timeout = $timeout;
        }

        //this runs automagically - we also now have access to our bindings
        $onInit() {
            console.info('logo component loaded!!');
        };
    }
});

//$http - https://docs.angularjs.org/api/ng/service/$http