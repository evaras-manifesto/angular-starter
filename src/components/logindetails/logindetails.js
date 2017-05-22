//import our styles directly into the page
require('./logindetails.scss');

//export our component, we need 'app' as an argument to know which module this component belongs to
module.exports = (app) => app.component('logindetailsComponent', {
    template: require('./logindetails.html'),
    controllerAs: '$ctrl',
    transclude: {},
    bindings: {
        header: '=',
        usernamelabel: '=',
        username: '=',
        securityquestion: '=',
        updatelogin: '=',
    },
    controller: class logindetailsComponent {

        //we inject dependencies here but do not have access to bindings yet
        constructor($http, $timeout) {
            this.$http = $http;
            this.$timeout = $timeout;
        }

        //this runs automagically - we also now have access to our bindings
        $onInit() {
            console.info('logindetails component loaded!!');
        };
    }
});

//$http - https://docs.angularjs.org/api/ng/service/$http