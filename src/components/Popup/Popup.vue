<template>
  <div style="position: absolute; z-index: 999" v-if="isOpen">
    <div :class="[
      'ui-popup-backdrop',
      { 'ui-popup-backdrop_visible': isShow }
      ]">
      <div class="ui-popup-box">
        <button class="ui-popup-box-close" @click="close">
          <icon name="close" width="15px" height="15px"></icon>
        </button>
        <header class="ui-popup-box-title">{{title}}</header>
        <slot />
        <footer class="ui-popup-box-buttons">
          <slot name="buttons" v-bind:actions="actions" />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import '@/icons/close'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isOpened (isOpen) {
      this.toggleScroll()
      this.isOpen = isOpen
    },
    isOpen (isOpen) {
      if (isOpen) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.isShow = true
        }, 10)
      }
    }
  },
  data: () => ({
    isShow: false,
    isOpen: false
  }),
  methods: {
    close () {
      this.isShow = false

      setTimeout(() => {
        this.$emit('close-modal')
        this.isOpen = false
      }, 150)
    },
    onKeyDown (event) {
      if (event.keyCode === 27) this.close()
    },
    toggleScroll () {
      if (document.body.style.overflow === 'hidden') {
        return document.body.style.overflow = ''
      }

      document.body.style.overflow = 'hidden'
    }
  },
  computed: {
    actions () {
      return {
        close: this.close
      }
    }
  },
  mounted () {
    window.addEventListener('keydown', this.onKeyDown)
  }
}
</script>

<style lang="stylus">
@import '~ui/Theme/Color'

.ui-popup-backdrop {
  background-color rgba(0, 0, 0, 0.80)
  top 0
  left 0
  right 0
  margin 0
  margin-top -15px
  widows 2
  bottom 0
  opacity 0
  padding 20px 0
  hyphens none
  position fixed
  tab-size 8
  text-align center
  overflow-y auto
  visibility visible
  overflow-x hidden
  transition-duration 200ms
  transition-property margin-top, opacity

  @media (max-width 426px) {
    padding 0
  }

  & > * {
    vertical-align middle
  }

  &:before {
    width 0
    height 100%
    display inline-block
    content ""
    vertical-align middle
  }

  &_visible {
    margin-top 0
    opacity 1
  }
}
.ui-popup-box {
  display inline-block
  padding 25px
  position relative
  font-size 13px
  min-width calc(100%-20px)
  box-shadow -2px 2px 10px 0 rgba(102, 116, 166, 0.2)
  box-sizing border-box
  text-align left
  margin-left 10px
  line-height 20px
  margin-right 10px
  border-radius 1px
  background-color #fff

  @media (min-device-width 768px) {
    min-width 350px
  }
  @media (max-width 426px) {
    margin 0
    height 100vh
    width 100%
  }
}
.ui-popup-box-title {
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
  margin-bottom: 20px;
  padding-right: 25px;
}
.ui-popup-box-close {
  top: 25px;
  width: 15px;
  right: 25px;
  color: #262626;
  margin: 0;
  cursor: pointer;
  border: 0;
  height: 15px;
  outline: 0;
  padding: 0;
  position: absolute;
  background: transparent;

  &:hover > svg {
    fill: color.primary
  }
}
.ui-popup-box-buttons {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}
</style>
