// Action Suite

export const ADD_FEATURE = "ADD_FEATURE"; // action type
export const REMOVE_FEATURE = "REMOVE_FEATURE"; // action type

export const addFeature = (feature) => { // action creator
    console.log('addFeature action creator called');

    return { // action (action object)
        type: ADD_FEATURE,
        payload: feature
    }
};

export const removeFeature = (id) => { // action creator
    console.log('removeFeature action creator called');

    return { // action (action object)
        type: REMOVE_FEATURE,
        payload: id
    };
};

