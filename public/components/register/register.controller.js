(function() {
  'use strict'
  angular
    .module('myGame')
    .controller('registerController', registerController);
  registerController.$inject = ['registerService', 'Upload', 'ImageService'];

  function registerController(registerService, Upload, ImageService) {

    var vm = this;
    vm.player = {};
    vm.players = "";
    vm.cloudObj = ImageService.getConfiguration();

      loadPLayers();

    function init() {
      vm.player = {};
    }
    init();


    function loadPLayers(){
      registerService.getPlayers().then(function (response){
        vm.players = response.data;
      })
    }

    vm.presave = function(update) {

      client.pick({
        accept: 'image/*',
        maxFiles: 5,
        imageMax: [1024, 1024]
      }).then(function(result) {
        console.log(JSON.stringify(result.filesUploaded))
        
      })
    }

    vm.save = function() {

      console.log(vm.player);
      var Validation = validCode(vm.player);
      if (Validation === false){
        registerService.setPlayers(vm.player);
        $("#formSuccess").modal();
      }else {
        $("#formRepeat").modal();
      };
      limpiar();
      init();

    }

    function validCode(player){
      var validation = false;
      for (var i = 0; i < vm.players.length; i++) {
        if (vm.players[i].code == player.code) {
          validation = true;
        }
      }
      return validation;
    }

    vm.update = function() {
      console.log('update')
      registerService.updatePlayers(vm.player);

      init();
    }
    vm.getInfo = function(pPlayer) {
      console.log('getInfo')
      vm.player = pPlayer;
    }

    function limpiar() {
      vm.players = {}
    }

  }
})();
