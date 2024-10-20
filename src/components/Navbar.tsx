// import React from 'react';
// import { LangSelector } from './LangSelector';
// import { getTranslate } from '@/tolgee/server';

// export const Navbar = async ({ children }: React.PropsWithChildren) => {
//   const t = await getTranslate();
//   return (
//     <nav className="bg-[#0f1525]] text-white fixed top-0  w-full justify-center items-center  shadow-xl z-50">
//     <div className=" sm:px-6 lg:px-8">
//       <div className="flex justify-between items-center w-full h-20">
//         <div className="flex items-center">
//           <div className="text-2xl font-bold flex color-white items-center gap-5">
//           <img src="/img/capital.svg" className='h-8'/>
//           <h1 className="text-2xl font-normal">{t('app-title')}</h1>

//             {children}
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <span className='max-sm:hidden'>{t('select-lang')}</span>
//           <LangSelector />
//         </div>
//       </div>
//     </div>
//   </nav>
//   );
// };




'use client'
import React, { useEffect, useState } from 'react';
import { LangSelector } from './LangSelector';
import { getTranslate } from '@/tolgee/server';

export const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [t, setT] = useState<any>(null); // Replace 'any' with the actual type of translation

  useEffect(() => {
    const fetchTranslations = async () => {
      const translate = await getTranslate();
      setT(() => translate);
    };
    fetchTranslations();
  }, []);

  if (!t) return <div>Loading...</div>;

  return (
    <nav className="bg-[#0f1525] text-white fixed top-0 w-full justify-center items-center shadow-xl z-50">
      <div className="sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex color-white items-center gap-5">
              <img src="/img/capital.svg" className="h-8" />
              <h1 className="text-2xl font-normal">{t('app-title')}</h1>
              {children}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="max-sm:hidden">{t('select-lang')}</span>
            <LangSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};
