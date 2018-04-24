<template>
  <div class="ui-form-group">
    <label class="ui-form-group__label" v-if="label">{{label}}</label>
    <div class="ui-form-group__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',

  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.ui-form-group {
  margin-bottom 15px

  @media (min-width: 768px) {
    margin-bottom 30px
  }

  &__label {
    width 100%
    display inline-block
    margin-bottom 10px
  }

  &__inner {
    position relative

    @media (min-width: 768px) {
      width 100%
      display inline-block
      margin-left 0
      vertical-align top
    }
  }
}
</style>
