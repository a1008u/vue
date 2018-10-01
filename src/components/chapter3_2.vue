<template>
  <div>
    <hr />
    <textarea v-model="message"></textarea>
    <pre>{{ message }}</pre>

    <div>
      <label>
        <input type="checkbox" v-model="val"> {{ val }}
      </label>
    </div>

    <div>
      <label><input type="checkbox" v-model="val2" value="A"> A</label>
      <label><input type="checkbox" v-model="val2" value="B"> B</label>
      <label><input type="checkbox" v-model="val2" value="C"> C</label>
      <p>{{ val2 }}</p>
    </div>
    
    <div>
      <label><input type="radio" value="a" v-model="val3"> A</label>
      <label><input type="radio" value="b" v-model="val3"> B</label>
      <label><input type="radio" value="c" v-model="val3"> C</label>
      <p>{{ val3 }}</p>
    </div>

    <div>
      <select v-model="val4">
        <option disabled="disabled">選択してください</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
      <p>{{ val4 }}</p>
    </div>

    <div>
      <select v-model="val5" multiple>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
      <p>{{ val5 }}</p>
    </div>

    <input type="file" @:change="handleChange">
    <div v-if="preview"><img v-bind:src="preview"></div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Vue.js'
      , val: true
      , val2: []
      , val3: ''
      , val4: ''
      , val5: ''
      , preview: ''
    }
  },
  methods: {
     handleChange(event) {
      var file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    }
  }
}
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}
/* opacity:0から1へのフェードイン＆フェードアウト */
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
