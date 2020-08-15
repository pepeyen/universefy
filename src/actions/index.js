export const setAuthValues = (authValues) => {
    return {
        type: 'SET_AUTH_VALUES',
        authValues: authValues
    }
};

export const setRecommendations = (tracks) => {
    return {
        type: 'SET_RECOMMENDATIONS',
        recommendations: tracks
    }
};