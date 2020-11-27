import { defineComponent } from 'vue';
import PropTypes from '../../utils/vue-types';
// import { tuple } from '../../utils/type';

const ButtonProps = {
//   type: PropTypes.oneOf(tuple('primary', 'ghost', 'dashed', 'link', 'text', 'default')),
  type: PropTypes.string,
};
const Button = defineComponent({
  props: ButtonProps,
  setup(props, { slots }) {
    return () => (
      <button class={['btn', `ant-btn-${props.type}`]}>
        {slots.default!()}
      </button>
    );
  },
});

export default Button;
