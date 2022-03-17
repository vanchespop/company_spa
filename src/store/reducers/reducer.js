const initialState = JSON.parse(localStorage.getItem('companyList')) || (() => {
    localStorage.setItem('companyList', JSON.stringify([]))
    return JSON.parse(localStorage.getItem('companyList'));
})();

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMPANY':
            const newState = [...state, action.payload]
            localStorage.setItem('companyList', JSON.stringify(newState));
            return newState;
        case 'DELETE_COMPANY':
            return state.filter(company => company.id !== action.payload.id)
        default:
            return state;
    }
}
