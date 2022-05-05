const BASE_URL = "https://sportilize.herokuapp.com/api/v1/";
const LyonApi =
  "https://download.data.grandlyon.com/ws/grandlyon/adr_voie_lieu.adrequipsportpct/all.json?maxfeatures=100&start=1";

export const get = (url, params) =>
  fetch(BASE_URL + url, {
    method: "GET",
    ...params,
  });

export const post = async (url, params, body) => {
  const res = await fetch(BASE_URL + url, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    ...params,
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return {
    ok: res.ok,
    Cookie: res.headers.map["set-cookie"],
    ...data,
  };
};

export const getFromLyon = (url, params) =>
  fetch(LyonApi, {
    method: "GET",
  });
