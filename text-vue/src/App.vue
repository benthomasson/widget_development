<template>
<body ontouchmove="BlockMove(event);">
    <div id="app"></div>
</body>
</template>

<script>
// To be called when there's a move event on the body itself:
function BlockMove(event) {
 // Tell Safari not to move the window.
 event.preventDefault() ;
}

export default {
  name: 'app',
  BlockMove: BlockMove
}
</script>

<style>
body {
 margin: 0px ;
 padding: 0px ;
 background-color: yellow;
 color: #212121 ;
 font-family: Helvetica ;
 font-size: 14px ;
}
</style>
