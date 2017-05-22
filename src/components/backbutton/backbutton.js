//import our styles directly into the page
require('./backbutton.scss');

//export our component, we need 'app' as an argument to know which module this component belongs to
module.exports = (app) => app.component('backbuttonComponent', {
    template: require('./backbutton.html'),
    controllerAs: '$ctrl',
    transclude: {},
    bindings: {
        //backbuttonlabel: '=',
        //parentpage: '=',
    },
    controller: class backbuttonComponent {

        //we inject dependencies here but do not have access to bindings yet
        constructor($http, $timeout, $scope) {
            this.$http = $http;
            this.$timeout = $timeout;
            this.$scope = $scope;
        }

        // example request
        exampleRequest() {
            this.$http.get('https://api.spotify.com/v1/search?q=James Brown&type=artist')
                .then(response => {
                    var reqName = response.data.artists.items[0].name;
                    console.info('Name', reqName);
                    this.backbuttonlabel = reqName;

                    var reqUrl = response.data.artists.items[1].external_urls.spotify;
                    console.info('URL', reqUrl);
                    this.parentpage = reqUrl;
                });

        }

        //this runs automagically - we also now have access to our bindings
        $onInit() {
            console.info('backbuttonComponent', this);
            console.info('backbuttonComponent component loaded!!');

            //call an internal function
            this.exampleRequest();
        };
    }
});

//$http - https://docs.angularjs.org/api/ng/service/$http