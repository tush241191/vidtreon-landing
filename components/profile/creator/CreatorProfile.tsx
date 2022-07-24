export interface ICreatorProfile {
  onClickSubscribe: () => void;
}

const CreatorProfile: React.FC<ICreatorProfile> = (props: ICreatorProfile) => {
  const { onClickSubscribe } = props;

  return (
    <div className="h-1/4 rounded-t-3xl space-y-4 bg-cover bg-center bg-no-repeat bg-[url('/car-1.jpeg')]">
      <div className='py-2 h-full bg-gradient-to-t from-black to-none'>
        <img
          className='mx-auto h-16 w-16 rounded-full'
          src='https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
          alt=''
        />
        <div className='text-center'>
          <div className='font-medium'>
            <h3 className='text-[0.60rem] text-gray-50'>Asmita Kharat</h3>
          </div>
        </div>
        <div className='mt-2 flex items-center justify-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-200'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
