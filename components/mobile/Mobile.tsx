import { useState } from 'react';
import FeedCard from '../cards/feed/FeedCard';
import LoginCard from '../cards/login/LoginCard';
import PremiumFeed from '../cards/premium/PremiumFeed';
import CreatorProfile from '../profile/creator/CreatorProfile';

export interface IMobile {
  sampleTextProp?: string;
}

const Mobile: React.FC<IMobile> = ({ sampleTextProp }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const subscribeCreator = () => {
    if (!isLogin) {
      setIsLoginModal(!isLogin);
    }
  };

  return (
    <div className='mt-16 sm:mt-24 w-80 2xl:w-96 mx-auto'>
      <div className="relative py-[0.260rem] px-[2.350rem] h-[32rem] bg-contain bg-center bg-no-repeat bg-[url('/mobile.png')]">
        <div
          className={`relative flex flex-col h-full bg-black rounded-[1.45rem] mx-0.5 ${
            isLoginModal ? 'overflow-auto' : 'overflow-y-auto'
          }`}
        >
          {isLoginModal && (
            <div className='z-10 absolute px-1 inset-y-0 left-0 w-full h-full bg-black/75'>
              <LoginCard
                toggleLoginModal={() => setIsLoginModal(!isLoginModal)}
              />
            </div>
          )}
          <div
            className={`${
              isLoginModal ? 'blur-sm bg-white' : ''
            } w-full h-full`}
          >
            <CreatorProfile onClickSubscribe={subscribeCreator} />
            <div className='rounded-b-3xl flex flex-col bg-white'>
              <PremiumFeed onClickSubscribe={subscribeCreator} />
              <FeedCard />
              <FeedCard />
              <PremiumFeed onClickSubscribe={subscribeCreator} />
              <PremiumFeed onClickSubscribe={subscribeCreator} />
              <FeedCard />
              <PremiumFeed onClickSubscribe={subscribeCreator} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
