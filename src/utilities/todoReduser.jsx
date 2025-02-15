function todoReducer (state, { type, payload: { text, finished, editing } }) {
    
  const curent = (element) => element.txt === text; 
  let index = state.findIndex(curent);  
  console.log("Index: "+index);
  let newList = [...state];
  
    switch (type) {
      case ACTIONS.add: {
        if (text !== "") {
          return [{ txt: text, finished: false, editing: false }, ...state];          
        } else return state;
        
      }

      case ACTIONS.check: { 
        newList.splice(index,1, {txt: text, finished: !finished, editing: false});
        return newList;
      }

      case ACTIONS.edit: {        
        newList.splice(index,1, {txt: text, finished: finished, editing: !editing});
        return newList

      }

      case ACTIONS.delete: {
        return state.filter((s) => s.txt !== text);
      }

      case ACTIONS.update: {
        console.log("Update "+index);
        console.log("New text "+text)
        const isEdit = (element) => element.editing === true;
        index = state.findIndex(isEdit); 
        newList.splice(index,1, {txt: text, finished: false, editing: false});
        return newList 

      }
      
      default: {
        throw Error("Unknown Action: " + type);
      }
    }
  }

  const ACTIONS = {
    add: 'add',
    check: 'check',
    delete: 'delete',
    edit: 'edit',
    update: 'update'
  };
  

  export { todoReducer, ACTIONS };