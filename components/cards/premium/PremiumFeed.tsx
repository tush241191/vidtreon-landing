import { useState } from 'react';
import IFeed from '../../../common/feed.type';

export interface IPremiumFeed {
  data: IFeed;
  onClickSubscribe: () => void;
}

const PremiumFeed: React.FC<IPremiumFeed> = (props: IPremiumFeed) => {
  const { onClickSubscribe, data } = props;
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => setIsDropdown(!isDropdown);
  return (
    <div className='relative p-2 border-t-4 border-gray-200'>
      <div
        className={`px-8 ${
          data.paid ? 'absolute' : 'hidden'
        } inset-x-0 bottom-0 h-full bg-black/90`}
      >
        <div className='h-full text-[0.60rem] flex items-center justify-center'>
          <div className='flex flex-col w-full text-center'>
            <span className=' text-yellow-500 font-medium flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3 w-3'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              Premium content
            </span>

            <span className='text-white'>
              Support
              <span className='text-blue-500 mx-0.5'>@Benton_Bogan</span>
              to unlock all their premium content
            </span>

            <button
              onClick={onClickSubscribe}
              type='button'
              className='z-20 mt-4 inline-flex items-center justify-center px-2.5 py-1.5 border border-transparent text-xs font-medium shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Support Channel
            </button>
          </div>
        </div>
      </div>
      <div className={` ${data.paid ? 'blur-sm' : ''} h-full w-full`}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <button
                type='button'
                className={`${data.content_type.color} inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
              >
                {data.content_type.type == 'audio' ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-2.5 w-2.5`}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z' />
                  </svg>
                ) : data.content_type.type == 'video' ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-2.5 w-2.5`}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
                  </svg>
                ) : data.content_type.type == 'image' ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-2.5 w-2.5`}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={`h-2.5 w-2.5`}
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className='flex items-center space-x-1'>
            <div className='flex space-x-1 text-[0.60rem] text-gray-500'>
              {data.ago}
            </div>
            <div data-controller='dropdowns' className='relative flex-shrink-0'>
              <button
                onClick={toggleDropdown}
                type='button'
                className='inline-flex items-center p-0.5 border border-transparent rounded-full text-gray-500 bg-transparent focus:outline-none focus:ring-00'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                  />
                </svg>
              </button>
              <div
                className={`${
                  isDropdown ? '' : 'hidden'
                } origin-topRight absolute right-0 mt-1 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
              >
                <div className='py-1 divide-y divide-gray-100' role='none'>
                  <a
                    href='#'
                    className='text-gray-700 block px-1 py-0.5 text-[0.60rem]'
                    role='menuitem'
                    id='menu-item-0'
                  >
                    Edit
                  </a>
                  <a
                    href='#'
                    className='text-gray-700 block px-1 py-0.5 text-[0.60rem]'
                    role='menuitem'
                    id='menu-item-1'
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-2 text-[0.60rem] space-y-1'>
          <label className='font-medium text-gray-900 line-clamp-2'>
            {data.title}
          </label>
          <div className='text-gray-700 line-clamp-3'>{data.body}</div>
          <a className='text-blue-500 mt-2'>Read More</a>

          {data.content_type.type == 'audio' ? (
            <audio controls className='w-full h-8 rounded-md'>
              <source
                src='https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/11/file_example_MP3_2MG.mp3'
                type='audio/mpeg'
              />
              Your browser does not support the audio element.
            </audio>
          ) : data.content_type.type == 'video' ? (
            <video controls playsInline className='w-full rounded-md bg-black'>
              <source
                src='https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/04/file_example_MP4_1280_10MG.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          ) : data.content_type.type == 'image' ? (
            <picture className='w-full rounded-md'>
              <source
                media='(min-width: 650px)'
                srcSet='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80'
              />
              <img
                className='w-full rounded-md'
                src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80'
              />
            </picture>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumFeed;
