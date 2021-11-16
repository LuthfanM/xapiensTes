import {
    URLService, login
} from '../../constants/index'

async function loginService(credentials) {
    return fetch(URLService+login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .catch(function(error) {
        console.log('error', error)
      })
   }

   export default loginService;