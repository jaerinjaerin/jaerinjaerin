import { useWindowStore, WindowKey } from '@/store/window';
import { X, Minus, Plus, Maximize2 } from 'lucide-react';

export function WindowControls({ target }: { target: WindowKey }) {
  const { closeWindow } = useWindowStore();
  return (
    <div id='window-controls' className='group'>
      <div className='close flex justify-center items-center' onClick={() => closeWindow(target)}>
        <X className='hidden group-hover:block w-3 h-3 p-0.5' color='black' />
      </div>
      <div className='minimize flex justify-center items-center'>
        <Minus className='hidden group-hover:block w-3 h-3 p-0.5' color='black' />
      </div>
      <div className='maximize flex justify-center items-center'>
        <Maximize2 className='hidden group-hover:block w-3 h-3 p-0.5' color='black' />
      </div>
    </div>
  );
}
