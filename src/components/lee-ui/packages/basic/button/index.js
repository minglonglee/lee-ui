import LeeButton from './src/button';

/* istanbul ignore next */
LeeButton.install = function(Vue) {
  Vue.component(LeeButton.name, LeeButton);
};

export default LeeButton;
