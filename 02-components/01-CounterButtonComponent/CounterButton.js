import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  // Компонент должен иметь входной параметр и порождать событие

  emits: ['update:count'],

  methods: {
    counter(value) {
      value += 1
      this.$emit('update:count', value)
    }
  },

  template: `<button type="button" @click="counter(count)">{{ count }}</button>`,
});
