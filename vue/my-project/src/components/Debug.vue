<template>
<g>
    <text x="400" y="400" class="XUI__debug_text">Cursor: {{cursor_pos_x}} {{cursor_pos_y}}</text>
</g>
</template>
<script>
export default {
  name: 'Debug',
  props: ['cursor_pos_x', 'cursor_pos_y']
}
</script>
<style lang="less">
@copynot: rgb(77,200,242);

.XUI__debug_text {
    fill: @copynot;
    stroke: none;
}
</style>
