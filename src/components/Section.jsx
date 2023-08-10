import { useState } from 'react';
import Timer from './Timer';

const Section = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const initialTime1 = 25 * 60;
  const initialTime2 = 5 * 60;
  const initialTime3 = 15 * 60;

  return (
    <div className='flex justify-center items-center'>
      <div className='bg-[#386e72] w-[600px] p-7 rounded-lg mt-7'>
        <div className='flex items-center flex-col '>
          <ul className='flex '>
            <li
              className={`${
                activeTab === 'tab1'
                  ? 'font-bold bg-[#1c5e63] rounded-[4px]'
                  : 'font-medium'
              } px-3 py-2 cursor-pointer text-[18px] text-[#fff]`}
              onClick={() => handleTabClick('tab1')}
            >
              Focus
            </li>
            <li
              className={`${
                activeTab === 'tab2'
                  ? 'font-bold bg-[#1c5e63] rounded-[4px]'
                  : 'font-medium'
              } px-3 py-2  cursor-pointer text-[18px] text-[#fff]`}
              onClick={() => handleTabClick('tab2')}
            >
              Short Break
            </li>
            <li
              className={`${
                activeTab === 'tab3'
                  ? 'font-bold bg-[#1c5e63] rounded-[4px]'
                  : 'font-medium'
              } px-3 py-2  cursor-pointer text-[18px] text-[#fff]`}
              onClick={() => handleTabClick('tab3')}
            >
              Long Break
            </li>
          </ul>
        </div>
        <div className=''>
          {activeTab === 'tab1' && <Timer initialTime={initialTime1} />}
          {activeTab === 'tab2' && <Timer initialTime={initialTime2} />}
          {activeTab === 'tab3' && <Timer initialTime={initialTime3} />}
        </div>
      </div>
    </div>
  );
};

export default Section;
