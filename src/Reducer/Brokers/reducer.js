import * as CONST from './consts';

export default function brokers(state = null, action) {
        
    if (action.type === CONST.GET_BROKERS) {
        return {
            ...action.data,
        }
    }

    return state;
}