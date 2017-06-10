<template>
  <article class="loadingpage">
    <div class="loadingicon">
      <span class="loading--content">Loading Now...</span>
    </div>
  </article>
</template>
<style scoped>
  .loadingpage {
    position: fixed;
    left: 0;
    right: 0;
    height: 0;
    width: 0;
    z-index: 99
  }

  .loadingicon {
    position: absolute;
    transform: translateX(50%) translateY(50%);
    left: -50%;
    top: -50%
  }
</style>
