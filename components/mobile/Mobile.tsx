import FeedCard from '../cards/feed/FeedCard';
import PremiumFeed from '../cards/premium/PremiumFeed';
import CreatorProfile from '../profile/creator/CreatorProfile';

export interface IMobile {
  sampleTextProp?: string;
}

const Mobile: React.FC<IMobile> = ({ sampleTextProp }) => {
  return (
    <div className='mt-16 sm:mt-24 w-80 2xl:w-96 mx-auto'>
      <div className="py-[0.260rem] px-[2.350rem] h-[32rem] bg-contain bg-center bg-no-repeat bg-[url('/mobile.png')]">
        <div className='h-full bg-black rounded-[1.45rem] mx-0.5 overflow-y-auto'>
          <div className='w-full'>
            <CreatorProfile />
            <div className='rounded-b-3xl flex flex-col bg-white'>
              <PremiumFeed />
              <FeedCard />
              <FeedCard />
              <PremiumFeed />
              <PremiumFeed />
              <FeedCard />
              <PremiumFeed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
