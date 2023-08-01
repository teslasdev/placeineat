import * as Yup from "yup";
export const CitySchema = Yup.object().shape({
   name: Yup.string()
     .required("Required")
 });