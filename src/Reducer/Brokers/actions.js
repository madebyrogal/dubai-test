import * as CONST from './consts';
import Client from './../../Module/Client/Client';

const getBrokersCreator = (data) => ({
    type: CONST.GET_BROKERS,
    data: data
});

export const getBrokers = () => function (dispatch, getState) {
    Client.getBrokers().then(response => {
        response.json().then(fileData => {
            return dispatch(getBrokersCreator(fileData.data));
        });
    });
    
};
