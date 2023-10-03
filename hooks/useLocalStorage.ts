const useLocalStorage = <DataType>(key: string):[(data: DataType)=>void, ()=>DataType|undefined, ()=>void] => {
  const persistData = (data:DataType) => {

    const stringyfiedData = JSON.stringify(data);

    localStorage.setItem(key, stringyfiedData);
  }

  const retrieveData = ():DataType | undefined => {
    const stringyfiedData = localStorage.getItem(key);

    if(stringyfiedData){
      const data = JSON.parse(stringyfiedData);

      return data;
    }
  }

  const deleteData = () => {
    localStorage.removeItem(key);
  }

  return [persistData, retrieveData, deleteData];
}

export default useLocalStorage;