import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteModal,modalSelector } from "../../../react-redux/reducers/modal";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";


// Get all Courses
export const useGetPost = () => {
  const url = "http://localhost:2000/get-post"
  const { data , isLoading } = useQuery(["post"], ({ signal }) =>
    axios.get(url, { signal }).then((res) => res.data.data)
  );
  return { data ,isLoading};
};
// Get all Courses
export const useGetPostById = (value) => {
  const url = "http://localhost:2000/get-post/?id="+ value;
  const { data , isLoading } = useQuery(["post"], ({ signal }) =>
     axios.get(url, { signal }).then((res) => res.data.data)
  );
  return { data , isLoading};
};

// / Get all Courses
export const useGetPostByslug = (value) => {
  const url = "http://localhost:2000/get-post-by-slug/?slug="+ value;
  const { data , isLoading } = useQuery(["post"], ({ signal }) =>
     axios.get(url, { signal }).then((res) => res.data.data)
  );
  return { data , isLoading};
};


// Delete GradeLevel
export const useDelete = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const url = "http://localhost:2000/delete/?id=";
  const { selectedToDelete } = useSelector(modalSelector)
  const { mutate, isLoading } = useMutation((type) => {
    axios.get(url+type , {
      timeout: 5000,
    }).then((res) => res.data.data)
  });

  const del = async () => {
    try {
      mutate(selectedToDelete, {
        onSuccess: () => {
          dispatch(toggleDeleteModal({ data: { modalState : false , blogID : ""} }));
          toast.success('Blog Deleted Successfully');
          location.reload();
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return { del, isLoading };
};