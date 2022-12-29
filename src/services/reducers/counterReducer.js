import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

const initialCounter = {
    count: 10
};
const counterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 10
            };
        default:
            return state;
    }
};

export default counterReducer;