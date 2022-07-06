import Head from 'next/head';
import { ReactNode } from 'react';

export interface IPrimaryLayout {
  children?: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main>
        <div className='relative bg-gray-50 min-h-screen overflow-hidden'>
          <div className='relative pt-6 pb-16 sm:pb-24'>{children}</div>
        </div>
      </main>
    </>
  );
};

export default PrimaryLayout;
