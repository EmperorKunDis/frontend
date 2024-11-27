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
            <mesh geometry={nodes.Victorian_Ink_Bottle.geometry} material={materials['Victorian Ink Bottle']} position={[-0.259, 0.928, -0.146]} rotation={[Math.PI, -1.213, Math.PI]} scale={0.01} />
            <mesh geometry={nodes.Scroll_LP.geometry} material={materials['01 - Default']} position={[-0.28, 0.878, -0.319]} scale={[0.016, 0.022, 0.016]} />
        </group>
    )
}

useGLTF.preload('/models/untitled-transformed.glb')

export default Model
