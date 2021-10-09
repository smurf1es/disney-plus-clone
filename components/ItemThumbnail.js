import Image from 'next/image';
import { useRouter } from 'next/router';

const ItemThumbnail = ({ result, title }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();

  const RenderImage = () => {
    return (
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
    );
  };

  switch (title) {
    case 'Popular Movies':
      return (
        <div
          className="thumbnail"
          onClick={() => router.push(`/movie/${result.id}`)}
        >
          <RenderImage />
        </div>
      );
    case 'Popular Shows':
      return (
        <div
          className="thumbnail"
          onClick={() => router.push(`/show/${result.id}`)}
        >
          <RenderImage />
        </div>
      );
    case 'Top Rated Movies':
      return (
        <div
          className="thumbnail"
          onClick={() => router.push(`/movie/${result.id}`)}
        >
          <RenderImage />
        </div>
      );
    case 'Top Rated Shows':
      return (
        <div
          className="thumbnail"
          onClick={() => router.push(`/show/${result.id}`)}
        >
          <RenderImage />
        </div>
      );
    default:
      return null;
  }
};

export default ItemThumbnail;
