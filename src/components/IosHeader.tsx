import React from 'react';
import Link from 'next/link';

interface IosHeaderProps {
  title: string;
  backHref: string;
}

export default function IosHeader({ title, backHref }: IosHeaderProps) {
  return (
    <div className="sticky top-0 z-20 dark:border-[#232325] h-16 flex items-center justify-center px-4">
      <div className="absolute left-4">
        <Link href={backHref} className="text-[#007AFF] dark:text-[#4F8CFF] text-lg font-normal">&lt; Back</Link>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="text-xl font-semibold text-[#1C1C1E] dark:text-[#F2F2F7] text-center">{title}</h1>
      </div>
    </div>
  );
}
