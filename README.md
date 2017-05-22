SYNOPSIS
--------
A Simple front-end project based on Angular and Webpack, structured by components and that its main goal is to abstract the HTML code from the HTML pages (or server pages).
This is achieved by rendering dynamic HTML from "custom tags", where the business information is printed.
Afterwards, all that information is bound and displayed as desired in the front-end.

CODE EXAMPLE
------------
HTML piece (custom tag): <cookie-component 
					     	text1="'header text'"
					     	text2="'header 2 text'"
					     	cookie="'This site contains cookies'"
					     	privacy="'http://www.privacy.com/url'"
					     	accept="'Do you accept the cookies policies?'"
					     	>
					     </cookie-component>

Front-end component:
	1. Binder:
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
		    controller: class cookieComponent {s
		        $onInit() {
		            console.info('cookie component loaded!!');
		        };
		    }
		});

	2. HTML:
		<div class="o-cookiepolicy">
	        <div class="o-cookiepolicy__terms">
	            <p class="o-cookiepolicy__terms__disclaimer">
	            	{{$ctrl.text1}}
	                <a href="${cookieUrl}" class="o-cookiepolicy__terms__disclaimer__link">{{$ctrl.cookie}}</a>
	                {{$ctrl.text2}}
	                <a href="${privacyUrl}" class="o-cookiepolicy__terms__disclaimer__link">{{$ctrl.privacy}}</a>
	            </p>
	            <a href="#" class="o-cookiepolicy__terms__cta">{{$ctrl.accept}}</a>
	        </div>
	    </div>

	3. SCSS:
		...


MOTIVATION
----------
Some of the projects we have worked on have big dependencies between the back-end and the front-end.
These dependencies consequences are costing money and time to projects, especially integrating updates into the server side pages.

This has encouraged us to seek for solutions in which we can remove all dependencies between the two workflows, or at least, as much as we can.


INSTALL
-------
Run the following in your terminal at the root of the repository.

>> npm install
>> npm install --global webpack
>> webpack

This should be all you need to start the index.html page on your browser as a static page.

* Versioning issues may come as:
	Angular: "angular": "^1.6.3"
	Webpack: "webpack": "^2.3.1"

	 - All version dependencies are contained in package.json
