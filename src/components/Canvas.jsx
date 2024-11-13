import { Canvas } from '@react-three/fiber';

import { Environment, Center, useGLTF } from '@react-three/drei';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasComponent = ({ position = [0, 0, 2.5], fov = 25 }) => (
  <Canvas
    shadows
    gl={{ preserveDrawingBuffer: true }} // needed to allow screenshot or export
    camera={{ position, fov }}
    eventSource={document.getElementById('root')}
    eventPrefix='client'
  >
    <ambientLight intensity={0.5} />
    <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr' />

    <CameraRig>
      <Center>
        <Shirt />
        <Backdrop />
      </Center>
    </CameraRig>
  </Canvas>
);

useGLTF.preload('/shirt_baked_collapsed.glb');

export default CanvasComponent;
