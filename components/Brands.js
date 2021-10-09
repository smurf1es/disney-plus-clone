import Image from 'next/image';

const Brands = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="brand group">
        <Image
          alt="brand-disney"
          src="/images/disnep.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="hidden group-hover:inline rounded-lg"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group">
        <Image
          alt="brand-pixar"
          src="/images/pixar.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="hidden group-hover:inline rounded-lg"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group">
        <Image
          alt="brand-marvel"
          src="/images/marvel.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="hidden group-hover:inline rounded-lg"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group">
        <Image
          alt="brand-starwars"
          src="/images/starwars.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="hidden group-hover:inline rounded-lg"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group">
        <Image
          alt="brand-natgeo"
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          className="hidden group-hover:inline rounded-lg"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Brands;
