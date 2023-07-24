import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export async function getCarsApi(filterData: FilterDataType) {
  const { fuel, limit, make, model, year } = filterData;
  let url = "";

  fuel ? (url += `&fuel_type=${fuel}`) : null;
  limit ? (url += `&limit=${limit}`) : url += `&limit=10`;
  year ? (url += `&year=${year}`) : url += `&year=2023`;
  make ? (url += `&make=${make}`) : null;
  model ? (url += `&model=${model}`) : null;

  if (url.startsWith("&")) url = url.slice(1);

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${url}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  const result = await response.json();
  return result as CarDataType[];
}

export const updateSearchParams = (key: string, value: string) => {
  const newSearchURL = new URLSearchParams(window.location.search);
  newSearchURL.set(key, value);

  const newPathname = `${window.location.pathname}?${newSearchURL.toString()}`;
  return newPathname;
};

export const generateImageUrl = (carData: CarDataType) => {
  const { make, model, year } = carData;
  const APIKey = process.env.NEXT_PUBLIC_IMAGIN_API_KEY as string;

  // we can also append params as alternative to this
  // url.searchParams.append("key", "value");
  const url = new URL(
    `https://cdn.imagin.studio/getimage?customer=${APIKey}&zoomType=fullscreen&make=${make}&modelFamily=${model}&modelYear=${year}`
  );

  return `${url}`;
};
