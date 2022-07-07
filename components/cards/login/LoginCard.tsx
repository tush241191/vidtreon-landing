export interface ILoginCard {
  toggleLoginModal: () => void;
}

const LoginCard: React.FC<ILoginCard> = (props: ILoginCard) => {
  const { toggleLoginModal } = props;
  return (
    <>
      <div className='min-h-full flex flex-col justify-center'>
        <div className='w-full flex justify-end mb-5'>
          <svg
            onClick={toggleLoginModal}
            xmlns='http://www.w3.org/2000/svg'
            className='text-gray-200 hover:text-gray-100 cursor-pointer mr-3 h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-blue-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-lg font-extrabold text-gray-100'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-xs text-gray-600'>
            Or
            <a
              href='#'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              {' '}
              create your account{' '}
            </a>
          </p>
        </div>

        <div className='mt-4'>
          <div className='bg-transparent py-8 px-4 shadow sm:rounded-lg'>
            <form className='space-y-3' action='#' method='POST'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-xs font-medium text-gray-100'
                >
                  {' '}
                  Email address{' '}
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='appearance-none block w-full px-1 py-1 border-b border-gray-600 bg-transparent shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-xs font-medium text-gray-100'
                >
                  {' '}
                  Password{' '}
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='appearance-none block w-full px-1 py-1 border-b border-gray-600 bg-transparent shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs'
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='text-xs'>
                  <a
                    href='#'
                    className='font-medium text-blue-600 hover:text-blue-500'
                  >
                    {' '}
                    Forgot your password?{' '}
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
