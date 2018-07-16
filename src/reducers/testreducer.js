const initial_state = 'Hello Braw!' //ini jalan kalau statenya null, dia jalan pertamakali sebagai default value

export default (state = initial_state, action) => {
    switch(action.type){
        case 'gantitest':
            return action.payload;
        default:
            return state;
    }
}