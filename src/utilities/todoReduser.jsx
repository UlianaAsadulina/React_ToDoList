function todoReducer (state, { type, payload: { todoText } }) {
    switch (type) {
      case ACTIONS.add: {
        console.log(todoText);

        // if (txt === "") {
        //   return state;
        // } else 
        return [{ txt: todoText }, ...state];
      }

      case ACTIONS.delete: {
        return state.filter((s) => s.name !== todoText);
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