<template>
  <article class="main--body">
    <template v-for="item in content">
      <template v-if="item.type == 'image'">
        <p>
          <img :src="item.data.original.url">
        </p>
      </template>
      <template v-else>
        <p v-html="item.data"></p>
      </template>
    </template>
  </article>
</template>
<script>
  export default {
    name: 'main-body',
    props: [
      'content'
    ]
  }
</script>
<style scoped>
  .main--body {
    color: red;
  }
</style>
