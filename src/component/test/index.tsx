import { FC } from 'react';

const Test: FC<{ width: string; height: string; size: string }> = ({ width = '100%', height = '100%', size }) => {
  return (
    <div>
      <div style={{ width, height }}>Test{size}</div>
    </div>
  );
};

export { Test };
