/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */


var app = angular.module('WebApp', ['ngRoute']);

    // Configure the Routes
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        // Pages
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        .when("/the_firm", {templateUrl: "partials/the_firm.html", controller: "PageCtrl"})
        .when("/practice_areas", {templateUrl: "partials/practice_areas.html", controller: "PageCtrl"})
        .when("/our_team", {templateUrl: "partials/our_team.html", controller: "ourteamCtrl"})
        .when("/our_team/Lucius_Smejda", {templateUrl: "partials/our_team/Lucius_Smejda.html", controller: "teamHomeCtrl"})
        .when("/our_team/Joseph_McFarland", {templateUrl: "partials/our_team/Joseph_McFarland.html", controller: "teamHomeCtrl"})
        .when("/our_team/Antonio_Zamora", {templateUrl: "partials/our_team/Antonio_Zamora.html", controller: "teamHomeCtrl"})
        .when("/our_team/Elke_Rolff", {templateUrl: "partials/our_team/Elke_Rolff.html", controller: "teamHomeCtrl"})
        .when("/our_team/Maxim_Istomin", {templateUrl: "partials/our_team/Maxim_Istomin.html", controller: "teamHomeCtrl"})
        .when("/our_team/Susanne_Leone", {templateUrl: "partials/our_team/Susanne_Leone.html", controller: "teamHomeCtrl"})
        .when("/our_team/Evgeny_Golovanov", {templateUrl: "partials/our_team/Evgeny_Golovanov.html", controller: "teamHomeCtrl"})
     // .when("/our_team/:memberName", {templateUrl: "partials/our_team_member.html", controller: "ourteamCtrl"})
        .when("/links_events", {templateUrl: "partials/links_events.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
        .when("/not_found", {templateUrl: "partials/not_found.html", controller: "PageCtrl"})

        // else 404
        .otherwise("/not_found", {redirectTo: "partials/not_found.html", controller: "PageCtrl"});
    }]);

    // NEW CODE -------------
//     .controller('Controller', ['$scope', function($scope) {
//       $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
//       $scope.igor = { name: 'Igor', address: '123 Somewhere' };
//     }])
//     .directive('myCustomer', function() {
//       return {
//         restrict: 'E',
//         scope: {
//           customerInfo: '=info'
//         },
//         templateUrl: 'my-customer-iso.html'
//       };
//     });

    // OLD CODE -----------
	app.controller("ourteamCtrl", ['$scope', function ($scope, $routeParams) {
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
        	        imageExt: "jpg"}
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
        	        memberURL: "Carlos_AUD_SOBRINHO",
        	        imageExt: "jpg"},
        	        {
        	        memberName: "Eric Vigneron",
        	        memberTitle: "Dominican Republic",
        	        memberURL: "Eric_VIGNERON",
        	        imageExt: "png"}
		        ]
		    } //END international
		]; // END countries
		// $scope.countries = countries;
        // $scope.whichMember = $routeParams.memberID;
	} // END function
	]);

//     $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
//         window.scrollTo(0, 0);
//     });

//
// /**
//  * Controls the Blog
//  */
// app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
//   console.log("Blog Controller reporting for duty.");
// });
//
// /**
//  * Controls all other Pages
//  */
// app.controller('PageCtrl', function (/* $scope, $location, $http */) {
//   console.log("Page Controller reporting for duty.");
//
//   // Activates the Carousel
//   $('.carousel').carousel({
//     interval: 5000
//   });
//
//   // Activates Tooltips for Social Links
//   $('.tooltip-social').tooltip({
//     selector: "a[data-toggle=tooltip]"
//   })
// });



  // JQuery code

$(window).on('scroll', function(){
    var slideHeight = ('50');
	if( $(window).scrollTop()>slideHeight){
		$('.navbar').removeClass('noscroll');
	} else {
		$('.navbar').addClass('noscroll');
	}
});

$('.dropdown-toggle').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});




