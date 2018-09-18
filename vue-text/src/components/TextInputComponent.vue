<template>
  <g v-bind:transform="transform">
    <g> <!-- text box -->
      <rect x=0 y=0 v-bind:width="text_width" height=20 class="XUI__text_input_box" rx=2>
      </rect>
    </g> <!-- end text box -->
    <g v-if="text_selected"> <!-- selection -->
      <rect x=0 y=0 v-bind:width="text_width" height=20 class="XUI__text_input_box__selected2" rx=4>
      </rect>
      <rect x=0 y=0 v-bind:width="text_width" height=20 class="XUI__text_input_box__selected1" rx=4>
      </rect>
    </g> <!-- end selection -->
    <g v-if="text_selected"> <!-- text_selected -->
      <rect x=2 y=2 v-bind:width="text_cursor_pos" height=16 class="XUI__text_input_text__selected">
      </rect>
    </g> <!-- end text_selection -->
    <g v-if="text_show_cursor"> <!-- cursor -->
      <line v-bind:x1="text_cursor_pos" v-bind:x2="text_cursor_pos" y1=2 y2=18 class="XUI__text_input_cursor"></line>
    </g> <!-- end cursor -->
    <text v-bind:id="text_text_id" x=5 y=15 class="XUI__text_input">{{text_value}}</text>
  </g>
</template>
<script>
export default {
  name: 'TextInputComponent',
  props: ['transform'],
  data: function () {
    return {
      text_width: 100,
      text_show_cursor: true,
      text_selected: true,
      text_cursor_pos: 75,
      text_text_id: 'input_1',
      text_value: 'Hello there'
    }
  }
}
</script>
<style lang='less'>

@selected1: #79b7fd;
@selected2: #c7e1fe;
@selected: #a9d2fe;
@light: #ffffff;
@dark: #707070;

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
