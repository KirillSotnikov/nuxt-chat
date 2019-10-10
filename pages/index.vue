<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-text-field
        label="Your message"
        v-model="text"
      ></v-text-field>
      <v-btn 
        :loading="loadingBoolean"
        @click="message">
        NEW MESSAGE
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>


export default {
  data() {
    return {
      text: '',
      loadingBoolean: false
    }
  },
  components: {
    
  },
  methods: {
    message() {
      let data = {
        text: this.text
      }
      this.$socket.emit('createMessage', data)
    }
  },
  sockets: {
    connect() {
      console.log('Client IO connected')
    }
  }
}
</script>
