import {
    URLService, list_user
} from '../../constants/index'

async function dataService(page) {
    console.log(URLService+list_user+"?page="+page)
    return fetch(URLService+list_user+"?page="+page)
      .then(response => response.json())
      .catch(function(error) {
        console.log('error', error)
      })
   }

   export default dataService;