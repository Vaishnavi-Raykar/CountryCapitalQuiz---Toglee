import { getTranslate } from '@/tolgee/server';
import App from './App';
import {Navbar} from '@/components/Navbar';

export default async function IndexPage() {
  const t = await getTranslate();

  return (
    <div className=" bg-slate-900 min-h-screen">
      <div className="container py-4 ">
       <div className='z-100 '>
       <Navbar />
       </div>
        <div className="mt-14 bg-[#0f1525]]">
          <App />
        </div>
      </div>
    </div>
  );
}
