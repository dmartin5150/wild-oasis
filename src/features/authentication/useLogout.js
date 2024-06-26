import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {isLoading, mutate:logout} = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/login');
    },
    onError: (err) => {
      toast.error('Unable to log out');
    }
  });

  return {isLoading, logout}
}