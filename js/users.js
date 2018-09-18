/**
 * Practica
 *
 * # Objeto Usuario
 *
 * ## Propiedades:
 *  @param nombre
 *  @param edad
 *  @param email
 *  @param timezone (Notación ISO Timezone city/continent)
 *  @param rol: admin, editor, user
 *  @param timestamp last connection
 */

// Define el objeto Usuario.

function User(name, age, email, tz, rol, lastconnection) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.tz = tz;
  this.rol = rol;
  this.lastconnection = lastconnection;
}

// Crea 5 nuevos objetos.

var Dani = new User(
  "Daniel Siestas",
  "40",
  "dani@adormir.es",
  "Atlantic/Canary",
  "admin",
  "1535214624"
);
var Ana = new User(
  "Ana Dana",
  "25",
  "ana@lila.es",
  "Europe/London",
  "user",
  "1535760302"
);
var Dana = new User(
  "Dana Nali",
  "33",
  "Dana@hotmail.es",
  "Europe/Dublin",
  "editor",
  "1535884624"
);
var Nick = new User(
  "Nick Obolas",
  "29",
  "nick@magic.com",
  "America/Havana",
  "user",
  "1533466500"
);
var Ohana = new User(
  "Ohana Obolas",
  "27",
  "Ohana@magic.com",
  "America/Havana",
  "user",
  "1533430500"
);

users = [Dani, Ana, Dana, Nick, Ohana];
enabled = [1, 1, 1, 0, 0];

// Crear un objeto con un array de usuarios y un estado de activo o no.
/**
 * # EnabledUsers
 * ## Parametros
 * @param {Array} usersList Array of users
 * @param {Array} enabledList Array with state of users.
 *
 * @method addUser Add one user with it state.
 * @method searchUser Show position for user
 * @method enabledUser Show state of the user
 * @method setEnabled Set state for the user
 * @function valuevalid Evalue is value is valid.
 * @function userInList Verify is an added user.
 */

function UserEnable(usersList, enabledList) {
  // *** Verificar los elementos de entrada.
  this.usersList = usersList;
  this.enabledList = enabledList;

  // Método para añadir nuevo usuario con su estado (activo, no activo)
  /**
   * @memberof UserEnable
   * @type {function}
   * @param {string} useradd Name of user.
   * @param {number} enabledadd Value (0 or 1)
   *
   * @returns Message if no correct parameters.
   */
  this.addUser = function(useradd, enabledadd) {
    if (useradd instanceof User) {
      /*&& (valuevalid(enabledadd))*/ this.usersList.push(useradd);
      this.enabledList.push(enabledadd);
    } else {
      return console.log("[ERROR] Need two values");
    }
  };

  // Método para encontrar la posición de un usuario.
  /**
   * @memberof UserEnable
   * @type {function} Locate position one user.
   * @name searchUser
   * @param {string} usertoSearch
   *
   * @returns Exit, position of user in List of user. Error, message when no exist user.
   */
  this.searchUser = function(usertoSearch) {
    if (userInList(usertoSearch)) {
      return usersList.indexOf(usertoSearch); // .indexOf() devuelve la posición que ocupa un valor, si no lo encuntra devuelve un -1.
    } else {
      return console.log("[ERROR] This user does not exist.");
    }
  };

  // Método para localizar el estado de un usuario.
  /**
   * @memberof UserEnable
   * @type {function} Locate state of one user.
   * @name enabledUser
   * @param {string} usertoSearch
   *
   * @returns Exit, show value of state. Error, message when no exist user.
   */
  this.enabledUser = function(usertoSearch) {
    if (userInList(usertoSearch)) {
      return this.enabledList[this.searchUser(usertoSearch)];
    } else {
      return console.log("[ERROR] This user does not exist.");
    }
  };

  // Método para cambiar el permiso a un usuario.
  /**
   * @memberof UserEnable
   * @type {function} Set state of one user.
   * @param {string} usertoSearch Name of user.
   * @param {number} valueenabled New state for user.
   *
   * @returns Show a message when values not correct or warning when the state is not different.
   */
  this.setEnabled = function(usertoSearch, valueenabled) {
    if (userInList(usertoSearch) && valuevalid(valueenabled)) {
      if ((usertoSearch instanceof User) && (userInList(usertoSearch) == true)) {
        // <= Check usertoSearch objeto User and exist in enabledList.
        if (this.enabledUser(usertoSearch) == valueenabled) {
          return console.log("The new state is the same as the current one.");
        } else {
          this.enabledList[this.searchUser(usertoSearch)] = valueenabled;
        }
      }
    } else {
      return console.log("[ERROR] One value is incorrect or user no exist.");
    }
  };

  // Método para resetear todos los estados a 0.
  this.resetEnabled = function() {
    for (i = 0; i < this.enabledList.length; i++) {
      this.enabledList[i] = 0;
    }
  };

  this.enabledAll = function() {
    for (i = 0; i < this.enabledList.length; i++) {
      this.enabledList[i] = 1;
    }
  };

  // Método de control de valor enabled
  /**
   * @memberof UserEnable
   *
   * @type {function} Evaluate is value is valid.
   * @name valuevalid
   *
   * @param {number} value
   *
   */
  valuevalid = function(value) {
    if (value != 0 && value != 1) {
      return false;
    } else {
      return true;
    }
  };

  // Método de control de usuario
  /**
   * @memberof UserEnable
   *
   * @type {function} Verify is user exist.
   * @name userInList
   *
   * @param {string} usertoSearch Name of user to search.
   */
  userInList = function(usertoSearch) {
    if (usersList.indexOf(usertoSearch) != -1) {
      return true;
    } else {
      return false;
    }
  };
}

// ================== TESTS ================== //

console.log("\x1b[32m", "\n** Create new object. -----");
var enableusers = new UserEnable([], []);

console.log("\x1b[32m", "\n** Show object. -----");
console.log(enableusers); //<= Muestra el objeto creado.

console.log("\x1b[32m", "\n** Insert two users. -----");
console.log(Dani);
console.log(Ohana);
console.log(enableusers.addUser(Ohana, 0)); //<= Prueba de que funciona el método añadir usuario.
console.log(enableusers.addUser(Dani, 1));

console.log("\x1b[32m", "\n** Show object. -----");
console.log(enableusers); //<= Muestra el objeto creado.

console.log("\x1b[32m", "\n** Show state of users. -----");
console.log("- State of user Ohana: " + enableusers.enabledUser(Ohana)); // <= Prueba de que funciona el método mostrar el estado de un usuario.
console.log("- State of user Dani: " + enableusers.enabledUser(Dani));
console.log("- State of user Ana(no exist): " + enableusers.enabledUser(Ana));

console.log("\x1b[32m", "\n** Tests when it's change state to users. -----");
console.log("- Insert the same state: " + enableusers.setEnabled(Ohana, 0));
console.log("- Change the state: " + enableusers.setEnabled(Dani, 0)); // <= Prueba de que funciona el método para cambiar el esetado a un usuario.
console.log(
  "- Change the status to a user that does not exist: " +
    enableusers.setEnabled(Ana, 1)
);

console.log("\x1b[32m", "\n** Show object. -----");
console.log(enableusers); //<= Muestra el objeto creado.

console.log("\x1b[32m", "\n** Tests when add users. -----");
console.log(
  "- Insert with only one parameter(user). => " + enableusers.addUser("Paco")
); //<= Prueba que no se puede añadir un usuario sin su estado.
console.log(
  "- Insert with only one parameter(state). => " + enableusers.addUser(1)
); //<= Prueba que no se puede añadir un estado sin usuario.
console.log(
  "- Insert with erroneous value state. => " + enableusers.addUser("Paco", 15)
); //<= Prueba que no se puede añadir un usuario con valor incorrecto en el estado.
console.log(
  "- Insert with erroneous value without user. => " + enableusers.addUser(3)
); //<= Prueba que no se puede añadir un estado invalido sin usuario.
console.log(
  "- Insert with unexpected value. => " + enableusers.addUser("Paco", "e")
); //<= Prueba que no se puede añadir un usuario con estado erroneo.

console.log("\x1b[32m", "\n** Test reset. -----");
console.log("- Change all states to 0. => " + enableusers.resetEnabled());
console.log(enableusers.enabledList);

console.log("\x1b[32m", "\n** Test enabledall. -----");
console.log("- Change all states to 1. => " + enableusers.enabledAll());
console.log(enableusers.enabledList);

// Comando para agregar elementos en un array ".push".
// Ej: enableusers.users.push(Dani);
// Ej2: enableusers.enabled.push(1);

// Crear estructuras de control para los métodos.
