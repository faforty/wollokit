<template>
  <button :class="classes">
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'flat'
    },
    block: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        'ui-button',
        {
          'ui-button_primary': this.type === 'primary',
          'ui-button_danger': this.type === 'danger',
          'ui-button_secondary': this.type === 'secondary',
          'ui-button_outline': this.type === 'outline',
          'ui-button_flat': this.type === 'flat',
          'ui-button_block': this.block === true,
          'ui-button_small': this.small === true
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~ui/Theme/Color'

.ui-button {
  cursor pointer
  widows 2
  margin 0
  border none
  outline none !important
  display inline-block
  padding 0
  hyphens none
  tab-size 8
  position relative
  font-size 11px
  direction ltr
  box-sizing border-box
  list-style disc outside none
  text-align center
  visibility visible
  user-select none
  line-height normal
  empty-cells show
  font-family Roboto, sans-serif
  text-indent 0
  text-shadow none
  white-space normal
  font-weight 500
  word-spacing normal
  font-stretch normal
  font-variant normal
  caption-side top
  border-radius 1px
  text-transform uppercase
  border-spacing 0
  letter-spacing 1.3px
  vertical-align baseline
  border-collapse separate
  text-align-last auto
  text-decoration none !important
  transition background-color .2s, border .2s, box-shadow .2s

  & + & {
    margin-left 20px
  }

  & > span {
    display block
    padding 0 20px
    overflow hidden
    position relative
    white-space nowrap
    text-overflow ellipsis
    -webkit-font-smoothing antialiased;
    -moz-osx-font-smoothing grayscale
    height 45px
    line-height 45px
  }

  &_block {
    width 100%
  }

  &_small {
    font-size 11px

    & > span {
      height 35px
      line-height 35px
    }
  }

  &_primary {
    background-color: color.primary

    &:hover {
      background-color: darken(color.primaryDark, 0%)
    }
    &:active {
      background-color: darken(color.primaryDark, 10%)
    }
  }
  &_danger {
    background-color: color.danger
  }
  &_secondary {
    background-color #f5f7f8
  }
  // &_outline {
  //   box-shadow inset 0 0 0 1px #dcdfe7
  //
  //   &:hover {
  //     box-shadow inset 0 0 0 1px color-dark-yellow
  //     color color-purple-yellow
  //   }
  // }
  &_flat:hover {
    background-color #f5f7f8
    color: color.primary
  }
  &_flat:active {
    color: color.primaryDark
  }
  &_outline
  &_flat {
    background-color transparent
  }
  &_primary
  &_danger {
    color #ffffff
  }
  &_secondary
  &_outline
  &_flat {
    color color-dark
  }
}
</style>
