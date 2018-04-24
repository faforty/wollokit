<template>
  <div class="ui-input">
    <input class="ui-input__field"
      ref="input"
      v-validate="validationRules"
      :data-vv-as="alias"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      @blur="blurred">
    <div class="ui-input__activeBorder"></div>
  </div>
</template>

<script>
import ValidatorMixin from './ValidatorMixin'

export default {
  mixins: [
    ValidatorMixin
  ],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String
    },
    alias: {
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: 'default'
    },
    formatValue: {
      type: Function,
      default: value => value
    },
    validationRules: {
      type: String
    }
  },
  methods: {
    updateValue (event) {
      if (this.returnEvent) {
        this.$emit(event.type, event);
        return
      }

      var value = this.formatValue(event.target.value);

      this.$emit('input', value);
      this.$emit('change', value);
    },
    validation (visible = true) {
      let validate = this.validate()

      if (this.$parent.$options.name === 'InputStatus') {
        this.$parent.setValidate(validate, visible)
      }
    },
    blurred () {
      this.validation()
    }
  },
  mounted () {
    this.validation(false)

    if (this.autofocus === true) {
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    }
  },
  beforeDestroy () {
    this.$off()
  }
}
</script>

<style lang="stylus">
@import '~ui/Theme/Color'

inputActiveBorder(color) {
  transform none
  border-color: color
  border-bottom-width 2px
}

.ui-input {
  position relative
  box-sizing border-box

  &__field {
    display block
    padding 0 15px
    border: 1px solid color.controls.grey.fieldOutline
    font-weight 400
    font-family Roboto, sans-serif
    width 100%
    outline none
    box-shadow none
    transition all 200ms ease
    font-size 13px
    height 45px
    box-sizing border-box
  }

  &__field:focus + &__activeBorder {
    inputActiveBorder(color.primary)
  }

  &__activeBorder {
    transform scaleX(0.6) scaleY(0)
    transform-origin center bottom
    top 0
    left 0
    right 0
    bottom 0
    border 0 solid transparent
    position absolute
    transition all 140ms linear
    pointer-events none
    border-radius 1px
    box-sizing border-box
  }
}

.ui-input-status_error {
  .ui-input__activeBorder
  .ui-input__field:focus + .ui-input__activeBorder {
    inputActiveBorder(color.danger)
  }
}
.ui-input-status_success {
  .ui-input__activeBorder
  .ui-input__field:focus + .ui-input__activeBorder {
    inputActiveBorder(color.success)
  }
}
</style>
