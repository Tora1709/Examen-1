(function() {
  'use strict'
  angular
    .module('myGame')
    .service('registerService', registerService);

  function registerService() {
    var players = [
      {
    code: '001',
    name:'Goku',
    nick: 'Kokkun',
    coin: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
  },
  {
    code: '002',
    name:'Piccolo',
    nick: 'PikOREO',
    coin: 1500,
  photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
  },
  {
    code: '003',
    name:'Logan',
    nick: 'Lovezno',
    coin: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
  },
  {

    code: '004',
    name:'Bomberman',
    nick: 'Don Pepe y los Globos',
    coin: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
  }
    ];

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
