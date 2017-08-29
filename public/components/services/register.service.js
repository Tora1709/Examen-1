(function() {
  'use strict'
  angular
    .module('myGame')
    .service('registerService', registerService);
  registerService.$inject = ['$log','$http']
  function registerService($log,$http) {
    var players = [];

    var publicAPI = {
      setPlayers: _setPlayers,
      getPlayers: _getPlayers,
      updatePlayers: _updatePlayers,
      valNewPlayers: _valNewPlayers,
      setLocal : _setLocal
    };
    return publicAPI;

    function _setLocal(fileUrl) {
      var playersList = "";

      playersList.push(fileUrl);
      localStorage.setItem('lsPlayersList', JSON.stringify(playersList));
    }
    //funcion para enviar datos a local storage
    function _setPlayers(pPlayers) {
      // var playersList = _getPlayers();
      //
      // playersList.push(pPlayers);
      // localStorage.setItem('lsPlayersList', JSON.stringify(playersList));
      return $http.post('http://localhost:3000/api/save_user',pPlayers);
    }

    //funcion para obtener datos de localstorage
    function _getPlayers() {
      // var playersList = JSON.parse(localStorage.getItem('lsPlayersList'));
      // if (playersList == null) {
      //   playersList = players;
      // }
      // return playersList;
      return $http.get('http://localhost:3000/api/get_all_users');
    }

    //funcion que actualiza los datos modificados
    function _updatePlayers(pplayers) {
      var compra = '';
      var playersList = _getPlayers();
      for (var i = 0; i < playersList.length; i++) {
        if (playersList[i].code == pplayers.player.code) {
          compra = playersList[i].coin - pplayers.selected.price;
          playersList[i].coin = compra;
        }
      }
      localStorage.setItem('lsPlayersList', JSON.stringify(playersList));
    }

    //funcion que permite que no se repitan alumnos
    function _valNewPlayers(pPlayers){
      var playersList  = _getPlayers();
      var playersValidate = false;

      for (var i = 0; i < playersList.length; i++) {
        if (playersList[i].code == pPlayers.code) {
          playersValidate = true;
        }
      }
      return playersValidate;
    }

  }
})();
