//import our styles directly into the page
require('./header.scss');

//export our component, we need 'app' as an argument to know which module this component belongs to
module.exports = (app) => app.component('headerComponent', {
    template: require('./header.html'),
    controllerAs: '$ctrl',
    transclude: {},
    bindings: {
        url: '=',
    },
    controller: class headerComponent {

        //we inject dependencies here but do not have access to bindings yet
        constructor($http, $timeout) {
            this.$http = $http;
            this.$timeout = $timeout;
        }

        exampleRequest() {
            this.$http.get('https://api.github.com/users/evaras-manifesto/repos')
                .then(response => {
                    console.info('response', response.data);
                });
        }

        $onInit() {
            console.info('headerComponent', this);

            //call an internal function
            this.exampleRequest();
        };
    }
});

//$http - https://docs.angularjs.org/api/ng/service/$http