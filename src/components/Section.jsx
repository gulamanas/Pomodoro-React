import { useState } from 'react';
import Timer from './Timer';

const Section = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const initialTime1 = 25 * 60;
  const initialTime2 = 5 * 60;
  const initialTime3 = 20 * 60;
  return (
    <>
      <div className='mt-7 flex items-center border-red-500 border flex-col'>
        <ul className='flex   border-blue-500 border'>
          <li
            className={`${
              activeTab === 'tab1' ? 'active bg-gray-200' : ''
            } p-3 border-2 cursor-pointer`}
            onClick={() => handleTabClick('tab1')}
          >
            Work Time
          </li>
          <li
            className={`${
              activeTab === 'tab2' ? 'active bg-gray-200' : ''
            } p-3 border-2 cursor-pointer`}
            onClick={() => handleTabClick('tab2')}
          >
            Short Break
          </li>
          <li
            className={`${
              activeTab === 'tab3' ? 'active bg-gray-200' : ''
            } p-3 border-2 cursor-pointer`}
            onClick={() => handleTabClick('tab3')}
          >
            Long Break
          </li>
        </ul>
      </div>
      <div>
        {activeTab === 'tab1' && <Timer initialTime={initialTime1} />}
        {/* {activeTab === 'tab1' && <WorkTime time='5'/>} */}
        {activeTab === 'tab2' && <Timer initialTime={initialTime2} />}
        {activeTab === 'tab3' && <Timer initialTime={initialTime3} />}
        {/* {activeTab === 'tab3' && <LongBreak />} */}
      </div>
    </>
  );
};

export default Section;
