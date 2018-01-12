const initialState = {
    user: null, 
    firstName: null,
    lastName: null, 
    gender: null, 
    hairColor: null, 
    eyeColor: null, 
    hobby: null, 
    bdayDay: null, 
    bdayMonth: null, 
    bdayYear: null
}
 
const LOGIN = 'LOGIN';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_GENDER = 'UPDATE_GENDER';
const UPDATE_HAIR_COLOR = 'UPDATE_HAIR_COLOR';
const UPDATE_EYE_COLOR = 'UPDATE_EYE_COLOR';
const UPDATE_HOBBY = 'UPDATE_HOBBY';
const UPDATE_BDAY_DAY = 'UPDATE_BDAY_DAY';
const UPDATE_BDAY_MONTH = 'UPDATE_BDAY_MONTH';
const UPDATE_BDAY_YEAR = 'UPDATE_BDAY_YEAR';
 

export function login (user){
    return {
        type: LOGIN,
        payload: user
    }
}

export function updateFirstName (firstName){
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    }
}
 
export function updateLastName (lastName){
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}
 
export function updateGender (gender){
    return {
        type: UPDATE_GENDER,
        payload: gender
    }
}
 
export function updateHairColor (hairColor){
    return {
        type: UPDATE_HAIR_COLOR,
        payload: hairColor
    }
}
 
export function updateEyeColor (eyeColor){
    return {
        type: UPDATE_EYE_COLOR,
        payload: eyeColor
    }
}
 
export function updateHobby (hobby){
    return {
        type: UPDATE_HOBBY,
        payload: hobby
    }
}
 
export function updateBdayDay (bdayDay){
    return {
        type: UPDATE_BDAY_DAY,
        payload: bdayDay
    }
}
 
export function updateBdayMonth (bdayMonth){
    return {
        type: UPDATE_BDAY_MONTH,
        payload: bdayMonth
    }
}
 
export function updateBdayYear (bdayYear){
    return {
        type: UPDATE_BDAY_YEAR,
        payload: bdayYear
    }
}
 
 

export default (state = initialState, action) => {
    switch (action.type){
        case LOGIN:
            return {...state, user: action.payload}
        case UPDATE_FIRST_NAME:
            return {...state, firstName: action.payload}
        case UPDATE_LAST_NAME:
            return {...state, lastName: action.payload}
        case UPDATE_GENDER:
            return {...state, gender: action.payload}
        case UPDATE_HAIR_COLOR:
            return {...state, hairColor: action.payload}
        case UPDATE_EYE_COLOR:
            return {...state, eyeColor: action.payload}
        case UPDATE_HOBBY:
            return {...state, hobby: action.payload}
        case UPDATE_BDAY_DAY:
            return {...state, bdayDay: action.payload}
        case UPDATE_BDAY_MONTH:
            return {...state, bdayMonth: action.payload}
        case UPDATE_BDAY_DAY:
            return {...state, bdayYear: action.payload}
        default: 
            return state
    }
}