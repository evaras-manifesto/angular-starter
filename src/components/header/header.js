require('./header.scss')

app.component('headerComponent', {
    template: require('./header.html'),
    controllerAs: '$ctrl',
    transclude: {},
    bindings: {
        url:'=',
    },
    controller: function ($http, $timeout, $scope) {
        
        var init = () => {
            console.log(this, 'headerComponent');
            //
            //$timeout(function() {
            //    //this.fff = gggg
            //}, 3000);
        }

        init();
    }
});

//$http - https://docs.angularjs.org/api/ng/service/$http