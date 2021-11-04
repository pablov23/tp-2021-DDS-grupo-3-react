import i18next from 'i18next';

i18next.addResources('es', 'Login', {
  user: 'Usuario',
  password: 'Contraseña',
  login: 'Iniciar sesión',
  noUser: '¿No tenés usuario aún?',
  signUp: 'Registrate ahora',
  forgotPassword: '¿Olvidaste tu contraseña?',
  loginError: 'El usuario o la contraseña son inválidos.'
});

i18next.addResources('en', 'Login', {
  welcome: 'Welcome!',
  user: 'User',
  password: 'Password',
  login: 'Login',
  forgotPassword: 'Forgot password',
  noUser: 'No user yet?',
  signUp: 'Sign up now!',
  loginError: 'The user or the password are invalid'
});

i18next.addResources('es', 'LoginAdmin', {
  welcome: 'Bienvenido/a Admin!'
});

i18next.addResources('en', 'LoginAdmin', {
  welcome: 'Welcome Admin!'
});

i18next.addResources('es', 'LoginUser', {
  welcome: 'Bienvenido/a!'
});

i18next.addResources('en', 'LoginUser', {
  welcome: 'Welcome!'
});
