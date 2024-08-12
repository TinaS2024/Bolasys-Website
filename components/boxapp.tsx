"use client"
/* React Three Fiber: https://www.dhiwise.com/post/how-to-build-graphics-with-react-three-fiber-typescript 
https://www.youtube.com/watch?v=_OwJV2xL8M8*/

import { useRef } from "react";
import { useFrame,} from "@react-three/fiber";
import { Mesh, SphereGeometry } from "three";

export interface UserProps
{
    x:number,
    y:number,
    z:number,
    color: string,
}

function BoxApp({x,y,z,color}:UserProps) {
    const mesh = useRef<Mesh>(null!);

    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
        mesh.current.rotation.z += 0.01;
     });
  
    return (
        <>
      <mesh ref={mesh}>
        <boxGeometry args={[x,y,z]} />
        <meshBasicMaterial color={color}/>
        </mesh>
        </>
    );
  }

  export default BoxApp;