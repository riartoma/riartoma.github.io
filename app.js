function registrar() {
    var email = getElementById('email').value;
    var password = getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    console.log('diste un click');
    console.log(email);
    console.log(password);
}

function ingreso() {
    var email2 = getElementById('email2').value;
    var password2 = getElementById('password2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    console.log('diste un click');
    console.log(email2);
    console.log(password2);
}

function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email2
            var emailverified = user.emailverified;
            var photoURL = user.photoURL;
            var isAnonimous = user.isAnonimous;
            var uid = user.uid;
            var providerData = user.providerData;
            console.log('Existe el Usuario Activo: ' + displayName)
        } else {
            console.log('No Existe el Usuario Activo')
            // No user is signed in.
        }
    });
    observador();
}