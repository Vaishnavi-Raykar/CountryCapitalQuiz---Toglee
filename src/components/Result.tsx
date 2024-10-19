// import React from 'react';
// import { useTranslate } from '@tolgee/react';

// interface ResultInterface { score: number; restart: () => void }

// const Result: React.FC<ResultInterface> = ({ score, restart }) => {
//   const { t } = useTranslate();
//   return (
//     <div>
//       <p>{t('game-over')}</p>
//       <p>{t('your-score')} {score}</p>
//       <p data-testid="outcome">{score >= 7 ? t('you-win') : t('you-lose')}</p>
//       <button className='restart-button' onClick={restart}>{t('restart-quiz')}</button>
//     </div>
//   );
// };

// export default Result;




import React from 'react';
import { useTranslate } from '@tolgee/react';

interface ResultInterface { 
  score: number; 
  restart: () => void; 
}

const Result: React.FC<ResultInterface> = ({ score, restart }) => {
  const { t } = useTranslate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p className="text-2xl font-semibold mb-4">{t('game-over')}</p>
      <p className="text-xl mb-6">{t('your-score')} {score}</p>
      <p data-testid="outcome" className="text-xl font-bold mb-8">
        {score >= 7 ? t('you-win') : t('you-lose')}
      </p>
      <button 
        className="bg-indigo-800 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        onClick={restart}
      >
        {t('restart-quiz')}
      </button>
    </div>
  );
};

export default Result;
