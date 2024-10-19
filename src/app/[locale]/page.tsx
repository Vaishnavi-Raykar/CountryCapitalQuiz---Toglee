import { getTranslate } from '@/tolgee/server';
import App from './App';
// import Navbar  from '@/components/Navbar';
import { Navbar } from '@/components/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function IndexPage() {
  const t = await getTranslate();

  return (
    <div className="min-h-screen bg-[#0f1525]">
      <div className="container mx-auto py-4">
        <Navbar />
        <div className="mt-20">
          <App />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
