interface IAuthentication {
  token:string;
}

const KEY = 'authentication'

const useAuthentication = () =>{ 
    const persistAuthentication = (authentication:IAuthentication) => {
  
      const stringyfiedAuthentication = JSON.stringify(authentication);
  
      localStorage.setItem(KEY, stringyfiedAuthentication);
    }
  
    const retrieveAuthentication = ():IAuthentication | undefined => {
      const stringyfiedAuthentication = localStorage.getItem(KEY);
  
      if(stringyfiedAuthentication){
        const authentication = JSON.parse(stringyfiedAuthentication);
  
        return authentication;
      }
    }
  
    const deleteAuthentication = () => {
      localStorage.removeItem(KEY);
    }
  
    return {persistAuthentication, retrieveAuthentication, deleteAuthentication};
  }
  
  export default useAuthentication;
  
  