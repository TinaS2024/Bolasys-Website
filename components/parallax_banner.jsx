{/*https://dev.to/nyctonio/parallax-in-nextjs-using-react-scroll-parallax-2110 */}

import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import React, {useRef} from "react";
import Image from "next/image";


function ParallaxBanner() {
    const index = () => {
        const target = useRef(null);

        const bild1 = useParallax({
            speed: 500,
            targetElement: target.current,

        });

        const bild2 = useParallax({
            speed: 200,
            targetElement: target.current,

        });
    };
    return (
        <ParallaxProvider scrollAxis="vertical">
       

        </ParallaxProvider>

    );
}

export default ParallaxBanner;