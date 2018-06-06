export const setComputers = (computers) => ({
    type: 'SET_COMPUTERS',
    payload: computers
});
export const fetchComputers = () => ( dispatch => 
    fetch('/computers.json').then(({ data }) => {
        dispatch(setComputers(data));
    })
);