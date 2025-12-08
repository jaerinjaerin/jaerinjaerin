'use client';

import { TECH_STACK } from '@/constants';
import { WindowWrapper } from '../hoc/window-wrapper';
import { Check, Flag } from 'lucide-react';
import { WindowControls } from '../window-controlls';

function Terminal() {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='terminal' />
        <h2 className='font-pretendard'>Tech Stack</h2>
      </div>
      <div className='techstack font-sansCode'>
        <p>
          <span className='font-bold'>@jaerin %</span>
          {' show tech stack'}
        </p>

        <div className='label'>
          <p className='w-32'>Category</p>
          <p>Technologies</p>
        </div>

        <ul className='content'>
          {TECH_STACK.map(({ category, items }) => (
            <li key={category} className='flex items-center'>
              <Check className='check' size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => {
                  return (
                    <li key={i}>
                      {item}
                      {i < items.length - 1 ? ',' : ''}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>

        <div className='footnote'>
          <p>
            <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
          </p>

          <p className='text-black'>
            <Flag size={15} fill='black' />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal');
export default TerminalWindow;
