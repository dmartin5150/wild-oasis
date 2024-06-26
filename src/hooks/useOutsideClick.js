import { useEffect, useRef } from "react";


export function useOutsideClick(action,listenCapturing = true) {
  const ref = useRef();
  useEffect(function() {

    function handleClick(e) {
      if(ref.current && !ref.current.contains(e.target)) {
        action()
      }
      return false
    }
    document.addEventListener('click', handleClick,listenCapturing);
  
  
    return () => document.removeEventListener('click', handleClick,listenCapturing);
  
  },[action]);

  return ref;


}

