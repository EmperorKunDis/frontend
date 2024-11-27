import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useState, useRef } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { easing } from 'maath';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import { Selection, EffectComposer, Outline, Select } from '@react-three/postprocessing';

function Model({ onNavigate, ...props }) {
    const { nodes, materials } = useGLTF('/models/untitled-transformed.glb');
    const [hovered, setHovered] = useState(null);
    const groupRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time / 4) / 8;
        }
    });

    const interactiveMeshes = [
        { 
            geometry: nodes.Book_02_low.geometry, 
            material: materials.Book_02, 
            position: [-0.309, 0.903, -0.768], 
            rotation: [0.001, -Math.PI / 2, 0], 
            scale: 0.19, 
            name: "Book",
            objectId: "Book",
            title: "Media"
        },
        { 
            geometry: nodes.Line048.geometry, 
            material: materials.Line048_mtl, 
            position: [-0.629, 0.912, -1.31], 
            rotation: [Math.PI / 2, 0, 1.567], 
            scale: 0.01, 
            name: "Line048",
            objectId: "Line048",
            title: "LBO Login"
        },
        { 
            geometry: nodes.Line054.geometry, 
            material: materials.Line054_mtl, 
            position: [-0.269, 0.902, -1.308], 
            rotation: [1.571, 0, 1.565], 
            scale: 0.01, 
            name: "Line054",
            objectId: "Line054",
            title: "SVCI Login"
        },
        { 
            geometry: nodes.Object004001.geometry, 
            material: materials['BaseMetal.001'], 
            position: [0.461, 1.373, -0.373], 
            rotation: [-1.855, 1.382, 2.901], 
            scale: 0.021, 
            name: "Object004001",
            objectId: "Object004001",
            title: "Leadership"
        },
        { 
            geometry: nodes.polySurface17001.geometry, 
            material: materials.lambert1, 
            position: [0.31, 0.477, -0.812], 
            rotation: [1.702, -0.364, -2.769], 
            scale: 0.007, 
            name: "polySurface17001",
            objectId: "polySurface17001",
            title: "Where We Are"
        },
        { 
            geometry: nodes.Scroll_LP.geometry, 
            material: materials['01 - Default'], 
            position: [-0.28, 0.878, -0.319], 
            scale: [0.016, 0.022, 0.016], 
            name: "Scroll",
            objectId: "Scroll",
            title: "Contact"
        },
        {
            geometry: nodes.Object008.geometry,
            material: materials.Object008_mtl,
            position: [0.745, 0, -1.71],
            rotation: [Math.PI, -1.195, Math.PI],
            scale: 0.01,
            name: "Object008",
            objectId: "Object008",
            title: "Join Us"
        }
    ];

    const otherMeshes = [
        { geometry: nodes.Object006.geometry, material: materials.Object006_mtl, position: [0, -0.115, 0], scale: 0.01, name: "Object006" },
        { geometry: nodes.Object008.geometry, material: materials.Object008_mtl, position: [0.745, 0, -1.71], rotation: [Math.PI, -1.195, Math.PI], scale: 0.01, name: "Object008" },
        { geometry: nodes.Box009.geometry, material: materials.Box009_mtl, position: [0.124, -0.149, -0.922], scale: 0.01, name: "Box009" },
        { geometry: nodes.Plane002.geometry, material: materials.Plane002_mtl, position: [-0.091, -0.089, -0.817], scale: 0.01, name: "Plane002" },
        { geometry: nodes.Victorian_Ink_Bottle.geometry, material: materials['Victorian Ink Bottle'], position: [-0.259, 0.928, -0.146], rotation: [Math.PI, -1.213, Math.PI], name: "InkBottle" },
        { geometry: nodes.Cylinder003.geometry, material: materials['BaseCloth.001'], position: [0.473, 1.336, -0.416], rotation: [0.964, -0.405, 0.235], scale: [0.115, 0.016, 0.115], name: "Cylinder003" },
        { geometry: nodes.Object001004.geometry, material: materials['BaseFreska.001'], position: [0.461, 1.373, -0.373], rotation: [1.976, -1.178, 1.319], scale: 0.021, name: "Object001004" },
        { geometry: nodes.Object002001.geometry, material: materials['Gems1_top1.001'], position: [0.461, 1.373, -0.373], rotation: [-2.336, 0.369, -3.115], scale: 0.021, name: "Object002001" },
        { geometry: nodes.Object002002.geometry, material: materials['Gems2_top2.001'], position: [0.461, 1.373, -0.373], rotation: [-2.336, 0.369, -3.115], scale: 0.021, name: "Object002002" },
        { geometry: nodes.Object002003.geometry, material: materials['Gems3_top3.001'], position: [0.461, 1.373, -0.373], rotation: [-2.336, 0.369, -3.115], scale: 0.021, name: "Object002003" },
        { geometry: nodes.Object002004.geometry, material: materials['GemsCenterBottom.001'], position: [0.461, 1.373, -0.373], rotation: [-2.336, 0.369, -3.115], scale: 0.021, name: "Object002004" },
        { geometry: nodes.Object002005.geometry, material: materials['Gems4_top4.001'], position: [0.461, 1.373, -0.373], rotation: [-2.336, 0.369, -3.115], scale: 0.021, name: "Object002005" },
        { geometry: nodes.Object002006.geometry, material: materials['GemsTop.001'], position: [0.461, 1.373, -0.373], rotation: [-2.336, 0.369, -3.115], scale: 0.021, name: "Object002006" },
        { geometry: nodes.Object002007.geometry, material: materials['Gems5_Bottom_top1.001'], position: [0.461, 1.373, -0.373], rotation: [-2.336, 0.369, -3.115], scale: 0.021, name: "Object002007" },
        { geometry: nodes.Retopo_Cylinder001.geometry, material: materials['BaseRing.001'], position: [0.487, 1.295, -0.465], rotation: [0.964, -0.405, 0.235], scale: [0.115, 0.016, 0.115], name: "Retopo_Cylinder001" },
        { geometry: nodes.Retopo_Marquise001.geometry, material: materials['Material_023.001'], position: [0.487, 1.295, -0.465], rotation: [-1.19, 1.328, 2.022], scale: 0, name: "Retopo_Marquise001" },
        { geometry: nodes.Retopo_Round009.geometry, material: materials['BseTower.001'], position: [0.456, 1.386, -0.356], rotation: [-1.824, -0.891, -0.21], scale: 0.01, name: "Retopo_Round009" },
        { geometry: nodes.Sphere005.geometry, material: materials['Ruby.001'], position: [0.488, 1.295, -0.465], rotation: [0.715, 0.615, 0.265], scale: 0.002, name: "Sphere005" }
    ];

    const handleMeshClick = (objectId, title) => {
        onNavigate(objectId);
        console.log(`Navigating to ${title} section`);
    };

    const triggerNavbarShine = (meshName) => {
        const navMapping = {
            'Line054': 'SVCI',
            'Line048': 'LBO',
            'Book': 'Media',
            'Object004001': 'Leadership',
            'polySurface17001': 'Where We Are',
            'Scroll': 'Contact',
            'Object008': 'Join us'
        };

        const navItem = navMapping[meshName];
        if (navItem) {
            const navElement = document.querySelector(`[data-nav-item="${navItem}"]`);
            if (navElement) {
                navElement.classList.add('shine-active');
            }
        }
    };

    const removeNavbarShine = (meshName) => {
        const navMapping = {
            'Line054': 'SVCI',
            'Line048': 'LBO',
            'Book': 'Media',
            'Object004001': 'Leadership',
            'polySurface17001': 'Where We Are',
            'Scroll': 'Contact',
            'Object008': 'Join us'
        };

        const navItem = navMapping[meshName];
        if (navItem) {
            const navElement = document.querySelector(`[data-nav-item="${navItem}"]`);
            if (navElement) {
                navElement.classList.remove('shine-active');
            }
        }
    };

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <Selection>
                {interactiveMeshes.map((mesh, index) => (
                    <Select enabled={hovered === mesh.name} key={index}>
                        <mesh
                            geometry={mesh.geometry}
                            material={mesh.material}
                            position={mesh.position}
                            rotation={mesh.rotation}
                            scale={mesh.scale}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleMeshClick(mesh.objectId, mesh.title);
                            }}
                            onPointerOver={(e) => {
                                e.stopPropagation();
                                setHovered(mesh.name);
                                document.body.style.cursor = 'pointer';
                                triggerNavbarShine(mesh.name);
                            }}
                            onPointerOut={(e) => {
                                e.stopPropagation();
                                setHovered(null);
                                document.body.style.cursor = 'default';
                                removeNavbarShine(mesh.name);
                            }}
                        >
                            {/* Removed hover text display */}
                        </mesh>
                    </Select>
                ))}
                {otherMeshes.map((mesh, index) => (
                    <mesh
                        geometry={mesh.geometry}
                        material={mesh.material}
                        position={mesh.position}
                        rotation={mesh.rotation}
                        scale={mesh.scale}
                        key={index}
                    />
                ))}
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline 
                        blur
                        visibleEdgeColor="white"
                        edgeStrength={100}
                        width={1000}
                        hiddenEdgeColor="white"
                    />
                </EffectComposer>
            </Selection>
        </group>
    );
}

useGLTF.preload('/models/untitled-transformed.glb');

function CameraRig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [
            -8.5, 
            (100.2 + state.pointer.y * state.viewport.width) / 30,
            -5.5 + (state.pointer.x * state.viewport.height) / 20], 
            0.25, delta)
        state.camera.lookAt(-5, 2, -5.1)
    })
}

const Hero = ({ onNavigate }) => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isDesktop);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl font-medium text-neutral-600 text-center font-generalsans">
                    Mount and Blade 2 : Bannerlord Group
                </p>
                <p className="hero_tag text-white">Czechoslovak Corps</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <CameraRig />
                        <PerspectiveCamera position={[50, 20, 1040]} zoom={100} fov={90} />
                        <Model
                            position={sizes.deskPosition}
                            rotation={[0, 120, 0]}
                            scale={(sizes.deskScale) * 60}
                            onNavigate={onNavigate}
                        />
                        <ambientLight intensity={5} />
                        <directionalLight position={[10, 10, 10]} intensity={2.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero
