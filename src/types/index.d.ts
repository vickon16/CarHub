interface CarDataType {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  isFavorite? : boolean;
  id : string;
}

interface FilterType {
  label : string;
  value : string;
}

interface FilterDataType {
  model?: string;
  limit?: number;
  fuel?: string;
  make?: string;
  year?: number;
}