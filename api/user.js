import { post } from "./index";
const LyonApi =
  "https://download.data.grandlyon.com/wfs/grandlyon?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=adr_voie_lieu.adrequipsportpct&outputFormat=application%2Fjson%3B%20subtype%3Dgeojson&SRSNAME=EPSG%3A4171&startIndex=0&count=100&fbclid=IwAR0V5nsGhLJ3uy91FQnUQx430ZkJEkj76bdyhsPGt2HX61Rzoz5kQL6Ox-E";

export const setDefaultUser = async (id, username) => {
  const newUser = {
    uuid: id,
    username: username,
  };

  return post("users/new_user", null, newUser);
};
export const LogUsers = async ({ email, password }) => {
  const UserData = {
    email,
    password,
  };

  return post("auth/login", null, UserData);
};
export const UserCreate = async (data) => {
  return post("auth/register", null, data);
};
export const Signup = async (id, { username, email, password, uuid }) => {
  const newUser = {
    uuid,
    email,
    password,
    username,
  };

  return post("auth/register", null, newUser);
};
export const GetPois = async () => {
  const res = await fetch(LyonApi, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
