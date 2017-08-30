(function() {
  'use strict'
  angular
    .module('myGame')
    .service('propiertyService', propiertyService);
    propiertyService.$inject = ['$log','$http']
  function propiertyService($log,$http) {
    var propierties = [];

    var publicAPI = {
      setPropierties: _setPropierties,
      getPropierties: _getPropierties,
      updatePropierties: _updatePropierties,
      valNewPropierties: _valNewPropierties
    };
    return publicAPI;
    //funcion para enviar datos a local storage
    function _setPropierties(pPropierties) {

      return $http.post('http://localhost:3000/api/properties_Post',pPropierties);
    }

    //funcion para obtener datos de localstorage
    function _getPropierties() {

      return $http.get('http://localhost:3000/api/properties_Get');
    }

    //funcion que actualiza los datos modificados
    function _updatePropierties(pCompra, pProperty) {
      var propiertiesList = pProperty;
      for (var i = 0; i < propiertiesList.length; i++) {
        if (propiertiesList[i].name == pCompra.selected.name) {
          propiertiesList[i].ownedby = pCompra.player.name;
          var propiedad = propiertiesList[i];
        }
      }
      console.log(propiedad);
      // localStorage.setItem('lsPropiertiesList', JSON.stringify(propiertiesList));
      return $http.put('http://localhost:3000/api/properties_update',propiedad);
    }

    //funcion que permite que no se repitan alumnos
    function _valNewPropierties(pPropierties){
      var propiertiesList  = _getPropierties();
      var propiertiesValidate = false;

      for (var i = 0; i < propiertiesList.length; i++) {
        if (propiertiesList[i].code == pPropierties.code) {
          propiertiesValidate = true;
        }
      }
      return propiertiesValidate;
    }

  }
})();
