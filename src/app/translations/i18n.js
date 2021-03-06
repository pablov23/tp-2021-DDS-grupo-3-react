import i18next from 'i18next';

i18next.addResources('es', 'RescueCommon', {
  user: 'Usuario',
  password: 'Contraseña',
  save: 'Guardar',
  title: 'Rescate de Patitas',
  selectOne: 'Seleccione una opción',
  dog: 'Perro',
  cat: 'Gato',
  male: 'Macho',
  female: 'Hembra',
  badge: '¿Tiene chapita?',
  yes: 'Si',
  no: 'No'
});

i18next.addResources('es', 'RescueHeader', {
  title: i18next.getResource('es', 'RescueCommon', 'title'),
  profile: 'Mi perfil'
});

i18next.addResources('es', 'RegisterPetDataForm', {
  name: 'Nombre',
  nickname: 'Apodo',
  petType: 'Tipo de Mascota',
  dog: i18next.getResource('es', 'RescueCommon', 'dog'),
  cat: i18next.getResource('es', 'RescueCommon', 'cat'),
  age: 'Edad',
  sex: 'Sexo',
  description: 'Descripción física',
  state: 'Estado',
  male: i18next.getResource('es', 'RescueCommon', 'male'),
  female: i18next.getResource('es', 'RescueCommon', 'female'),
  badge: i18next.getResource('es', 'RescueCommon', 'badge'),
  yes: i18next.getResource('es', 'RescueCommon', 'yes'),
  no: i18next.getResource('es', 'RescueCommon', 'no'),
  publish: 'Publicar',
  characteristicsTitle: 'Características',
  characteristic1: 'Color de pelo',
  characteristic2: 'Cantidad de patas'
});

i18next.addResources('es', 'FileUploader', {
  title: 'Imagen (formatos permitidos: jpg, png, svg)',
  uploadFile: 'Subir imagen'
});

i18next.addResources('es', 'LoginAndRegisterButtons', {
  login: 'Iniciar sesión',
  withoutUser: '¿No tienes cuenta?',
  register: 'Registrate'
});

i18next.addResources('es', 'Organizations', {
  next: 'Siguiente',
  label: 'Seleccione una organización',
  // TODO: Delete on integration
  organization1: 'Los Cachorros',
  organization2: 'El Campito',
  organization3: 'Rescate Animal'
});

i18next.addResources('es', 'HomeAdmin', {
  createAdmin: 'Crear nuevo usuario Administrador',
  addCharacteristic: 'Agregar caracteristicas de mascotas'
});

i18next.addResources('es', 'RescueViewWrapper', {
  title: i18next.getResource('es', 'RescueCommon', 'title')
});

i18next.addResources('es', 'PersonHeader', {
  title: 'Grupo 3',
  profile: 'Mi perfil'
});

i18next.addResources('es', 'PersonSearcher', {
  title: 'Buscar Persona',
  dni: 'Inserte DNI'
});

i18next.addResources('es', 'Validations', {
  invalidEmail: 'El email ingresado es inválido'
});

i18next.addResources('es', 'SuccessScreen', {
  homeButton: 'Volver al inicio'
});

i18next.addResources('es', 'RegisterSuccess', {
  title: '¡Registro exitoso!',
  toLogin: 'Ir a iniciar sesión'
});

i18next.addResources('es', 'PublicationSuccess', {
  title: '¡Publicación generada\ncon exito!'
});

i18next.addResources('es', 'ContactOwner', {
  contact: 'Contactar al dueño'
});

i18next.addResources('en', 'Validations', {
  invalidEmail: 'The entered email is invalid'
});

i18next.addResources('es', 'Home', {
  title: i18next.getResource('es', 'RescueCommon', 'title')
});

i18next.addResources('es', 'PetCard', {
  wantToAdopt: 'Quiero adoptarlo'
});
