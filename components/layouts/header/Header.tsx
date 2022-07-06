export interface IHeader {
  sampleTextProp?: string;
}

const Header: React.FC<IHeader> = ({ sampleTextProp }) => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <nav
          className='relative flex items-center justify-between sm:h-10 md:justify-center'
          aria-label='Global'
        >
          <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='#'>
                <span className='sr-only'>Workflow</span>
                <img
                  className='h-8 w-auto sm:h-10'
                  src='https://tailwindui.com/img/logos/workflow-mark-blue-600.svg'
                  alt=''
                />
              </a>
              <div className='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='hidden md:flex md:space-x-10'>
            <a
              href='#'
              className='font-medium text-gray-500 hover:text-gray-900'
            >
              Product
            </a>

            <a
              href='#'
              className='font-medium text-gray-500 hover:text-gray-900'
            >
              Features
            </a>

            <a
              href='#'
              className='font-medium text-gray-500 hover:text-gray-900'
            >
              Marketplace
            </a>

            <a
              href='#'
              className='font-medium text-gray-500 hover:text-gray-900'
            >
              Company
            </a>
          </div>
          <div className='hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
            <span className='inline-flex rounded-md shadow'>
              <a
                href='#'
                className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50'
              >
                {' '}
                Log in{' '}
              </a>
            </span>
          </div>
        </nav>
      </div>
      <div className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
        <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-blue-600.svg'
                alt=''
              />
            </div>
            <div className='-mr-2'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
              >
                <span className='sr-only'>Close menu</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='px-2 pt-2 pb-3'>
            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              Product
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              Features
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              Marketplace
            </a>

            <a
              href='#'
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            >
              Company
            </a>
          </div>
          <a
            href='#'
            className='block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100'
          >
            {' '}
            Log in{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
