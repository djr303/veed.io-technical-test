const API_ENDPOINT =
  "https://api.github.com/search/repositories?q=created:%3E2022-01-10&sort=stars&order=desc";

const FETCH_CONFIG: RequestInit = {
  method: "GET",
  cache: "no-cache",
  referrerPolicy: "unsafe-url",
};

export const repositories = async () => {
  const response = await fetch(`${API_ENDPOINT}`, { ...FETCH_CONFIG });
  return await response.json()
};