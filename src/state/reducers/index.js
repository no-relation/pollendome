export const reducer = function (currentState, action) {
    const newState = { ...currentState }

    switch (action.type) {
        case 'VALUE':
            return newState
            break;
    
        default:
            return newState
            break;
    }
}