export const initialState = {

};

export const reducer = (state = initialState, action) => {
    console.log('action in the reducer: ', action);

    switch(action.type) {
        default:
            return state;        
    }
}