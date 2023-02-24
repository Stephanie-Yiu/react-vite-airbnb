import { Icon } from '@iconify/react';
import airbnbIcon from '@iconify/icons-simple-icons/airbnb';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="flex justify-between header-color">
        <a
          href=""
          className="flex items-center gap-1 text-primary">
          <Icon
            icon={airbnbIcon}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl">
            Airbnb
          </span>
        </a>

        <div
          className="  font-bold 
            flex gap-2 border border-gray-300
            rounded-full py-2 px-4 shadow-md
            shadow-gray-300">
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-primary text-white p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        {/*///////////////////////////////////////////////// */}

        <Link
          to={'/login'}
          className="
          flex gap-2 border border-gray-300 
          rounded-full py-2 px-4  align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8   text-gray-500 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8  text-gray-500 rounded-full"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116
               0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2
                4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010
                 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </header>
    </div>
  );
}
