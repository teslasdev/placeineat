import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import axios from "axios";
import { CitySchema } from "../validation/ValidSchema";
import { toggleOpenModal } from "../../../react-redux/reducers/modal";
import { axiosInstance } from "../axiosConfig";


export const useCreatePreference = () => {
   const dispatch = useDispatch()
   const url = import.meta.env.VITE_APP_BACKEND_URL + "preference/";
   const { mutate, isLoading } = useMutation((data) => {
      return axiosInstance.post(url, data);
   });
   const formik = useFormik({
      initialValues: {
        name: "",
        type : 0,
        status : 1
      },
      validationSchema: CitySchema,
      onSubmit: async (values) => {
        try {
          mutate(values, {
            onSuccess: (res) => {
               setTimeout(() => {
                window.location.reload();
               } , 3000)
              toast.success('Preference Added Successfully')
              dispatch(toggleOpenModal({ data: { modalState : false , id : ""} }));
            },
            onError: (res) => {
               toast.error('Preference name Exists')
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
export const useGetPreference = (value) => {
   const url = import.meta.env.VITE_APP_BACKEND_URL + "preference/" + value;
   const { data , isLoading } = useQuery(["cuisine"], ({ signal }) =>
     axiosInstance
       .get(url, { signal })
       .then((res) => res.data.data)
   );
 
   return { data , isLoading };
};