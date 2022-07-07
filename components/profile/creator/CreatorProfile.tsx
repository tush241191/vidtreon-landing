export interface ICreatorProfile {
  label?: string;
  onClickSubscribe: () => void;
}

const CreatorProfile: React.FC<ICreatorProfile> = (props: ICreatorProfile) => {
  const { label, onClickSubscribe, ...rest } = props;

  return (
    <div className="rounded-t-3xl space-y-4 bg-cover bg-center bg-no-repeat bg-[url('/car-1.jpeg')]">
      <div className='py-2 h-full bg-gradient-to-t from-black to-none'>
        <img
          className='mx-auto h-16 w-16 rounded-full'
          src='https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
          alt=''
        />
        <div className='text-center space-y-2'>
          <div className='font-medium'>
            <h3 className='text-[0.60rem] text-gray-50'>Asmita Kharat</h3>
            <p className='text-blue-600 text-[0.60rem]'>@asmita</p>
          </div>
        </div>
        <div className='mt-1 flex items-center justify-center space-x-1'>
          <button
            onClick={onClickSubscribe}
            type='button'
            className='inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Subscribe for $6
          </button>
          <button
            type='button'
            className='inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z' />
            </svg>
          </button>
          <button
            type='button'
            className='inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <button
            type='button'
            className='inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
