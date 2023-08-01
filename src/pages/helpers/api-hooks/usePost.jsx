import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteModal,modalSelector, toggleLogoutModal } from "../../../react-redux/reducers/modal";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../axiosConfig";


// Get all Courses
export const useGetPost = () => {
  const url =import.meta.env.VITE_APP_BACKEND_URL +"posts/"
  const { data , isLoading } = useQuery(["post"], ({ signal }) =>
    axiosInstance
    .get(url, { signal })
    .then((res) => res.data.data)
  );
  return { data , isLoading};
};
// Get all Courses
export const useGetPostById = (value) => {
  const url = import.meta.env.VITE_APP_BACKEND_URL + "posts/" + value;
  const { data , isRunning } = useQuery(["posts"], ({ signal }) =>
    axiosInstance
    .get(url, { signal })
    .then((res) => res.data.data)
  );
  return { data , isRunning};
};

// / Get all Courses
export const useGetPostByslug = (value) => {
  const url = import.meta.env.VITE_APP_BACKEND_URL + "posts/slug/" + value;
  const { data , isRunning } = useQuery(["posts"], ({ signal }) =>
    axiosInstance
    .get(url, { signal })
    .then((res) => res.data)
  );
  return { data , isRunning};
};
// Delete GradeLevel
export const useDelete = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const url = import.meta.env.VITE_APP_BACKEND_URL + "posts/";
  const { selectedToDelete } = useSelector(modalSelector)
  console.log(selectedToDelete)
  const { mutate, isLoading } = useMutation((type) => {
    axios.delete(url+type , {
      timeout: 2000,
    }).then((res) => res.data.data)
  });

  const del = async () => {
    try {
      mutate(selectedToDelete, {
        onSuccess: () => {
          dispatch(toggleDeleteModal({ data: { modalState : false , blogID : ""} }));
          toast.success('Blog Deleted Successfully');
          // window.location.reload();
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return { del, isLoading };
};


// Logout user
export const useLogout = () => {
  const dispatch = useDispatch()
  const logout = async () => {
    try {
      toast.success("Logged out successfully");
      sessionStorage.removeItem('token');
      dispatch(toggleLogoutModal({ data: false }));
    } catch (error) {
      throw new Error(error);
    }
  };

  return { logout };
};