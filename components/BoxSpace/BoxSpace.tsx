import { useState, useRef } from "react"
import { getPositionsIn3DSpace } from "../../utils/utils"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styles from '../../styles/Home.module.css'

function Box(props: any) {
  const mesh = useRef()
  const [active, setActive] = useState(false)

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

const BoxSpace = () => {
  const [boxes] = useState(() => getPositionsIn3DSpace())
  
  return (
    <Canvas className={styles.threeCanvas}>
      <ambientLight intensity={1} />
      {
        boxes.map(({x, y, z}, index) => {
          return (
            <Box key={index} position={[x, y, z]} />
          )
        })
      }
      <OrbitControls />
    </Canvas>
  )
}

export default BoxSpace