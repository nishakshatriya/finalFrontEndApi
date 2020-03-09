import axios from 'axios';

module.exports = {
    getConversion() {
        console.log("in axios func--->");

        return axios({
            method: 'GET',
            url: 'http:/localhost:3000/enterValue',
            // data: object
        }).then(response => {
            console.log("success  ", response.data);

        }).catch(err => {
            console.log("something went wrong  ", err);
        });

    },

    getUnitBasicUnitType() {
        console.log("in axios");

        return axios({
            method: 'GET',
            url: 'http/localhost:3000/find',
        }).then(response => {
            console.log("success", response.data);
        }).catch(err => {
            console.log("something went wrong in axios function", err);
        });

    }
}