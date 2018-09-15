const  firstState = {
    number: 0,
    actionText: 'TO DO'
}

export default (state = firstState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                number: state.number+1,
                actionText: 'ADD'
            }

        case 'SUB':
            return {
                ...state,
                number: state.number-1,
                actionText: 'SUB'
            }
    
        default:
           return state;
    }
}





