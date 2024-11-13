import { Logo } from '@pmndrs/branding';
import Intro from './components/Intro';
import Customizer from './Customizer';
import { AiOutlineShopping } from 'react-icons/ai';
import { useSnapshot } from 'valtio';
import { state } from './store';

function Overlay() {
  const snap = useSnapshot(state);

  return (
    <div className='container'>
      <header>
        <Logo width='40' height='40' />
        <AiOutlineShopping size={'3em'} />
      </header>

      {snap.intro ? <Intro /> : <Customizer />}
    </div>
  );
}

export default Overlay;
