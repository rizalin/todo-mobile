import { GET_TODOS, DATA_LOADING } from "../_config/const";

const initialState = {
    data: [],
    isLoading: true,
    isPost: false
};

export const Todos = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isPost: false
            };

        case DATA_LOADING:
            return {
                ...state,
                isLoading: true
            };

        default:
            return state;
    }
};
