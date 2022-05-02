import { post } from "./index";
export const CreateAnEvent = async ( data) => {
 
  
    return post("events/create", null, data);
  };