'use strict';

angular.module('promotracApp')
  .controller('MainCtrl', function ($scope) {
  	Gumby.init();

  	$scope.dashboard = {
  		title: "PromoTrac",
  		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, voluptatibus velit necessitatibus cum quisquam ducimus nam ab tempore rerum. A, necessitatibus et voluptatibus adipisci delectus facere optio corporis ipsa eligendi."
  	};

  	$scope.warehouse = {
  		title: "Warehouse | Promotrac",
  		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, cumque eaque quisquam quibusdam facere laudantium beatae cum ex excepturi quas quo quis provident deleniti itaque facilis harum ipsam at aliquam!"
  	};

  	$scope.orders = {
  		title: "Orders | Promotrac",
  		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, inventore, perspiciatis vero saepe magni nostrum sunt nulla ducimus consectetur sit cum possimus nemo quo corporis provident repellat numquam esse recusandae."
  	};

  	$scope.account = {
  		title: "Account | Promotrac",
  		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, eveniet nisi unde quas excepturi voluptatem repellat deleniti quibusdam. Deserunt magni quam ea accusamus ipsa culpa beatae inventore doloremque eveniet aperiam!"
  	};
  });
