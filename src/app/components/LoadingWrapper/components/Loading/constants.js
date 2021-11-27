import loading from './assets/loading.json';
import buttonLoading from './assets/button-loading.json';

export const SPINNER_TYPES = {
  loading,
  buttonLoading
};

export const getOptions = ({ type, loop = true, autoplay = true, rendererSettings }) => ({
  loop,
  autoplay,
  animationData: SPINNER_TYPES[type] || SPINNER_TYPES.loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    ...rendererSettings
  }
});
