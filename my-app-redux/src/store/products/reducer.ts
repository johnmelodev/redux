const PRODUCT_INITIAL_STATE = {
    productList: []
  };
  
  const productReducer = (state = PRODUCT_INITIAL_STATE, action) => {
    switch(action.type) {
      case "ACTION_TYPE": // Substitua "ACTION_TYPE" pelo tipo de ação real
        // Implemente a lógica para lidar com a ação aqui
        return {
          ...state,
          // Atualize o estado conforme necessário
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  