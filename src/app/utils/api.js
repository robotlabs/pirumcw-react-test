import { parserData } from "./parser";
export const fetchData = async (url) => {
  const response = await fetch(url)
  const result = await response.json();
  return parserData(result)
}