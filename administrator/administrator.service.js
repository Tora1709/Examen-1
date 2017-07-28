(function(){
  'use strict'
  angular
  .module('myApp')
  .service('adminService', adminService);

  function adminService(){
    var users = [];

    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers,
      updateAdmin : _updateAdmin,
      valNewUser : _valNewUser
    };
    return publicAPI;

    function _setUsers(pUser){
      var usersList = _getUsers();

      usersList.push(pUser);
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }

    function _getUsers(){
      var usersList = JSON.parse(localStorage.getItem('lsUsersList'));
      if(usersList == null){
        usersList = users;
      }
      return usersList;
    }

    function _updateAdmin(pobjUsuario){
      var usersList = _getUsers();
      for(var i = 0; i < usersList.length; i++){
        if(usersList[i].id == pobjUsuario.id){
          usersList[i] = pobjUsuario;
        }
      }
      localStorage.setItem('lsUsersList', JSON.stringify(usersList));
    }

    function _valNewUser(pUser){
      var usersList = _getUsers();
      var userValidate = false;

      for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].id == pUser.id) {
          userValidate = true;
        }
      }
      return userValidate;
    }


  }

})();
