import { useState } from 'react';
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Brands from '../components/Brands';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import PopupHeaderMenu from '../components/PopupHeaderMenu';

export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  const [session] = useSession();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Head>
        <title>Disney+ FAKE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header togglePopup={setShowPopup} />

      {session ? <PopupHeaderMenu trigger={showPopup} /> : null}

      {!session ? (
        <Hero />
      ) : (
        <main className="main">
          <Carousel />
          <Brands />
          <Collection results={popularMovies.results} title="Popular Movies" />
          <Collection results={popularShows.results} title="Popular Shows" />
          <Collection
            results={top_ratedMovies.results}
            title="Top Rated Movies"
          />
          <Collection
            results={top_ratedShows.results}
            title="Top Rated Shows"
          />
        </main>
      )}

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
  ]);

  return {
    props: {
      session,
      popularMovies: popularMoviesRes,
      popularShows: popularShowsRes,
      top_ratedMovies: top_ratedMoviesRes,
      top_ratedShows: top_ratedShowsRes,
    },
  };
}
