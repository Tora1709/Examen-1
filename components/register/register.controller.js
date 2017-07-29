(function() {
  'use strict'
  angular
    .module('myGame')
    .controller('registerController', registerController);
  registerController.$inject = ['registerService','Upload','ImageService'];

  function registerController(registerService, Upload, ImageService) {

    var vm = this;
   vm.player = {};
   vm.cloudObj = ImageService.getConfiguration();

   function init(){
     vm.players = registerService.getPlayers();
     vm.player = {};
   }
   init();

   vm.presave= function(update) {
     console.log('presave')

     vm.loading = true;

     vm.cloudObj.data.file =document.getElementById("photo").files[0];

     Upload.upload(vm.cloudObj)

       .success(function(data){

         vm.player.photo = data.url;

         if (!update) {
            vm.save();
         }

       })
       .error(function (data) {
          console.log('errorPhoto');
       }
        );


       ;

     // }
     vm.loading = false;
   }

   vm.save = function(){
     console.log('save')
     registerService.setPlayers(vm.player);
     init();
   }

   vm.update = function(){
     console.log('update')
     registerService.updatePlayers(vm.player);

     init();
   }
   vm.getInfo = function(pPlayer){
     console.log('getInfo')
     vm.player = pPlayer;
   }

  }
})();
