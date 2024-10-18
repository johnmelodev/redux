interface iProduct {
  id: string
  title: string
  price: number
  image_key: string
  isPromotion: boolean
  category: string
  quantity: number
  };

type iProductList = iProduct[]

interface iAction {
  type: string;
  payload: any;
}