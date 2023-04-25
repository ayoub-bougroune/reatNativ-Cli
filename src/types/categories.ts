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
export interface CustomAttribute {
  attribute_code: string;
  value: any;
}

export interface Item {
  id: number;
  parent_id: number;
  name: string;
  is_active: boolean;
  position: number;
  level: number;
  children: string;
  created_at: string;
  updated_at: string;
  path: string;
  available_sort_by: any[];
  include_in_menu: boolean;
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

export interface SearchCriteria {
  filter_groups: FilterGroup[];
}

export interface Categories {
  items: Item[];
  search_criteria: SearchCriteria;
  total_count: number;
}

export interface test {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CategoriesState {
  loading: boolean;
  Categories: Categories;
  error: string;
}

export interface SubCategoriesState {
  loading: boolean;
  id: number;
  SubCategories: Categories;
  error: string;
}
