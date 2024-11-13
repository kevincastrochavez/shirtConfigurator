import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { easing } from 'maath';
import { state } from '../store';

function Shirt(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.selectedColor, 0.25, delta)
  );

  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      {...props}
      dispose={null}
    ></mesh>
  );
}

export default Shirt;
