import { useMutation } from '@tanstack/react-query';
import { signUp as signUpAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: (user) => {
      console.log('user', user);
      toast.success(
        "Account successfully created!  Please verify the new account from the user's email address."
      );
    },
    onError: (error) => {
      toast.error("Something went wrong with your account");
    }
  });

  return { signup, isLoading };
}
