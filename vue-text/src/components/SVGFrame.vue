<template>
  <div class="hello">
    <svg id="frame"
         class="XUI"
         v-bind:height="frame_height"
         v-bind:width="frame_width"
         v-on:mousedown="onMouseDown"
         v-on:mouseup="onMouseUp"
         v-on:mouseenter="onMouseEnter"
         v-on:mouseleave="onMouseLeave"
         v-on:mousemove="onMouseMove"
         v-on:mouseover="onMouseOver"
         v-on:touchstart="onTouchStart"
         v-on:touchmove="onTouchMove"
         v-on:touchend="onTouchEnd"
         v-on:tap="onTap"
         v-on:wheel="onMouseWheel">
        <debug-component v-bind:cursor_pos_x="cursor_pos_x"
                         v-bind:cursor_pos_y="cursor_pos_y"
                         v-bind:last_key="last_key"
                         v-bind:frame_number="frame_number"></debug-component>
        <cursor-component v-bind:transform="transform"></cursor-component>
        <touch-component v-for="(touch, index) in touches"
                         v-bind:touch_x="touch.x"
                         v-bind:touch_y="touch.y"
                         v-bind:index="index"
                         v-bind:key="touch.i"></touch-component>
        <text-input-component v-bind:transform="input_transform"></text-input-component>
    </svg>
  </div>
</template>

<script>
import DebugComponent from '@/components/DebugComponent'
import CursorComponent from '@/components/CursorComponent'
import TouchComponent from '@/components/TouchComponent'
import TextInputComponent from '@/components/TextInputComponent'
// import fsm from '@/fsm'
// import util from '@/util'
export default {
  name: 'SVGFrame',
  components: {
    DebugComponent,
    CursorComponent,
    TouchComponent,
    TextInputComponent
  },
  data: function () {
    return {
      transform: 'translate(100,100)',
      input_transform: 'translate(100,120)',
      cursor_pos_x: {},
      cursor_pos_y: {},
      touches: [],
      last_key: '',
      frame_number: 0,
      frame_height: window.innerHeight,
      frame_width: window.innerWidth
    }
  },
  methods: {
    update_cursor: function () {
      this.transform = 'translate(' + this.cursor_pos_x + ',' + this.cursor_pos_y + ')'
    },
    onMouseDown: function (event) {
      console.log(['onMouseDown', event])
      this.cursor_pos_x = event.x
      this.cursor_pos_y = event.y
      this.update_cursor()
      event.preventDefault()
    },
    onMouseUp: function (event) {
      console.log(['onMouseUp', event])
      this.cursor_pos_x = event.x
      this.cursor_pos_y = event.y
      this.update_cursor()
      event.preventDefault()
    },
    onMouseEnter: function (event) {
      console.log(['onMouseEnter', event])
      event.preventDefault()
    },
    onMouseLeave: function (event) {
      console.log(['onMouseLeave', event])
      event.preventDefault()
    },
    onMouseMove: function (event) {
      console.log(['onMouseMove', event])
      console.log(this)
      this.cursor_pos_x = event.x
      this.cursor_pos_y = event.y
      this.update_cursor()
      event.preventDefault()
    },
    onMouseOver: function (event) {
      console.log(['onMouseOver', event])
      event.preventDefault()
    },
    onTouchStart: function (event) {
      console.log(['onTouchStart', event])
      var touches = []
      var i = 0
      if (event.touches.length === 1) {
        this.cursor_pos_x = event.touches[0].screenX
        this.cursor_pos_y = event.touches[0].screenY
        this.update_cursor()
      }
      for (i = 0; i < event.touches.length; i++) {
        touches.push({x: event.touches[i].screenX, y: event.touches[i].screenY, i: i})
      }
      this.touches = touches
      event.preventDefault()
    },
    onTouchEnd: function (event) {
      console.log(['onTouchEnd', event])
      event.preventDefault()
    },
    onTouchMove: function (event) {
      console.log(['onTouchMove', event])
      var touches = []
      var i = 0
      if (event.touches.length === 1) {
        this.cursor_pos_x = event.touches[0].screenX
        this.cursor_pos_y = event.touches[0].screenY
        this.update_cursor()
      }
      for (i = 0; i < event.touches.length; i++) {
        touches.push({x: event.touches[i].screenX, y: event.touches[i].screenY, i: i})
      }
      this.touches = touches
      event.preventDefault()
    },
    onTap: function (event) {
      console.log(['onTap', event])
      event.preventDefault()
    },
    onMouseWheel: function (event) {
      console.log(['onMouseWheel', event])
      event.preventDefault()
    },
    onResize: function () {
      this.frame_height = window.innerHeight
      this.frame_width = window.innerWidth
      console.log([this.frame_width, this.frame_height])
    },
    onKeyDown: function (event) {
      this.last_key = event.key
      console.log(event)
      event.preventDefault()
    },
    startInterval: function () {
      const self = this
      setInterval(function () {
        self.frame_number = Math.floor(window.performance.now())
      }, 17)
    },
    init: function () {
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.onResize)
    document.addEventListener('keydown', this.onKeyDown)
    this.startInterval()
    this.init()
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/* Copyright (c) 2017 Ben Thomasson */

@background: #ffffff;
@copynot: rgb(77,200,242);
@selected1: #79b7fd;
@selected2: #c7e1fe;
@selected: #a9d2fe;
@light: #ffffff;
@dark: #707070;

svg {
    shape-rendering: geometricPrecision;
}

.XUI {
    background-color: #ffffff;
    /*cursor: none;*/
}

.XUI__cursor {
    fill: none;
    stroke: @copynot;
}

.XUI__touch {
    fill: none;
    stroke: @copynot;
}

.XUI__debug {
    fill: none;
    stroke: @copynot;
}

.XUI__debug_text {
    fill: @copynot;
    stroke: none;
}

.XUI__text_input_box {
    fill: none;
    stroke: @dark;
    stroke-width: 1;
}

.XUI__text_input_cursor {
    fill: none;
    stroke: @dark;
    stroke-width: 1;
}

.XUI__text_input_box__selected1 {
    fill: none;
    stroke: @selected1;
    stroke-width: 3;
}

.XUI__text_input_box__selected2 {
    fill: none;
    stroke: @selected2;
    stroke-width: 6;
}

.XUI__text_input_text__selected {
    fill: @selected;
    stroke: none;
}

.XUI__text_input {
    fill: @dark;
    stroke: none;
}
</style>
