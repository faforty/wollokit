<template>
  <div class="ui-spinner" :style="styles">
    <span class="ui-spinner-dot"></span>
    <span class="ui-spinner-dot"></span>
    <span class="ui-spinner-dot"></span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#315efb'
    },
    size: {
      type: String,
      default: '5px'
    }
  },
  computed: {
    styles () {
      return {
        color: this.color,
        'font-size': this.size,
      }
    }
  }
}
</script>

<style lang="stylus">
.ui-spinner {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  color: #315efb;
  margin: 0;
  cursor: auto;
  widows: 2;
  hyphens: none;
  display: inline-block;
  padding: 0;
  tab-size: 8;
  font-size: 5px;

  &:before {
    width: 0;
    height: 100%;
    display: inline-block;
    content: "";
    vertical-align: middle
  }

  & > * {
    vertical-align: middle;
  }
}
.ui-spinner-dot {
  top: -0.4em;
  color: inherit!important;
  width: 1em;
  height: 1em;
  display: inline-block;
  position: relative;
  transform: translate3d(0, 0, 0);
  animation: .6s ease-out;
  background: currentColor;
  transition: transform .6s ease-out;
  border-radius: 50%;
  vertical-align: middle;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  &:nth-child(1) {
    animation-name: ruiAnimateDot1;
  }
  &:nth-child(2) {
    margin: 0 1em;
    animation-name: ruiAnimateDot2;
  }
  &:nth-child(3) {
    animation-name: ruiAnimateDot3;
  }
}

@-webkit-keyframes ruiAnimateDot1 {
  0% {
    transform: scale(1) translate3d(0, 0, 0);
  }
  20% {
    transform: scale(1) translate3d(0, 100%, 0);
  }
  80% {
    transform: scale(1) translate3d(0, 0, 0);
  }
}
@-webkit-keyframes ruiAnimateDot2 {
  13.333333333333334% {
    transform: scale(1) translate3d(0, 0, 0);
  }
  33.333333333333336% {
    transform: scale(1) translate3d(0, 100%, 0);
  }
  93.33333333333333% {
    transform: scale(1) translate3d(0, 0, 0);
  }
}
@-webkit-keyframes ruiAnimateDot3 {
  26.666666666666668% {
    transform: scale(1) translate3d(0, 0, 0);
  }
  46.66666666666667% {
    transform: scale(1) translate3d(0, 100%, 0);
  }
  106.66666666666667% {
    transform: scale(1) translate3d(0, 0, 0);
  }
}
</style>
