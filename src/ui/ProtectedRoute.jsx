import { useEffect } from 'react';
import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';


const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //1 load authenticated user

  const {  isLoading,user, isAuthenticated } = useUser();
  const navigate = useNavigate();

  // If there is no authenticated user, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isLoading, isAuthenticated,  navigate]
  );

  // While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //If there i a user, render the application
  // console.log('ia', isAuthenticated, user);
  if(isAuthenticated) return children;
}

export default ProtectedRoute;
