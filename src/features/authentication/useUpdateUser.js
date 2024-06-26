import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser () {

  const queryClient = useQueryClient();

  const {isLoading:isUpdating, mutate:updateUser} = useMutation({
    mutationFn:updateCurrentUser,
    onSuccess: (data) => {
      toast.success('User updated successfully');
      queryClient.invalidateQueries({queryKey: ['user']})


    },
    onError: (err) => toast.error(err.message)
    },
  )
  return {isUpdating, updateUser};


}