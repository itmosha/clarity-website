const isLoggedReducer = (state: boolean = false, action: any) => {
    switch (action.type) {
        case 'LOG_IN': 
            return true;
        case 'LOG_OUT':
            return false;
        default:
            return state;
    }
}

export default isLoggedReducer;