export const state = () => ({

})

export const actions = {
  SOCKET_newMessage({commmit}, data) {
    console.log('Message received', data)
  }
}