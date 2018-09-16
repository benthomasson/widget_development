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
                         v-bind:cursor_pos_y="cursor_pos_y"></debug-component>
        <cursor-component v-bind:transform="transform"></cursor-component>
    </svg>
  </div>
</template>

<script>
import DebugComponent from './Debug'
import CursorComponent from './Cursor'
export default {
  name: 'HelloWorld',
  components: {
    DebugComponent,
    CursorComponent
  },
  data: function () {
    return {
      transform: 'translate(100,100)',
      cursor_pos_x: {},
      cursor_pos_y: {},
      frame_height: window.innerHeight,
      frame_width: window.innerWidth
    }
  },
  methods: {
    onMouseDown: function (event) {
      console.log(['onMouseDown', event])
      this.cursor_pos_x = event.x
      this.cursor_pos_y = event.y
      event.preventDefault()
    },
    onMouseUp: function (event) {
      console.log(['onMouseUp', event])
      this.cursor_pos_x = event.x
      this.cursor_pos_y = event.y
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
      this.transform = 'translate(' + this.cursor_pos_x + ',' + this.cursor_pos_y + ')'
      event.preventDefault()
    },
    onMouseOver: function (event) {
      console.log(['onMouseOver', event])
      event.preventDefault()
    },
    onTouchStart: function (event) {
      console.log(['onTouchStart', event])
      event.preventDefault()
    },
    onTouchEnd: function (event) {
      console.log(['onTouchEnd', event])
      event.preventDefault()
    },
    onTouchMove: function (event) {
      console.log(['onTouchMove', event])
      event.preventDefault()
    },
    onTap: function (event) {
      console.log(['onTap', event])
      event.preventDefault()
    },
    onMouseWheel: function (event) {
      console.log(['onMouseWheel', event])
      event.preventDefault()
    }
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
