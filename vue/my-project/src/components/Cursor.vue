<template>
    <g v-bind:transform="transform">
        <line x1="-15" y1="0" x2="15" y2="0" class="XUI__cursor"/>
        <line x1="0" y1="-15" x2="0" y2="15" class="XUI__cursor"/>
    </g>
</template>
<script>
export default {
  name: 'Cursor',
  props: ['transform']
}
</script>
<style lang="less">

@copynot: rgb(77,200,242);

.XUI {
    background-color: #ffffff;
    /*cursor: none;*/
}

.XUI__cursor {
    fill: none;
    stroke: @copynot;
}
</style>
