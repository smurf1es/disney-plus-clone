import Image from 'next/image';

import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const Header = ({ togglePopup }) => {
  const [session] = useSession();
  const router = useRouter();

  return (
    <header className="sticky flex items-center px-10 bg-[#040714] top-0 z-[1000] h-[72px] md:px-12">
      <Image
        onClick={() => router.push('/')}
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
      />
      {session ? (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <a className="header-link group" href="#">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group" href="#">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group" href="#">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group" href="#">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group" href="#">
            <img
              alt="movie-icon"
              src="/images/movie-icon.svg"
              className="h-5"
            />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group" href="#">
            <img
              alt="series-icon"
              src="/images/series-icon.svg"
              className="h-5"
            />
            <span className="span">Series</span>
          </a>
        </div>
      ) : null}

      {!session ? (
        <button
          onClick={signIn}
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide transition duration-200 hover:bg-white hover:text-[#040714]"
        >
          Login
        </button>
      ) : (
        <div className="ml-auto">
          <img
            onClick={() => togglePopup((value) => !value)}
            className="h-12 w-12 rounded-full object-cover cursor-pointer"
            alt={session.user.name}
            src={session.user.image}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
