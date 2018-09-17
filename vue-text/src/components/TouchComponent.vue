<template>
    <circle v-bind:cx="touch_x" v-bind:cy="touch_y" r=50 class="XUI__touch"></circle>
</template>
<script>
export default {
  name: 'CursorComponent',
  props: ['touch_x', 'touch_y']
}
</script>
<style lang="less">
@copynot: rgb(77,200,242);

.XUI__touch {
    fill: none;
    stroke: @copynot;
}
</style>
