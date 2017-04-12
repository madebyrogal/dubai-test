
class Client {
    getBrokers = function() {
        return fetch('./data.json', {
            method: 'GET'
        });
    }
}

export default new Client();
    