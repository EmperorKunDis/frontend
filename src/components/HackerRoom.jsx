import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/models/untitled-transformed.glb')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Object006.geometry} material={materials.Object006_mtl} position={[0, -0.115, 0]} scale={0.01} />
            <mesh geometry={nodes.Object008.geometry} material={materials.Object008_mtl} position={[0.745, 0, -1.71]} rotation={[Math.PI, -1.195, Math.PI]} scale={0.01} />
            <mesh geometry={nodes.Line048.geometry} material={materials.Line048_mtl} position={[-0.629, 0.912, -1.31]} rotation={[Math.PI / 2, 0, 1.567]} scale={0.01} />
            <mesh geometry={nodes.Box009.geometry} material={materials.Box009_mtl} position={[0.124, -0.149, -0.922]} scale={0.01} />
            <mesh geometry={nodes.Plane002.geometry} material={materials.Plane002_mtl} position={[-0.091, -0.089, -0.817]} scale={0.01} />
            <mesh geometry={nodes.Line054.geometry} material={materials.Line054_mtl} position={[-0.269, 0.902, -1.308]} rotation={[1.571, 0, 1.565]} scale={0.01} />
            <mesh geometry={nodes.Book_02_low.geometry} material={materials.Book_02} position={[-0.309, 0.903, -0.768]} rotation={[0.001, -Math.PI / 2, 0]} scale={0.19} />
            <mesh geometry={nodes.Victorian_Ink_Bottle.geometry} material={materials['Victorian Ink Bottle']} position={[-0.259, 0.928, -0.146]} rotation={[Math.PI, -1.213, Math.PI]} />
            <mesh geometry={nodes.Scroll_LP.geometry} material={materials['01 - Default']} position={[-0.28, 0.878, -0.319]} scale={[0.016, 0.022, 0.016]} />
            <mesh geometry={nodes.Cylinder003.geometry} material={materials['BaseCloth.001']} position={[0.473, 1.336, -0.416]} rotation={[0.964, -0.405, 0.235]} scale={[0.115, 0.016, 0.115]} />
            <mesh geometry={nodes.Object001004.geometry} material={materials['BaseFreska.001']} position={[0.461, 1.373, -0.373]} rotation={[1.976, -1.178, 1.319]} scale={0.021} />
            <mesh geometry={nodes.Object002001.geometry} material={materials['Gems1_top1.001']} position={[0.461, 1.373, -0.373]} rotation={[-2.336, 0.369, -3.115]} scale={0.021} />
            <mesh geometry={nodes.Object002002.geometry} material={materials['Gems2_top2.001']} position={[0.461, 1.373, -0.373]} rotation={[-2.336, 0.369, -3.115]} scale={0.021} />
            <mesh geometry={nodes.Object002003.geometry} material={materials['Gems3_top3.001']} position={[0.461, 1.373, -0.373]} rotation={[-2.336, 0.369, -3.115]} scale={0.021} />
            <mesh geometry={nodes.Object002004.geometry} material={materials['GemsCenterBottom.001']} position={[0.461, 1.373, -0.373]} rotation={[-2.336, 0.369, -3.115]} scale={0.021} />
            <mesh geometry={nodes.Object002005.geometry} material={materials['Gems4_top4.001']} position={[0.461, 1.373, -0.373]} rotation={[-2.336, 0.369, -3.115]} scale={0.021} />
            <mesh geometry={nodes.Object002006.geometry} material={materials['GemsTop.001']} position={[0.461, 1.373, -0.373]} rotation={[-2.336, 0.369, -3.115]} scale={0.021} />
            <mesh geometry={nodes.Object002007.geometry} material={materials['Gems5_Bottom_top1.001']} position={[0.461, 1.373, -0.373]} rotation={[-2.336, 0.369, -3.115]} scale={0.021} />
            <mesh geometry={nodes.Object004001.geometry} material={materials['BaseMetal.001']} position={[0.461, 1.373, -0.373]} rotation={[-1.855, 1.382, 2.901]} scale={0.021} />
            <mesh geometry={nodes.polySurface17001.geometry} material={materials.lambert1} position={[0.31, 0.477, -0.812]} rotation={[1.702, -0.364, -2.769]} scale={0.007} />
            <mesh geometry={nodes.Retopo_Cylinder001.geometry} material={materials['BaseRing.001']} position={[0.487, 1.295, -0.465]} rotation={[0.964, -0.405, 0.235]} scale={[0.115, 0.016, 0.115]} />
            <mesh geometry={nodes.Retopo_Marquise001.geometry} material={materials['Material_023.001']} position={[0.487, 1.295, -0.465]} rotation={[-1.19, 1.328, 2.022]} scale={0} />
            <mesh geometry={nodes.Retopo_Round009.geometry} material={materials['BseTower.001']} position={[0.456, 1.386, -0.356]} rotation={[-1.824, -0.891, -0.21]} scale={0.01} />
            <mesh geometry={nodes.Sphere005.geometry} material={materials['Ruby.001']} position={[0.488, 1.295, -0.465]} rotation={[0.715, 0.615, 0.265]} scale={0.002} />
        </group>
    )
}

useGLTF.preload('/models/untitled-transformed.glb')

export default Model;