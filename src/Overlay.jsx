import { Logo } from '@pmndrs/branding';
import { AiOutlineShopping } from 'react-icons/ai';
import { useSnapshot } from 'valtio';
import { motion, AnimatePresence } from 'framer-motion';

import Customizer from './Customizer';
import Intro from './components/Intro';
import { state } from './store';

function Overlay() {
  const snap = useSnapshot(state);

  const transition = {
    type: 'spring',
    duration: 0.8,
  };
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  return (
    <div className='container'>
      <motion.header
        initial={{
          opacity: 0,
          y: -120,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          duration: 2,
          delay: 0.5,
        }}
      >
        <Logo width='40' height='40' />
        <AiOutlineShopping size={'3em'} />
      </motion.header>

      <AnimatePresence>
        {snap.intro ? (
          <Intro key='main' config={config} />
        ) : (
          <Customizer key='custom' config={config} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Overlay;
