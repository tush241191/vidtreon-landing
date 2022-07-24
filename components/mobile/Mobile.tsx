import { useState } from 'react';
import IFeed from '../../common/feed.type';
import PremiumFeed from '../cards/premium/PremiumFeed';
import CreatorProfile from '../profile/creator/CreatorProfile';

const feeds: IFeed[] = [
  {
    id: 1,
    title: 'What is Lorem Ipsum?',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content_type: {
      type: 'text',
      color: 'bg-blue-700',
    },
    ago: 'about 11 hours ago',
    assets: '',
    paid: false,
  },
  {
    id: 2,
    title: 'Where does it come from?',
    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
    content_type: {
      type: 'image',
      color: 'bg-green-700',
    },
    ago: 'about 12 hours ago',
    assets:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
    paid: false,
  },
  {
    id: 3,
    title: 'Why do we use it?',
    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    content_type: {
      type: 'video',
      color: 'bg-red-700',
    },
    ago: 'about 12 hours ago',
    assets:
      'https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/04/file_example_MP4_1280_10MG.mp4',
    paid: false,
  },
  {
    id: 4,
    title: 'Why do we use it?',
    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    content_type: {
      type: 'video',
      color: 'bg-red-700',
    },
    ago: 'about 12 hours ago',
    assets:
      'https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/04/file_example_MP4_1280_10MG.mp4',
    paid: true,
  },
  {
    id: 5,
    title: 'Where can I get some?',
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    content_type: {
      type: 'audio',
      color: 'bg-purple-700',
    },
    ago: 'about 12 hours ago',
    assets:
      'https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/11/file_example_MP3_2MG.mp3',
    paid: false,
  },
];

export interface IMobile {}

const Mobile: React.FC<IMobile> = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const subscribeCreator = () => {
    if (!isLogin) {
      setIsLoginModal(!isLogin);
    }
  };

  const login = () => setIsLogin(true);
  const logout = () => setIsLogin(false);

  return (
    <div className='mt-16 sm:mt-24 w-80 2xl:w-96 mx-auto'>
      <div className="relative py-[0.260rem] px-[2.350rem] h-[32rem] bg-contain bg-center bg-no-repeat bg-[url('/mobile.png')]">
        <div
          className={`relative flex flex-col h-full bg-black rounded-[1.45rem] mx-0.5`}
        >
          <div
            className={`${
              isLogin ? 'hidden' : ''
            } rounded-3xl relative w-full h-full bg-cover bg-center bg-[url('/splash.png')]`}
          >
            <div className='absolute rounded-3xl top-0 inset-0 w-full h-full flex items-center justify-center bg-black/30'>
              <div className='w-full relative h-full flex-col'>
                <div className='max-w-md w-full h-full flex items-center'></div>
                <div className='w-full absolute bottom-10 flex item-center justify-center space-x-4'>
                  <a
                    onClick={login}
                    className='cursor-pointer inline-flex items-center px-3 py-1 border border-transparent text-[0.60rem] font-medium rounded-2xl shadow-sm text-white bg-branding focus:outline-none focus:ring-0'
                  >
                    Sign in
                  </a>
                  <a
                    onClick={login}
                    className='cursor-pointer inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-[0.60rem] font-medium rounded-2xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-0'
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              isLogin ? '' : 'hidden'
            } w-full h-full overflow-hidden`}
          >
            <CreatorProfile logout={logout} />
            <div className='rounded-b-3xl flex flex-col bg-white overflow-y-scroll h-3/4'>
              {feeds.map((feed, index) => (
                <PremiumFeed
                  key={feed.id}
                  onClickSubscribe={subscribeCreator}
                  data={feed}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
