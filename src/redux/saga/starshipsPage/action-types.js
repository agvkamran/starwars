const types = {
    GET_FIRST_DATA_STARSHIPS: 'GET_FIRST_DATA_STARSHIPS',
    GET_INFO_STARSHIP: 'GET_INFO_STARSHIP'
}

export const getFirstDataStarshipsAC = (payload) => ({
    type: types.GET_FIRST_DATA_STARSHIPS, payload
})

export const getInfoStarshipAC = (payload) => ({
    type: types.GET_INFO_STARSHIP, payload
})

