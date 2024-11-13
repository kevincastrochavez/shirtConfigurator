import { AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai';
import { useSnapshot } from 'valtio';

import { state } from './store';
import './customizer.css';

function Customizer() {
  const snap = useSnapshot(state);

  return (
    <section key='custom'>
      <div className='customizer'>
        <div className='color-options'>
          {snap?.colors?.map((color) => (
            <div
              key={color}
              className='circle'
              style={{ background: color }}
              onClick={() => (state.selectedColor = color)}
            ></div>
          ))}
        </div>
        <div className='decals'>
          <div className='decals--container'>
            {snap?.decals.map((decal) => (
              <div
                key={decal}
                className='decal'
                onClick={() => (state.selectedDecal = decal)}
              >
                <img src={decal + '_thumb.png'} alt='brand' />
              </div>
            ))}
          </div>
        </div>
        <button
          className='share'
          style={{ background: snap.selectedColor }}
          onClick={() => {
            const link = document.createElement('a');
            link.setAttribute('download', 'canvas.png');
            link.setAttribute(
              'href',
              document
                .querySelector('canvas')
                .toDataURL('image/png')
                .replace('image/png', 'image/octet-stream')
            );
            link.click();
          }}
        >
          DOWNLOAD
          <AiFillCamera size='1.3em' />
        </button>
        <button
          className='exit'
          style={{ background: snap.selectedColor }}
          onClick={() => (state.intro = true)}
        >
          GO BACK
          <AiOutlineArrowLeft size='1.3em' />
        </button>
      </div>
    </section>
  );
}

export default Customizer;
