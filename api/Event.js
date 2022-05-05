const BASE_URL = "https://sportilize.herokuapp.com/api/v1/";
export const CreateAnEvent = async (data, LoggedUser) => {
  const res = await fetch(BASE_URL + "events/create", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: LoggedUser.Cookie,
    },

    body: JSON.stringify(data),
  });
  const d = await res.json();
  return { ok: res.ok, ...d };
};

export const GetSports = async () => {
  const res = await fetch(BASE_URL + "sports/get_all_sports", {
    method: "GET",
  });
  const data = await res.json();
  return data.map((s) => s.name);
};
