import Image from 'next/image';

const LoadMore = () => {
  return (
    <div>
      <section className="flex justify-center items-center w-full">
        <div>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default LoadMore;