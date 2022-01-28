const initialState = {
    user: {
        "id": 13,
        "first_name": "Syed Umer",
        "last_name": "Fayyaz",
        "email": "umer@yopmail.com",
        "phone": "213213213",
        "permissions": null,
        "last_login": "2021-12-22T11:49:01.000000Z",
        "created_at": "2021-12-17T18:27:42.000000Z",
        "updated_at": "2021-12-22T11:49:01.000000Z"
    },
    token: "",
    language: 'en',
    authFromOtherActivity: false,
    playerId: "",
    isLoggedIn: false,
    settings: {
        "general": {
            "supported_countries": [
                "SA",
                "AE"
            ],
            "default_country": "AE",
            "supported_locales": [
                "ar",
                "en"
            ],
            "default_locale": "en",
            "default_timezone": "UTC",
            "customer_role": "2",
            "store": {
                "store_name": "Asia Mobile Phone",
                "store_tagline": "اسيا للهواتف المتحركة - ASIA MOBILE PHONES",
                "store_email": "admin@ampllc.com",
                "store_phone": "009713766658",
                "store_address_1": "Ali Bin Abi Taleb St, Central District",
                "store_address_2": null,
                "store_city": "Abu Dhabi",
                "store_country": "AE",
                "store_state": null,
                "store_zip": null
            },
            "currency": {
                "supported_currencies": [
                    "AED"
                ],
                "default_currency": "AED",
                "currency_rate_exchange_service": null
            },
            "enabled_countries": {
                "SA": "Saudi Arabia",
                "AE": "United Arab Emirates"
            },
            "payment_gateways": {
                "cod": {
                    "label": "Cash On Delivery",
                    "description": "Pay with cash upon delivery."
                }
            },
            "termsPageURL": "#"
        }
    },
    products: [],
    categories: []
};

const globalState = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                token: "",
                isLoggedIn: false
            }
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload
            }
        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "SET_SETTINGS":
            return {
                ...state,
                settings: action.payload
            }
        case "SET_LOGIN":
            return {
                ...state,
                isLoggedIn: true
            }
        case "SET_PLAYERID":
            return {
                ...state,
                playerId: action.payload
            }
        case "SET_AUTH_FROM":
            return {
                ...state,
                authFromOtherActivity: action.payload
            }
        default:
            return state
    }
}

export default globalState;