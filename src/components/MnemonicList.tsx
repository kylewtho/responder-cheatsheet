import React from 'react';

export interface MnemonicItem {
  letter: string;
  title: string;
  desc: string;
}

interface MnemonicListProps {
  items: MnemonicItem[];
}

export default function MnemonicList({ items }: MnemonicListProps) {
  return (
    <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm overflow-hidden">
      {items.map((item, idx) => (
        <div
          key={item.letter + item.title}
          className={`flex items-start px-4 py-4 ${idx !== items.length - 1 ? 'border-b border-[#E5E5EA] dark:border-[#232325]' : ''}`}
        >
          <span className="flex items-center justify-center min-w-9 h-9 px-1.5 rounded-md bg-[#E9E9EB] dark:bg-[#232325] mr-4 text-lg font-bold text-red-700 dark:text-red-400 select-none">
            {item.letter}
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-[17px] font-semibold text-[#1C1C1E] dark:text-[#F2F2F7]">{item.title}</div>
            <div className="text-sm text-[#8E8E93] dark:text-[#A1A1AA] mt-0.5">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
