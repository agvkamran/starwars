const types = {
    GET_FIRST_DATA_PEOPLE: 'GET_FIRST_DATA_PEOPLE',
    GET_INFO_PERSON: 'GET_INFO_PERSON'
}

export const getFirstDataPeopleAC = (payload) => ({
    type: types.GET_FIRST_DATA_PEOPLE, payload
})

export const getInfoPersonAC = (payload) => ({
    type: types.GET_INFO_PERSON, payload
})

