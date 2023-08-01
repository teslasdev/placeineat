import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import axios from "axios";
import { CitySchema } from "../validation/ValidSchema";
import { toggleOpenModal } from "../../../react-redux/reducers/modal";
import { axiosInstance } from "../axiosConfig";


export const useCreateCity = () => {
   const dispatch = useDispatch()
   const url = import.meta.env.VITE_APP_BACKEND_URL + "cities/";
   const { mutate, isLoading } = useMutation((data) => {
      return axiosInstance.post(url, data);
   });
   const formik = useFormik({
      initialValues: {
        name: "",
        description : "",
        status : 1
      },
      validationSchema: CitySchema,
      onSubmit: async (values) => {
        try {
          mutate(values, {
            onSuccess: (res) => {
               toast.success('City Added Successfully')
               dispatch(toggleOpenModal({ data: { modalState : false , id : ""} }));
            },
            onError: (res) => {
               toast.error('City name Exists')
            },
          });
          formik.handleReset;
        } catch (error) {
          throw new Error(error);
        }
      },
    });
  
    return { formik, isLoading };
 };

 // Get all Courses
// Get all eams
export const useGetCity = () => {
   const url = import.meta.env.VITE_APP_BACKEND_URL + "cities/";
   const { data , isLoading } = useQuery(["cities"], ({ signal }) =>
     axiosInstance
       .get(url, { signal })
       .then((res) => res.data.data)
   );
 
   return { data , isLoading };
};