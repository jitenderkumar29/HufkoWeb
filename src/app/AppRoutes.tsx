'use client';
import React, { Suspense, FC, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Simple 404 component
const NotFound: FC = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    color: 'white',
    background: '#530605',
    fontSize: '2rem',
    fontWeight: 'bold',
    flexDirection: 'column',
    gap: '1rem'
  }}>
    <div>404</div>
    <div style={{ fontSize: '1rem', opacity: 0.7 }}>Page Not Found</div>
  </div>
);

// Create components with dynamic imports (no loading fallback)
const HomePage = dynamic(
  () => import('@/components/HomePage/HomePage'),
  { ssr: false }
);

const GroceryAllTabWisePage = dynamic(
  () => import('@/components/Grocery/GroceryAllTabWisePage/GroceryAllTabWisePage'),
  { ssr: false }
);

const GroceryProductDetails = dynamic(
  () => import('@/components/Grocery/GroceryProductDetails/GroceryProductDetails'),
  { ssr: false }
);

const FranchiseDetailsPage = dynamic(
  () => import('@/components/HomePage/FranchiseHufko/FranchiseDetailsPage/FranchiseDetailsPage'),
  { ssr: false }
);

// Map routes to components
const routeMap: Record<string, React.ComponentType> = {
  '/': HomePage,
  '/all-grocery-tabwise-Page': GroceryAllTabWisePage,
  '/grocery-product-details': GroceryProductDetails,
  '/franchise-details': FranchiseDetailsPage,
};

const AppRoutes: FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  
  const cleanPath = pathname || '/';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Get the component for this route
  const View = routeMap[cleanPath];

  // If no component found, show 404
  if (!View) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={null}>
      <View />
    </Suspense>
  );
};

export default AppRoutes;