import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteModal,modalSelector, toggleLogoutModal } from "../../../react-redux/reducers/modal";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";


// Get all Courses
export const useGetPreferences = () => {
  const url = "process.env.BACKEND_URL/get-preferences"
  const { data , isLoading } = useQuery(["post"], ({ signal }) =>
    axios.get(url, { signal }).then((res) => res.data.data)
  );
  return { data ,isLoading};
};


// Get all Courses
export const useGetCuisines = () => {
  const url = "process.env.BACKEND_URL/get-cuisines"
  const { result , isLoadingUp } = useQuery(["post"], ({ signal }) =>
    axios.get(url, { signal }).then((res) => res.data.data)
  );
  return { result ,isLoadingUp};
};
