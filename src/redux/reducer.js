const testReducer = (data = {}, action) => {
  switch (action.type) {
    case "SET_VALUE":
      console.log(action);
      return action.data;
    default:
      return data;
  }
};

export default testReducer;
