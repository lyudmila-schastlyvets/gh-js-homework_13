import update from 'immutability-helper'

let defaultState = {
    user: {
        'name': '',
        'email': '',
        'phone': '',
        'address': '',
        'postcode': '',
        'dateofbirth': null
    }
}

const main = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_STATE_PROPS':
            console.log('data in reducer', action.state)
            return update(state, {
                [action.state.prop]: {$set: action.state.value}
            })
        default:
            return state
    }
}

export default main
