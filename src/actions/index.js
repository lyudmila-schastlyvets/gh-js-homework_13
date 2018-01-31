export const changeStateProps = (prop, value) => {
    console.log('action triggered', value)
    return {
        type: 'CHANGE_STATE_PROPS',
        state: {
            prop,
            value
        }
    }
}
