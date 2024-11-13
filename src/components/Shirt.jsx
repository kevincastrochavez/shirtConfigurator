import { useGLTF } from '@react-three/drei';

function Shirt(props) {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');

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
