/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

var app =
    angular.module('WebApp', ['ngRoute', 'ngAnimate']);

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
        controller  : 'profileInfoCtrl'
        })
        .when("/the_firm", {
        title : 'Our Firm Values: Quality, Teamwork, Confidentiality, Strong Relationships',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/the_firm.html",
        controller: "profileInfoCtrl"
        })
        .when("/practice_areas", {
        title : 'Our Practice Areas, International Transaction, Business and Investment',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/practice_areas.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team", {
        title : 'Our Team. Teamwork and Highly Qualified Professionals is Our Aproach',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/our_team.html",
        controller: "profileInfoCtrl"
        })
        .when("/contact", {
        templateUrl: "partials/contact.html",
        controller: "profileInfoCtrl"
        })
        .when("/test", {
        templateUrl: "partials/test.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/test", {
        templateUrl: "partials/our_team/test.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Lucius_Smejda", {
        title : 'Joseph McFarland - Our Team',
        templateUrl: "partials/our_team/Lucius_Smejda.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Joseph_McFarland", {
        title : 'Joseph McFarland - Our Team',
        templateUrl: "partials/our_team/Joseph_McFarland.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Antonio_Zamora", {
        title : 'Antonio Zamora - Our Team',
        templateUrl: "partials/our_team/Antonio_Zamora.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Elke_Rolff", {
        title : 'Elke Rolff - Our Team',
        templateUrl: "partials/our_team/Elke_Rolff.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Maxim_Istomin", {
        title : 'Maxim Istomin - Our Team',
        templateUrl: "partials/our_team/Maxim_Istomin.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Susanne_Leone", {
        title : 'Susanne Leone - Our Team',
        templateUrl: "partials/our_team/Susanne_Leone.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Evgeny_Golovanov", {
        title : 'Evgeny Golovanov - Our Team',
        templateUrl: "partials/our_team/Evgeny_Golovanov.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Jasmin_Welker", {
        title : 'Jasmin Welker - Our Team',
        templateUrl: "partials/our_team/Jasmin_Welker.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Jacques_Ethier", {
        title : 'Jacques Ethier - Our Team',
        templateUrl: "partials/our_team/Jacques_Ethier.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Eric_Citrey", {
        title : 'Eric Citrey - Our Team',
        templateUrl: "partials/our_team/Eric_Citrey.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Oliver_Hance", {
        title : 'Oliver Hance - Our Team',
        templateUrl: "partials/our_team/Oliver_Hance.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Aleksandr_Smirnov", {
        title : 'Aleksandr Smirnov - Our Team',
        templateUrl: "partials/our_team/Aleksandr_Smirnov.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Vladimir_Troitskiy", {
        title : 'Vladimir Troitskiy - Our Team',
        templateUrl: "partials/our_team/Vladimir_Troitskiy.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Carlos_Aud_Sobrinho", {
        title : 'Carlos Aud Sobrinho - Our Team',
        templateUrl: "partials/our_team/Carlos_Aud_Sobrinho.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/Eric_Vigneron", {
        title : 'Eric Vigneron - Our Team',
        templateUrl: "partials/our_team/Eric_Vigneron.html",
        controller: "profileInfoCtrl"
        })
     // .when("/our_team/:memberName", {templateUrl: "partials/our_team_member.html", controller: "ourteamCtrl"})
        .when("/links_events", {
        templateUrl: "partials/links_events.html",
        controller: "profileInfoCtrl",
        })
        .when("/not_found", {
        templateUrl: "partials/not_found.html",
        controller: "profileInfoCtrl"
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
			window.scrollTo(0, 0);
			// angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
            // alert (window.location.pathname);

		});
	}]);

    app.controller('contactCtrl', ['$scope', function($scope) {
    }]);


    app.controller('profileInfoCtrl', ['$scope', function($scope, $location, $anchorScroll) {
        // TEAM USA
        $scope.profile1 = {
            memberName: "Lucius Smejda",
	        memberTitle: "Principal",
	        memberLocation: "USA, Canada",
	        memberURL: "Lucius_Smejda",
	        imageURL: "Lucius_Smejda.jpg"
	        };
        $scope.profile2 = {
	        memberName: "Joseph B. McFarland",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA",
	        memberURL: "Joseph_McFarland",
	        imageURL: "Joseph_McFarland.jpg"
	        };
        $scope.profile3 = {
	        memberName: "Antonio R. Zamora",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA",
	        memberURL: "Antonio_Zamora",
	        imageURL: "Antonio_Zamora.jpg"
	        };
        $scope.profile4 = {
	        memberName: "Elke Rolff",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA, Switzerland",
	        memberURL: "Elke_Rolff",
	        imageURL: "Elke_Rolff.jpg"
	        };
        $scope.profile5 = {
	        memberName: "Maxim Istomin",
	        memberTitle: "Of Counsel",
	        memberLocation: "Russia, USA",
	        memberURL: "Maxim_Istomin",
	        imageURL: "Maxim_Istomin.jpg"
	        };
        $scope.profile6 = {
	        memberName: "Susanne Leone",
	        memberTitle: "Jurist",
	        memberLocation: "Germany",
	        memberURL: "Susanne_Leone",
	        imageURL: "Susanne_Leone.jpg"
	        };
        $scope.profile7 = {
	        memberName: "Evgeny V. Golovanov",
	        memberTitle: "Jurist",
	        memberLocation: "Russia",
	        memberURL: "Evgeny_Golovanov",
	        imageURL: "Evgeny_Golovanov.jpg"
	        };
        $scope.profile8 = {
	        memberName: "Jasmin Welker",
	        memberTitle: "Jurist",
	        memberLocation: "Germany",
	        memberURL: "Jasmin_Welker",
	        imageURL: "Jasmin_Welker.png"
	        };
        // TEAM INTERNATIONAL
        $scope.profile9 = {
	        memberName: "Jacques Ethier",
	        memberTitle: "Canada",
	        memberLocation: "Canada",
	        memberURL: "Jacques_Ethier",
	        imageURL: "Jacques_Ethier.jpg"
	        };
        $scope.profile10 = {
	        memberName: "Eric J.P. Citrey",
	        memberTitle: "France",
	        memberLocation: "France",
	        memberURL: "Eric_Citrey",
	        imageURL: "Eric_Citrey.jpg"
	        };
        $scope.profile11 = {
	        memberName: "Oliver Hance",
	        memberTitle: "Belgium and Luxemburg",
	        memberLocation: "Belgium and Luxemburg",
	        memberURL: "Oliver_Hance",
	        imageURL: "Oliver_Hance.jpg"
	        };
        $scope.profile12 = {
	        memberName: "Aleksandr Smirnov",
	        memberTitle: "Russia",
	        memberLocation: "Russia",
	        memberURL: "Aleksandr_Smirnov",
	        imageURL: "Aleksandr_Smirnov.jpg"
	        };
        $scope.profile13 = {
	        memberName: "Vladimir A. Troitskiy",
	        memberTitle: "Russia",
	        memberLocation: "Russia",
	        memberURL: "Vladimir_Troitskiy",
	        imageURL: "Vladimir_Troitskiy.jpg"
	        };
        $scope.profile14 = {
	        memberName: "Carlos Aud Sobrinho",
	        memberTitle: "Brazil",
	        memberLocation: "Brazil",
	        memberURL: "Carlos_Aud_Sobrinho",
	        imageURL: "Carlos_Aud_Sobrinho.jpg"
	        };
        $scope.profile15 = {
	        memberName: "Eric Vigneron",
	        memberTitle: "Dominican Republic",
	        memberLocation: "Dominican Republic",
	        memberURL: "Eric_Vigneron",
	        imageURL: "Eric_Vigneron.png"
	        };
        $scope.scrollTo = function (scrollLocation) {
            $location.hash(scrollLocation);
            $anchorScroll.yOffset = 20;
            $anchorScroll();
            }
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                test: '=info'
            },
            templateUrl: function(elem, attr) {
                return 'tokens/profile-' + attr.type + '.html';
            }
        };
    });



//   app.controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
//     $scope.number = 0;
//     $interval(function() {
//       $scope.number++;
//     }, 1000);
//
//     var colors = ['red','blue','green','yellow','orange'];
//     $scope.colorClass = function(number) {
//       return colors[number % colors.length];
//     };
//   }]);
//





  // JQuery code

$(window).on('scroll', function(){
    var slideHeight = ('50');
	if( $(window).scrollTop()>slideHeight){
		$('.navbar.noscrollActive').removeClass('noscroll');
	} else {
		$('.navbar.noscrollActive').addClass('noscroll');
	}
});
$(window).load(function(){
	$('#mapUS').css({'height' : '250px'});
	$('#mapFR').css({'height' : '250px'});

  	var usa = {lat: 25.772439, lng: -80.191349};
  	var france = {lat: 48.874967, lng: 2.320793};

	var mapusa = new google.maps.Map(document.getElementById('mapUS'), {
        zoom: 13,
        scrollwheel: false,
        center: usa,
        resize: true
	    }
	);
	var mapfrance = new google.maps.Map(document.getElementById('mapFR'), {
	  zoom: 13,
	  scrollwheel: false,
	  center: france
	});

	var markerusa = new google.maps.Marker({
	  position: mapusa,
	  map: mapUS
	});
	var markerfrance = new google.maps.Marker({
	  position: mapfrance,
	  map: mapFR
	});
});

// $(window).load(function(){
// 	if ('localStorage' in window && window['localStorage'] !== null) {
// 		if (localStorage.fontSizeSet) {
// 			document.body.classList.add('font-size-' + localStorage.fontSizeSet);
// 			document.getElementById('fontSizeSelector').value = localStorage.fontSizeSet;
// 		}
// 		else {
// 			document.body.classList.add('font-size-1');
// 			document.getElementById('fontSizeSelector').value = '1';
// 		}
// 	}
// });
//
// // font size tool local storage
// $('#fontSizeSelector').change(function(){
// 	if ('localStorage' in window && window['localStorage'] !== null) {
// 		try {
// 			var fontSize = document.getElementById('fontSizeSelector').value;
// 			// The setItem(‘key’,’value’) allows us to write the data into the local storage.
// 			localStorage.setItem('fontSizeSet', fontSize);
// 			document.body.classList.remove('font-size-1', 'font-size-2', 'font-size-3');
// 			document.body.classList.add('font-size-' + fontSize);
// 		}
// 		catch (e) {
// 			if (e == QUOTA_EXCEEDED_ERR) {
// 				alert('Quota exceeded!');
// 			}
// 		}
// 	} else {
// 		alert('Error: Cannot set font size as your browser do not support local storage');
// 	}
// });
// $('label.font-size .default').click(function() {
// 	$("#fontSizeSelector").val(1);
// 	$("#fontSizeSelector").trigger('change');
// });
// $('label.font-size .larger').click(function() {
// 	$("#fontSizeSelector").val(2);
// 	$("#fontSizeSelector").trigger('change');
// });
// $('label.font-size .largest').click(function() {
// 	$("#fontSizeSelector").val(3);
// 	$("#fontSizeSelector").trigger('change');
// });
//
//
// // non working
// $('.dropdown-toggle').click(function() {
//     alert ('hi');
//     var location = $(this).attr('href');
//     window.location.href = location;
//     return false;
// });
//

