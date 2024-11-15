import { AiOutlineHighlight } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { state } from '../store';
import './intro.css';

function Intro({ config }) {
  return (
    <motion.section {...config} key='main'>
      <div className='section--container'>
        <div>
          <h1>LET'S DO IT.</h1>
        </div>
        <div className='support--content'>
          <div>
            <p>
              Create your unique and exclusive shirt with our brand-new 3D
              customization tool. <strong>Unleash your imagination</strong> and
              define your own style.
            </p>
            <button
              style={{ background: 'black' }}
              onClick={() => (state.intro = false)}
            >
              CUSTOMIZE IT <AiOutlineHighlight size='1.3em' />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Intro;
