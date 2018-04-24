<template>
  <form @submit.prevent="handleSubmit">
    <slot v-bind:validator="validator" />

    <input type="submit" style="display: none">
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit () {
      this.$emit('submit')
    },
    validator ({ valid, name }) {
      this.fields[name] = valid

      if (Object.values(this.fields).indexOf(false) < 0) {
        this.$emit('validate', true)
      } else {
        this.$emit('validate', false)
      }
    }
  }
}
</script>
