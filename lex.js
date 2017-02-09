/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

var app =
    angular.module('WebApp', [
    'ngRoute',
    'ngAnimate'
]);

(function(angular) {
  'use strict';

    // Configure the Routes
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        // Pages
        .when("/", {
        title : 'Transaction, Business and Investment Legal Counseling Advice',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl : 'partials/home.html',
        controller  : 'PageCtrl',
        navStyle : 'noscrollActive noscroll'
        })
        .when("/the_firm", {
        title : 'Our Firm Values: Quality, Teamwork, Confidentiality, Strong Relationships',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/the_firm.html",
        controller: "PageCtrl",
        navStyle : 'noscrollActive noscroll'
        })
        .when("/practice_areas", {
        title : 'Our Practice Areas, International Transaction, Business and Investment',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/practice_areas.html",
        controller: "PageCtrl",
        navStyle : 'noscrollActive noscroll'
        })
        .when("/our_team", {
        title : 'Our Team. Teamwork and Highly Qualified Professionals is Our Aproach',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/our_team.html",
        controller: "ourteamCtrl",
        navStyle : 'noscrollActive noscroll'
        })
        .when("/test", {
        templateUrl: "partials/test.html",
        controller: "ourteamCtrl",
        navStyle : 'noscrollActive noscroll'
        })
        .when("/our_team/test", {
        templateUrl: "partials/our_team/test.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Joseph_McFarland", {
        title : 'Joseph McFarland - Our Team',
        templateUrl: "partials/our_team/Lucius_Smejda.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Joseph_McFarland", {
        title : 'Joseph McFarland - Our Team',
        templateUrl: "partials/our_team/Joseph_McFarland.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Antonio_Zamora", {
        title : 'Antonio Zamora - Our Team',
        templateUrl: "partials/our_team/Antonio_Zamora.html",
        controller: "teamHomeCtrl",
        })
        .when("/our_team/Elke_Rolff", {
        title : 'Elke Rolff - Our Team',
        templateUrl: "partials/our_team/Elke_Rolff.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Maxim_Istomin", {
        title : 'Maxim Istomin - Our Team',
        templateUrl: "partials/our_team/Maxim_Istomin.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Susanne_Leone", {
        title : 'Susanne Leone - Our Team',
        templateUrl: "partials/our_team/Susanne_Leone.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Evgeny_Golovanov", {
        title : 'Evgeny Golovanov - Our Team',
        templateUrl: "partials/our_team/Evgeny_Golovanov.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Jasmin_Welker", {
        title : 'Jasmin Welker - Our Team',
        templateUrl: "partials/our_team/Jasmin_Welker.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Jacques_Ethier", {
        title : 'Jacques Ethier - Our Team',
        templateUrl: "partials/our_team/Jacques_Ethier.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Eric_Citrey", {
        title : 'Eric Citrey - Our Team',
        templateUrl: "partials/our_team/Eric_Citrey.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Oliver_Hance", {
        title : 'Oliver Hance - Our Team',
        templateUrl: "partials/our_team/Oliver_Hance.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Aleksandr_Smirnov", {
        title : 'Aleksandr Smirnov - Our Team',
        templateUrl: "partials/our_team/Aleksandr_Smirnov.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Vladimir_Troitskiy", {
        title : 'Vladimir Troitskiy - Our Team',
        templateUrl: "partials/our_team/Vladimir_Troitskiy.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Carlos_Aud_Sobrinho", {
        title : 'Carlos Aud Sobrinho - Our Team',
        templateUrl: "partials/our_team/Carlos_Aud_Sobrinho.html",
        controller: "teamHomeCtrl"
        })
        .when("/our_team/Eric_Vigneron", {
        title : 'Eric Vigneron - Our Team',
        templateUrl: "partials/our_team/Eric_Vigneron.html",
        controller: "teamHomeCtrl"
        })
     // .when("/our_team/:memberName", {templateUrl: "partials/our_team_member.html", controller: "ourteamCtrl"})
        .when("/contact", {
        templateUrl: "partials/contact.html",
        controller: "PageCtrl",
        navStyle : 'noscrollActive noscroll'
        })
        .when("/links_events", {
        templateUrl: "partials/links_events.html",
        controller: "PageCtrl",
        navStyle : 'noscrollActive noscroll'
        })
        .when("/not_found", {
        templateUrl: "partials/not_found.html",
        controller: "PageCtrl"
        })

        // else 404
        .otherwise("/not_found", {redirectTo: "partials/not_found.html", controller: "PageCtrl"});

        // $locationProvider.html5Mode(true);
    }]);

//     $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
//         window.scrollTo(0, 0);
//     });

	app.run(['$rootScope', function ($rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.title = current.$$route.title;
			$rootScope.description = current.$$route.description;
			$rootScope.keywords = current.$$route.keywords;
			$rootScope.canonical = current.$$route.canonical;
			$rootScope.robots = current.$$route.robots;
			$rootScope.navStyle = current.$$route.navStyle;
			// angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
            // alert (window.location.pathname);

		});
	 }]);

    // NEW CODE -------------


//         .controller('Controller', ['$scope', function($scope) {
//           $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
//           $scope.igor = { name: 'Igor', address: '123 Somewhere' };
//         }])
//         .directive('myCustomer', function() {
//           return {
//             restrict: 'E',
//             scope: {
//               customerInfo: '=info'
//             },
//             templateUrl: 'my-customer-iso.html'
//           };
//         });



    // OLD CODE -----------
	app.controller('ourteamCtrl', ['$scope', function ($scope, $routeParams) {
		$scope.countries = [
            {countryName: "USA",
                teamMember: [
        	        {
        	        memberName: "Lucius Smejda",
        	        memberTitle: "Principal",
        	        memberURL: "Lucius_Smejda",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Joseph B. McFarland",
        	        memberTitle: "Of Counsel",
        	        memberURL: "Joseph_McFarland",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Antonio R. Zamora",
        	        memberTitle: "Of Counsel",
        	        memberURL: "Antonio_Zamora",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Elke Rolff",
        	        memberTitle: "Of Counsel",
        	        memberURL: "Elke_Rolff",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Maxim Istomin",
        	        memberTitle: "Of Counsel",
        	        memberURL: "Maxim_Istomin",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Susanne Leone",
        	        memberTitle: "Jurist",
        	        memberURL: "Susanne_Leone",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Evgeny V. Golovanov",
        	        memberTitle: "Jurist",
        	        memberURL: "Evgeny_Golovanov",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Jasmin Welker",
        	        memberTitle: "Jurist",
        	        memberURL: "Jasmin_Welker",
        	        imageExt: "png"}
		        ]
            },
            {countryName: "International",
                teamMember: [
        	        {
        	        memberName: "Jacques Ethier",
        	        memberTitle: "Canada",
        	        memberURL: "Jacques_Ethier",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Eric J.P. Citrey",
        	        memberTitle: "France",
        	        memberURL: "Eric_Citrey",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Oliver Hance",
        	        memberTitle: "Belgium & Luxemburg",
        	        memberURL: "Oliver_Hance",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Aleksandr Smirnov",
        	        memberTitle: "Russia",
        	        memberURL: "Aleksandr_Smirnov",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Vladimir A. Troitskiy",
        	        memberTitle: "Russia",
        	        memberURL: "Vladimir_Troitskiy",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Carlos Aud Sobrinho",
        	        memberTitle: "Brazil",
        	        memberURL: "Carlos_Aud_Sobrinho",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Eric Vigneron",
        	        memberTitle: "Dominican Republic",
        	        memberURL: "Eric_Vigneron",
        	        imageExt: "png"}
		        ]
		    } //END international
		]; // END countries
		// $scope.countries = countries;
        // $scope.whichMember = $routeParams.memberID;
	} // END function
	]);



  app.controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
    $scope.number = 0;
    $interval(function() {
      $scope.number++;
    }, 1000);

    var colors = ['red','blue','green','yellow','orange'];
    $scope.colorClass = function(number) {
      return colors[number % colors.length];
    };
  }]);






  // JQuery code

$(window).on('scroll', function(){
    var slideHeight = ('50');
	if( $(window).scrollTop()>slideHeight){
		$('.navbar.noscrollActive').removeClass('noscroll');
	} else {
		$('.navbar.noscrollActive').addClass('noscroll');
	}
});

$('.dropdown-toggle').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});




})(window.angular);
