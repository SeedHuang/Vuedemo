<template>
  <div id="app">
    <h1>[Test data]</h1>
    <div>{{message}}</div>
    <h1>[Test v-pre]</h1>
    <div v-pre>{{this is not compile}}</div>
    <h1>[Test v-html]</h1>
    <div v-html="testHTML"></div>
    <h1>[Test v-bind]</h1>
    <a v-bind:href="link">This is a test href</a>
    <h1>[Test v-if v-else-if v-else]</h1>
    <div v-if="maxAge > 100">Max Age is greater than 100</div>
    <div v-else-if="maxAge == 100">Max Age is equal to 100</div>
    <div v-else="maxAge < 100">Max Age is less than 100</div>
    <h1>[Test filter group]</h1>
    <div class="filterClass">{{message | filterA}}</div>
    <h1>[Test computed group]</h1>
    <div class="computed">{{Message}}</div>
    <Test/>
    <h1>[Test watch]</h1>
    <input v-model="question">
    <h1>[Test Click]</h1>
    <button @click="clickMe">Click me</button>
    <div class="testbindclass" v-bind:class="classObject">Test bind class</div>
  </div>
</template>

<script>
import Test from './components/Test'
var tvm = {
  name: 'app',
  data () {
      return {
          testHTML: "<h2>This is a test h2</h2>",
          message: "this is test",
          isDisabled: true,
          message2: "This is message",
          question: "This is my first question",
          classObject: {
              isActive: false,
              hasClick: true
          },
          link: "https://www.baidu.com",
          maxAge:100
      }
  },
  watch: {
      question (newQuestion) {
          this.question = newQuestion;
          var self = this;
          setTimeout(function(){
              self.question = 'aaa ' + newQuestion;
          },2000);
      }
  },
  filters: {
     filterA (value) {
         console.log('................',value, '................');
         return value + '123123123'
     }
  },
  computed: {//如果使用带尖头的函数生命，this指向的的VUE实例，
    Message () {
        console.log(this)
        return this.message2 + "from computed";
    }
  },
  components: {
      Test
  },
  methods: {
      clickMe: function (){
          alert("Shit");
      }
  }
}

window.etv = tvm;

export default tvm;
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.testbindclass {
    width:80%;
    height:50px;
    border:1px solid red;
    margin:0 auto;
    line-height: 50px;
    color: red;
}

.isActive {
    color: blue;
}

.hasClick {
    color: yellow;
    font-weight: bolder;
}
</style>
