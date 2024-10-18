export const setProductListAction = { productList: iProductList } => {
    return {
        type: "SET_PRODUCT_LIST",
        payload: productList
    };
};