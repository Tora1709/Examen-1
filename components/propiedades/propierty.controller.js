(function() {
  'use strict'
  angular
    .module('myGame')
    .controller('propiertyController', propiertyController);
  propiertyController.$inject = ['propiertyService','registerService'];

  function propiertyController(propiertyService,registerService) {
    var vm = this;
    vm.property = {};
    vm.selected = {};

    function init() {
      vm.properties = propiertyService.getPropierties();
      vm.property = {};
      vm.selected = {};
      vm.players = registerService.getPlayers();
    }
    init();


    vm.buy = function(propiedad){
      $("#formBuy").modal();
      keepProperty(propiedad);
		}

    function keepProperty(propiedad) {
      vm.selected = {};
      vm.selected = propiedad;
    }

    vm.confirm = function(jugador) {
      var playerList = registerService.getPlayers();
      var player = '';

      for (var i = 0; i < playerList.length; i++) {
        if (jugador === playerList[i].name) {
          player = playerList[i];
        }
      }
      update(player, vm.selected);
      $("#formCheck").modal();
    }

     function update(player, selected){
       var buy = {
        player,
        selected
      }
      registerService.updatePlayers(buy);
      propiertyService.updatePropierties(buy);
      init();
      vm.player = '';
    }
  }
})();
