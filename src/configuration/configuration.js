import axios from 'axios';

export function configuration(data) {
    console.log("in axios func--->",data);

      return axios({
            method: 'POST',
            url: 'http://localhost:4000/enterValue',
            data: data
        })
}

export function getUnitType() {
    console.log("in axios");

    return axios({
        method: 'GET',
        url: 'http://localhost:3000/find',
    }).then(response => {
        console.log("success", response.data);
    }).catch(err => {
        console.log("something went wrong in axios function", err);
    });

}

export function getKeys(){
    return axios({
        method: 'GET',
        url: 'http://localhost:3000/findAll',
    }).then(response => {
        console.log("success",response.data);
    }).catch(err => {
        console.log("Something went wrong",err);
        
    })
}


// export default configuration;
// export default getUnitBasicUnitType