export interface Products {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Array<Results>;
};

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
};

export interface Results {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  prices: Prices;
  sale_price?: any;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  promotions?: any;
  shipping: Shipping;
  seller_address: Seller_address;
  attributes: Array<Attributes>;
  original_price: number;
  category_id: string;
  official_store_id?: any;
  domain_id: string;
  catalog_product_id?: any;
  tags: Array<string>;
  order_backend: number;
  use_thumbnail_id: boolean;
  offer_score?: any;
  offer_share?: any;
  match_score?: any;
  winner_item_id?: any;
  melicoin?: any;
  discounts?: any;
};

export interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: Array<string>;
  seller_reputation: Seller_reputation;
};

export interface Prices {
  id: string;
  prices: Array<Prices>;
  presentation: Presentation;
  payment_method_prices?: Array<any>;
  reference_prices: Array<Reference_prices>;
  purchase_discounts?: Array<any>;
};

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
};

export interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
};

export interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: Array<string>;
  logistic_type: string;
  store_pick_up: boolean;
};

export interface Seller_address {
  id?: any;
  comment?: any;
  address_line?: any;
  zip_code?: any;
  country: Country;
  state: State;
  city: City;
  latitude?: any;
  longitude?: any;
};

export interface Attributes {
  values: Array<Values>;
  attribute_group_id: string;
  source: number;
  id: string;
  name: string;
  value_id?: any;
  value_struct?: any;
  value_name: string;
  attribute_group_name: string;
};

export interface Values {
  id?: string;
  name: string;
  path_from_root: Array<Path_from_root>;
};

export interface Values {
  id?: string;
  name: string;
  results: number;
};

export interface Seller_reputation {
  power_seller_status: string;
  level_id: string;
  metrics: Metrics;
  transactions: Transactions;
};

export interface Prices {
  id: string;
  type: string;
  amount: number;
  regular_amount?: any;
  currency_id: string;
  last_updated: Date;
  conditions: Conditions;
  exchange_rate_context: string;
  metadata?: any;
};

export interface Presentation {
  display_currency: string;
};

export interface Reference_prices {
  id: string;
  type: string;
  conditions: Conditions;
  amount: number;
  currency_id: string;
  exchange_rate_context: string;
  tags?: Array<any>;
  last_updated: Date;
};

export interface Country {
  id: string;
  name: string;
};

export interface State {
  id: string;
  name: string;
};

export interface City {
  id: string;
  name: string;
};

export interface Values {
  id?: string;
  source: number;
  name: string;
  struct?: any;
};

export interface Path_from_root {
  id: string;
  name: string;
};

export interface Metrics {
  cancellations: Cancellations;
  claims: Claims;
  delayed_handling_time: Delayed_handling_time;
  sales: Sales;
};

export interface Transactions {
  canceled: number;
  period: string;
  total: number;
  ratings: Ratings;
  completed: number;
};

export interface Conditions {
  context_restrictions: Array<string>;
  start_time?: any;
  end_time?: any;
  eligible: boolean;
};

export interface Conditions {
  context_restrictions: Array<string>;
  start_time?: any;
  end_time?: any;
  eligible: boolean;
};

export interface Cancellations {
  period: string;
  rate: number;
  value: number;
};

export interface Claims {
  period: string;
  rate: number;
  value: number;
};

export interface Delayed_handling_time {
  period: string;
  rate: number;
  value: number;
};

export interface Sales {
  period: string;
  completed: number;
};

export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
};
