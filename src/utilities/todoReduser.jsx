function todoReducer (state, { type, payload: { text, finished } }) {
    switch (type) {
      case ACTIONS.add: {
        console.log("New:"+text);

        if (text !== "") {
          return [{ txt: text, finished: false }, ...state];          
        } else return state;
        
      }

      case ACTIONS.check: {
        console.log("Is this finished "+finished);
        let newList = [...state];
        console.log("Text from check:"+text);
        const isEdit = (element) => element.txt === text;
        const index = newList.findIndex(isEdit);
        console.log(index);
        newList.splice(index,1, {txt: text, finished: !finished});
        return newList;
        

      }

      case ACTIONS.edit: {

      }

      case ACTIONS.delete: {
        return state.filter((s) => s.txt !== text);
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
  };
  

  export { todoReducer, ACTIONS };