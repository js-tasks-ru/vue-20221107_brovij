<template>
  <slot v-if="promiseResult.state === 'pending'" name="pending"></slot>

  <slot v-else-if="promiseResult.state === 'rejected'" :error="promiseResult.data" name="rejected"></slot>

  <slot v-else :result="promiseResult.data" name="fulfilled"></slot>
</template>

<script>
export default {
  name: 'PromiseWrapper',

  props: {
    promise: {
      type: Promise,
      required: true
    }
  },

  data() {
    return {
      promiseResult: {
        state: 'pending',
        data: null
      }
    }
  },

  watch: {

    promise: {
      immediate: true,

      async handler() {
        this.promiseResult.state = 'pending'

        try {
          let result = await this.promise
          
          this.promiseResult.state = 'fulfilled'
          this.promiseResult.data = result
        } catch (error) {
          this.promiseResult.state = 'rejected'
          this.promiseResult.data = error
        }
      }
    }

  }
};
</script>