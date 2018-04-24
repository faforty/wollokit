<template>
  <div :class="['ui-input-status', {
    'ui-input-status_error': this.typeStatus === 'error',
    'ui-input-status_success': this.typeStatus === 'success',
    }]">
    <slot />
    <div class="ui-input-status__message">{{messageStatus}}</div>
  </div>
</template>

<script>
export default {
  name: 'InputStatus',
  props: {
    type: {
      type: String
    },
    message: {
      type: String
    },
    success: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    typeCache: '',
    messageCache: ''
  }),
  computed: {
    typeStatus: {
      set (value) {
        this.typeCache = value
      },
      get () {
          if (this.type) return this.type
          if (this.typeCache) return this.typeCache
      }
    },
    messageStatus: {
      set (value) {
        this.messageCache = value
      },
      get () {
          if (this.message) return this.message
          if (this.messageCache) return this.messageCache
      }
    }
  },
  methods: {
    async setValidate (validate, visible = true) {
      validate = await validate

      if (visible === true) {
        this.typeStatus = ''
        this.messageStatus = ''

        if (validate.valid === false) {
          this.typeStatus = 'error'
          this.messageStatus = validate.validationError
        }

        if (validate.valid === true && this.success === true) {
          this.typeStatus = 'success'
        }
      }

      this.$emit('validator', validate)
    }
  }
}
</script>

<style lang="stylus">
@import '~ui/Theme/Color'

.ui-input-status {
  &__message {
    margin-top 10px
    line-height 15px
    font-size 12px
    font-weight 400

    ../_error & {
      color: color.danger
    }
    ../_success & {
      color: color.success
    }
  }
}
</style>
