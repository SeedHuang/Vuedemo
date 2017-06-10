<template>
  <div class="page">
    <template v-if="data && data.errno == 0">
      <ArticleTitle v-bind:title="data.data.title"></ArticleTitle>
      <MainBody v-bind:content="data.data.content"></MainBody>
    </template>
    <template v-else>
      <LoadingPage></LoadingPage>
    </template>
  </div>
</template>
<script>
  import Ajax from '../utils/Ajax';
  import LoadingPage from './LoadingPage';
  import ArticleTitle from './Title';
  import MainBody from './MainBody';
  export default {
    name: "page",
    data() {
      let self = this;
      Ajax.get('http://mbrowser.baidu.com/api/mtoutiao/rssfeed/feedtext', {
        'nid': 'news_4006940189695625389',
        'sid': 'TT%257Czonghe',
        'src': 'http%253A%252F%252Fwww.yidianzixun.com%252Farticle%252F0Ek8SAXy%253Fs%253Dmb'
      }).then((result) => {
        self.data = result;
      });
      return {
        data: null
      }
    },
    components: {
      LoadingPage,
      ArticleTitle,
      MainBody
    }
  }
</script>
<style scoped>
  .page {
    width: 100%
  }
</style>
