<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Hvue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{position: relative;display:inline-block;
	background-color: #193d63;    color: #8fd0c4;
	margin-top: -4px;
	height:86%;
	height:calc(100% - 94px);
	height:-webkit-calc(100% - 94px);
	height:-moz-calc(100% - 94px);
	width: 75%;
	width: calc(100% - 180px);
	width: -webkit-calc(100% - 180px);
	width: -moz-calc(100% - 180px);
	overflow: hidden;
	position: relative;
    float: left;}
	h3 {
	  margin: 40px 0 0;
	}
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
	  display: inline-block;
	  margin: 0 10px;
	}
	a {
	  color: #42b983;
	}
</style>
