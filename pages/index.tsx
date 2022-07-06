import Header from '../components/layouts/header/Header';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Mobile from '../components/mobile/Mobile';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-7xl px-4'>
        <Mobile />
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
