(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('adminController', adminController);
    function adminController(adminService){
      var userCtrl = this;

      function init(){
        userCtrl.users = adminService.getUsers();
        userCtrl.user = {};
      }init();

      userCtrl.save= function(pNewUser){
        var userValidate = adminService.valNewUser(pNewUser);
        if (userValidate === false) {
          adminService.setUsers(pNewUser);
        }
        userCtrl.user = {};
        limpiar();
        init();
      }

      userCtrl.getInfo = function(puser){
        userCtrl.user.id = puser.id;
        userCtrl.user.firstName = puser.firstName;
        userCtrl.user.middleName = puser.middleName;
        userCtrl.user.lastName = puser.lastName;
        userCtrl.user.SecLastName = puser.SecLastName;
        userCtrl.user.nationality = puser.nationality;
        userCtrl.user.typeId = puser.typeId;
        userCtrl.user.birthDate = puser.birthDate;
        userCtrl.user.gender = puser.gender;
        userCtrl.user.phone = puser.phone;
        userCtrl.user.username = puser.username;
        userCtrl.user.regPassword = puser.regPassword;
        userCtrl.user.photo = puser.photo;
        userCtrl.user.age = puser.age;
        userCtrl.user.reference = puser.reference;
        userCtrl.user.rol = puser.rol ;
        userCtrl.user.state = puser.state;
      }

      userCtrl.update = function(){
          var usuarioEditado = {
            id: userCtrl.user.id,
            firstName : userCtrl.user.firstName,
            middleName : userCtrl.user.middleName,
            lastName : userCtrl.user.lastName,
            SecLastName: userCtrl.user.SecLastName,
            nationality: userCtrl.user.nationality,
            typeId: userCtrl.user.typeId,
            birthDate: userCtrl.user.birthDate,
            gender: userCtrl.user.gender,
            phone : userCtrl.user.phone,
            username : userCtrl.user.username,
            regPassword : userCtrl.user.regPassword,
            photo : userCtrl.user.photo,
            age : userCtrl.user.age,
            reference: userCtrl.user.reference,
            rol: userCtrl.user.rol,
            state: userCtrl.user.state
          }
          adminService.updateAdmin(usuarioEditado);
          init();
          limpiar();
        }

        function limpiar(){
          userCtrl.user={};
        }

    }
})();
