'use client';

import { fetchAnime } from '@/app/action';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Card, { AnimeProp } from './Card';

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (inView) {
      fetchAnime(page)
        .then((res) => {
          setData([...data, ...res])
          setPage(page + 1);
        })
    }
  }, [inView, data]);

  return (
    <div>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <Card key={item.id} anime={item} index={index} />
        ))}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
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