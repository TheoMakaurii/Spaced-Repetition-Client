import config from '../config'
import TokenService from './token-service'

const FlashCardService ={

    getYourCards(getCards){

      
         return fetch(`${config.API_ENDPOINT}/language/`,  {  
         
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                  },
                    })
            .then((results) => {
              if (!results.ok)
                return results.json().then(e => Promise.reject(e));
                return results.json(); 
            })
            .then((cards)=>{
            console.log(cards.words)

             getCards(cards.words)
            
            })
            .catch(error => {
              console.log({error});
            });
          },
}

export default FlashCardService;