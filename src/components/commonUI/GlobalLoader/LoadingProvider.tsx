/* eslint-disable @typescript-eslint/no-explicit-any */
// LoadingContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { LoadingContextType } from '../../../@types/types';
import AppLoader from './Loader';

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: any = ({ children }: any) => {
  const [loading, setLoading] = useState(true);

  const value: LoadingContextType = { loading, setLoading };

  useEffect(()=>{
    setTimeout(() => {
        setLoading(false)
    }, 1500);
  },[])

  return (
    <LoadingContext.Provider value={value}>
        {loading && <AppLoader />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};
