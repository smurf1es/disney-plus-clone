import { signOut, useSession } from 'next-auth/client';
import { LogoutIcon, CogIcon, FilmIcon } from '@heroicons/react/solid';

const PopupHeaderMenu = (props) => {
  const [session] = useSession();

  return props.trigger ? (
    <div className="bg-[#0F0F0F] w-[200px] h-[200px] flex items-center justify-center rounded border-[3px] border-[#f9f9f9] border-opacity-10 fixed right-10 md:right-11 z-[99]">
      <ul className="space-y-6 p-5">
        <li>
          <span className="relative text-sm font-medium line-clamp-1">
            Hello, <b className="tracking-wide">{session?.user.name}</b>
          </span>
        </li>

        <li className="hover:underline">
          <a className="header-link" href="#">
            <CogIcon className="h-4" />
            <span className="relative text-sm font-medium">
              Account Settings
            </span>
          </a>
        </li>

        <li className="hover:underline">
          <a className="header-link" href="#">
            <FilmIcon className="h-4" />
            <span className="relative text-sm font-medium">My Watchlist</span>
          </a>
        </li>

        <li className="hover:underline" onClick={signOut}>
          <a className="header-link" href="#">
            <LogoutIcon className="h-4" />
            <span className="relative text-sm font-medium">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  ) : null;
};

export default PopupHeaderMenu;
