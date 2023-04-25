
export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
  status: string;
}

export interface CartItemState {
    CartItem: CartItem;
    cartTotalQuantity: number;
    cartTotalAmount: number;
    id:number;
    CartId:number,
    loading: boolean;
    error: string;
}

export interface CartItem {
    sku: string;
    qty: number;
    quote_id: number;
}

export interface CartItems {
    map(arg0: (item: { qty: number; sku: string; item_id: number; }) => false | JSX.Element): import("react").ReactNode;
    item_id: number;
    sku: string;
    qty: number;
    name: string;
    price: number;
    product_type: string;
    quote_id: string;
}

export interface CartItemsState {
    CartItems: CartItems,
    loading: boolean;
    error: string; 
}

export interface CartIdState {
    CartId: number,
    loading: boolean;
    error: string; 
}