import React from 'react';

export const SkeletonForm = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          height: '20px',
          width: '50%',
          marginBottom: '10px',
          background: '#f0f0f0',
          borderRadius: '4px',
        }}
      />
      <div
        style={{
          height: '40px',
          marginBottom: '10px',
          background: '#f0f0f0',
          borderRadius: '4px',
        }}
      />
      <div
        style={{
          height: '40px',
          marginBottom: '10px',
          background: '#f0f0f0',
          borderRadius: '4px',
        }}
      />
      <div
        style={{
          height: '40px',
          marginBottom: '10px',
          background: '#f0f0f0',
          borderRadius: '4px',
        }}
      />
      <div
        style={{ height: '40px', background: '#f0f0f0', borderRadius: '4px' }}
      />
    </div>
  );
};
