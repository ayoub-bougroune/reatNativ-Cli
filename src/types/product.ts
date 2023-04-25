export interface CategoryLink {
  position: number;
  category_id: string;
}

export interface StockItem {
  item_id: number;
  product_id: number;
  stock_id: number;
  qty: number;
  is_in_stock: boolean;
  is_qty_decimal: boolean;
  show_default_notification_message: boolean;
  use_config_min_qty: boolean;
  min_qty: number;
  use_config_min_sale_qty: number;
  min_sale_qty: number;
  use_config_max_sale_qty: boolean;
  max_sale_qty: number;
  use_config_backorders: boolean;
  backorders: number;
  use_config_notify_stock_qty: boolean;
  notify_stock_qty: number;
  use_config_qty_increments: boolean;
  qty_increments: number;
  use_config_enable_qty_inc: boolean;
  enable_qty_increments: boolean;
  use_config_manage_stock: boolean;
  manage_stock: boolean;
  low_stock_date?: any;
  is_decimal_divided: boolean;
  stock_status_changed_auto: number;
}

export interface ExtensionAttributes {
  website_ids: number[];
  category_links: CategoryLink[];
  stock_item: StockItem;
}

export interface CustomAttribute {
  attribute_code: string;
  value: any;
}

export interface Item {
  id: number;
  sku: string;
  name: string;
  attribute_set_id: number;
  price: number;
  status: number;
  visibility: number;
  type_id: string;
  created_at: string;
  updated_at: string;
  weight: number;
  extension_attributes: ExtensionAttributes;
  product_links: any[];
  options: any[];
  media_gallery_entries: any[];
  tier_prices: any[];
  custom_attributes: CustomAttribute[];
}

export interface Filter {
  field: string;
  value: string;
  condition_type: string;
}

export interface FilterGroup {
  filters: Filter[];
}

export interface SortOrder {
  field: string;
  direction: string;
}

export interface SearchCriteria {
  filter_groups: FilterGroup[];
  sort_orders: SortOrder[];
}

export interface Product {
  sku: string;
  price: number;
  name: string;
  search_criteria: SearchCriteria;
  total_count: number;
}

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

export interface productsState {
  id: number;
  name: string;
  Products: Product[];
  appColors: string;
  loading?: boolean;
  error: string;
}

export interface productState {
  id: number;
  name: string;
  Product: Product[];
  appColors: string;
  loading?: boolean;
  error: string;
}

export interface IProductList {
  sku: string;
  id: number;
  name: string;
  image: string;
  price: number;
  appColors: string;
  qty: number;
}

export interface ISearch {
  text: string;
  Product: Product[];
  loading?: boolean;
  error: string;
}



export interface CartItem {
    sku: string;
    qty: number;
    quote_id: number;
  
}

export interface singlePState {
  Product: Product;
  sku: string;
  loading: boolean;
  error: string;
}

export interface CartItemState {
    CartItem: CartItem;
    cartTotalQuantity: number;
    cartTotalAmount: number;
    CartId:number,
    loading: boolean;
    error: string; 
}

export interface CartIdState {
    CartId:number,
    loading: boolean;
    error: string; 
}