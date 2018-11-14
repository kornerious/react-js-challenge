import axios from 'axios';

// Server errors handler
axios.interceptors.response.use(res => res, (error) => {
    console.log(error.message);
});

export function fetchSaveCard(data) {
    return new Promise((resolve, reject) => {
        // axios using example
        axios({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            data: JSON.stringify(data)
        }).then(res => resolve(res))
            .catch(error => reject(error));
    });
}
