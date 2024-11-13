import { useGLTF } from '@react-three/drei';

function Shirt(props) {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      ></mesh>
    </group>
  );
}

export default Shirt;

useGLTF.preload('/shirt_baked_collapsed.glb');
