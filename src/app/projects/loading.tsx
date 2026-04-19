import React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingProjectsFallback() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '40vh', justifyContent: 'center' }}>
      <Skeleton variant="rectangular" width={210} height={40} animation="pulse" />
      <Skeleton variant="text" width={180} height={30} animation="pulse" style={{ marginTop: 16 }} />
    </div>
  );
}
