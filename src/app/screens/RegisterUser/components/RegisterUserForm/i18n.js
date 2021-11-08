import i18next from 'i18next';

i18next.addResources('es', 'RegisterUserForm', {
  name: 'Nombre de Usuario',
  password: 'Contraseña',
  passwordConfirmation: 'Repetir contraseña',
  register: 'Siguiente',
  selectOne: 'Seleccione una opción',
  userType: 'Tipo de usuario',
  organization: 'Organización',
  admin: 'Administrador',
  owner: 'Dueño',
  rescuer: 'Rescatista',
  org1: 'Organización 1',
  org2: 'Organización 2'
});

i18next.addResources('es', 'RegisterUserFormErrors', {
  required: 'Requerido',
  passwordConfirmation: 'Las contraseñas deben coincidir',
  passwordStrength: 'La contraseña debe contener como mínimo una letra mayúscula y un número',
  passwordMinimumLength: 'La contraseña debe tener como mínimo 8 caracteres'
});
