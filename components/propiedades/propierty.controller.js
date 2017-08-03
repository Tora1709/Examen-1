(function() {
  'use strict'
  angular
    .module('myGame')
    .controller('propiertyController', propiertyController);
  propiertyController.$inject = ['propiertyService','registerService'];

  function propiertyController(propiertyService,registerService) {
    var vm = this;
    vm.property = {};

    function init() {
      vm.properties = propiertyService.getPropierties();
      vm.property = {};
      vm.players = registerService.getPlayers();
    }
    init();


    vm.buy = function(propiedad, jugador){
      var playerList = registerService.getPlayers();
      var player = '';

      for (var i = 0; i < playerList.length; i++) {
        if (jugador === playerList[i].code) {
          player = playerList[i];
        }
      }
      console.log(propiedad);

      console.log(player);

		}

  }
})();
