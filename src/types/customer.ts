export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: "asc" | "desc";
  [key: string]: any;
}

export interface CustomAttribute {
  attribute_code: string;
  value: number;
}
[];

export interface Region {
  region_code: string;
  region: string;
  region_id: number;
}

export interface Address {
  defaultShipping: boolean;
  defaultBilling: boolean;
  firstname: string;
  lastname: string;
  custom_attributes: CustomAttribute[];
  region: Region;
  postcode: string;
  street: string[];
  city: string;
  telephone: string;
  countryId: string;
}
[];

export interface Customer {
  email: string;
  firstName: string;
  lastName: string;
  addresses: Address[];
}

export interface customer {
  customer: Customer;
  password: string;
}

export interface signUpState {
  loading?: boolean;
  error: string;
  Customer: Customer;
  password: string;
}

export interface signInState {
  loading?: boolean;
  error: string;
  username: string;
  password: string;
  tokens: null;
}
