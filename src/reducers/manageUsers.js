export default function manageUsers(
state = {
  users: []
},
action){
  switch(action.type){

    case 'ADD_USER':
      console.log("hello World")
      return {...state, users: state.users.concat(action.user)}
    default:
      console.log("default world")
      return state
  }
}
