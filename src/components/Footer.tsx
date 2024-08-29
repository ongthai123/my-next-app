import Image from "next/image";

const Footer = () => {
  return (
    <footer className="sm:pm-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">
        @2024 Anime 24h
      </p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div>
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  )
}

export default Footer;