<template>
<div>
  <p></p>
  <button @click="change">点击改变内容</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'test'
    }
  },

  methods: {
    test () {
      console.log('hello world')
    },

    change () {
      this.name = 'ok'
    }
  }
}
</script>

<style>
</style>
