module.exports = {
    getRequest(location, callback) {
        fetch(location)
        .then(function(response) {
            return response.json();
        })
        .then(response => callback(response))
        .catch(function(error) {
            console.error(error);
        });
    }
};