(function() {
  'use strict'
  angular
    .module('myGame')
    .controller('propiertyController', propiertyController);
  propiertyController.$inject = ['propiertyService','registerService'];

  function propiertyController(propiertyService,registerService) {
    var vm = this;
    vm.selected = {};
    loadPropierties();
    loadPLayers();
    function init() {
      vm.property = {};
      vm.selected = {};
    }
    init();

    function loadPropierties(){
      propiertyService.getPropierties().then(function (response){
        vm.property = response.data;
      })
    }
    function loadPLayers(){
      registerService.getPlayers().then(function (response){
        vm.players = response.data;
      })
    }

    vm.buy = function(propiedad){
      $("#formBuy").modal();
      keepProperty(propiedad);
		}

    function keepProperty(propiedad) {
      vm.selected = {};
      vm.selected = propiedad;
    }

    vm.confirm = function(jugador) {
      var playerList = vm.players;
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
      registerService.updatePlayers(buy, vm.players);
      propiertyService.updatePropierties(buy, vm.property);
      init();
      vm.player = '';
    }
  }
})();
