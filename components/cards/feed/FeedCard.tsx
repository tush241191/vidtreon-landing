export interface IFeedCard {
  sampleTextProp?: string;
}

const FeedCard: React.FC<IFeedCard> = ({ sampleTextProp }) => {
  return (
    <div className='p-2 border-t-4 border-gray-200'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <a href='#'>
              <span className='sr-only'>Roel Aufderehar</span>
              <img
                className='h-6 w-6 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </a>
          </div>
          <div className='ml-1'>
            <p className='text-[0.55rem] font-medium text-gray-900'>
              <a href='#' className='hover:underline'>
                Roel Aufderehar
                <span className='ml-1 text-blue-500'>@roel</span>
              </a>
            </p>
            <div className='flex space-x-1 text-[0.55rem] text-gray-500'>
              2 days ago
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-1'>
          <button
            type='button'
            className='inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z' />
            </svg>
          </button>
          <button
            type='button'
            className='inline-flex items-center p-1 border border-transparent rounded-sm shadow-sm text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-3 w-3'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
            </svg>
          </button>
        </div>
      </div>
      <div className='mt-2 text-[0.60rem] space-y-1'>
        <label className='font-medium text-gray-900'>
          nemo corporis amet impedit facere totam aliquid quam odit et fuga
          voluptatibus
        </label>
        <div className='text-gray-700 line-clamp-3'>
          Optio et et adipisci exercitationem sit eum. lure praesentium quia
          velit mollitia voluptate temporibus est nemo. Dolor nesciunt qui. In
          ipsam autem accu.
        </div>
        <a className='text-blue-500 mt-2'>Read More</a>
      </div>
      <div className='mt-4'>
        <div className='bg-gray-200 p-1 flex items-center'>
          <div className='flex-shrink-0'>
            <a href='#'>
              <span className='sr-only'>Roel Aufderehar</span>
              <img
                className='h-6 w-6 rounded-sm'
                src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                alt=''
              />
            </a>
          </div>
          <div className='ml-1'>
            <p className='text-[0.55rem] font-medium text-gray-900'>
              <a href='#' className='hover:underline'>
                est blanditiis sed impedit
              </a>
            </p>
            <div className='flex space-x-1 text-[0.55rem] text-gray-500'>
              @roel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
