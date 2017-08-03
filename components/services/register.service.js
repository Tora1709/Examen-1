(function() {
  'use strict'
  angular
    .module('myGame')
    .service('registerService', registerService);

  function registerService() {
    var players = [];

    var publicAPI = {
      setPlayers: _setPlayers,
      getPlayers: _getPlayers,
      updatePlayers: _updatePlayers,
      valNewPlayers: _valNewPlayers
    };
    return publicAPI;
    //funcion para enviar datos a local storage
    function _setPlayers(pPlayers) {
      var playersList = _getPlayers();

      playersList.push(pPlayers);
      localStorage.setItem('lsPlayersList', JSON.stringify(playersList));
    }

    //funcion para obtener datos de localstorage
    function _getPlayers() {
      var playersList = JSON.parse(localStorage.getItem('lsPlayersList'));
      if (playersList == null) {
        playersList = players;
      }
      return playersList;
    }

    //funcion que actualiza los datos modificados
    function _updatePlayers(pplayersModified) {
      var playersList = _getPlayers();
      for (var i = 0; i < playersList.length; i++) {
        if (playersList[i].code == pplayersModified.code) {
          playersList[i] = pplayersModified;
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
