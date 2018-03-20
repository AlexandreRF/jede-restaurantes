// Dom7
var $$ = Dom7;
$$('.logoff').hide();
$$('.login-screen-open').show();

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SignUp').on('click', function () {
  var username = $$('#my-login-screen [name="emailInput"]').val();
  var password = $$('#my-login-screen [name="passwordInput"]').val();

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);

firebase
  .auth()
  .createUserWithEmailAndPassword(username,password) //Promisses
  .then( function () {
    app.dialog.alert('Bem vindo: ' + username);
    this.$$('.navegacao_autenticacao').text('Bem vindo: ' + username);
    // displayName.innerText = 'Bem vindo: ' + username;

  })
  .catch( function(error) {
    console.error(error.code)
    console.error(error.message)
    app.dialog.alert('Falha ao cadastrar, verifique o erro no console');
    // this.$$('.toobar-inner').text('Bem vindo' +username);
  })

 // Close login screen
 app.loginScreen.close('#my-login-screen');  
})


$$('#my-login-screen .SignIn').on('click', function () {
  var username = $$('#my-login-screen [name="emailInput"]').val();
  var password = $$('#my-login-screen [name="passwordInput"]').val();

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);

firebase
  .auth()
  .signInWithEmailAndPassword(username,password) //Promisses
  .then( function () {
    app.dialog.alert('Bem vindo: ' + username);
    this.$$('.toobar-inner').text('Bem vindo: ' + username + ' vc está logado!');
    $$('.logoff').show();
    $$('.login-screen-open').hide();
    $$('input#emailInput').val('');
    $$('input#passwordInput').val('');
    // displayName.innerText = 'Bem vindo: ' + username;

  })
  .catch( function(error) {
    console.error(error.code)
    console.error(error.message)
    if (error.code =='auth/invalid-email'){
      app.dialog.alert('E-mail inválido no seu formato!!!');
    }
    app.dialog.alert('Falha ao cadastrar, verifique o erro no console');
    // this.$$('.toobar-inner').text('Bem vindo' +username);
  })

 // Close login screen
 app.loginScreen.close('#my-login-screen');  
})


$$('#my-login-screen .SignOut').on('click', function () {
 app.loginScreen.close('#my-login-screen');
 $$('input#emailInput').val('');
 $$('input#passwordInput').val('');
firebase
  .auth()
  .signOut()
  .then( function () {
    this.$$('.toobar-inner').text('Usuário não autenticado');
    app.dialog.alert('Usuario não autenticado');
    app.loginScreen.close('#my-login-screen');
    $$('.logoff').hide();
    $$('.login-screen-open').show();
  }, function(error){
    console.error(error)
  })
});


$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
})

$$('.logoff').on('click', function () {
  firebase
  .auth()
  .signOut()
  .then( function () {
    this.$$('.toolbar-inner').text('Usuário não autenticado');
    app.dialog.alert('Usuário não autenticado');
    $$('input#emailInput').val('');
    $$('input#passwordInput').val('');
    $$('.logoff').hide();
    $$('.login-screen-open').show();
  }, function(error){
    console.error(error)
  })
})
    

 
