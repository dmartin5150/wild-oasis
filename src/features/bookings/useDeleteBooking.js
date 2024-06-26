import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";



export function useDeleteBooking() {

  const queryClient = useQueryClient();

  const {isLoading:isDeleting, mutate: deleteBooking} = useMutation({
    mutationFn: deleteBookingAPI, 
    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({active: true});
    },
    onError: (err) => toast.error('Something went wrong while deleting')
  })

  return {isDeleting, deleteBooking};


}