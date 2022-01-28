const setUser = (userObj) => {
    return {
        type: "SET_USER",
        payload: userObj
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const setLanguageInGlobalState = (language) => {
    return {
        type: "SET_LANGUAGE",
        payload: language
    }
}

export const products = (products) => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}

export const categories = (categories) => {
    return {
        type: "SET_CATEGORIES",
        payload: categories
    }
}

export const setSettings = (settings) => {
    return {
        type: "SET_SETTINGS",
        payload: settings
    }
}

export const setLogin = (settings) => {
    return {
        type: "SET_LOGIN",
    }
}

export const setPlayerId = (playerId) => {
    return {
        type: "SET_PLAYERID",
        payload: playerId
    }
}

export const setAuthFromOtherActivity = (bool) => {
    return {
        type: "SET_AUTH_FROM",
        payload: bool || true
    }
}



export {
    setUser,
    logOut,
}