"use client"

import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash"


interface ImageComponentProps {
    src: string;
    alt: string;
    width: number;
    height: number;

}


const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, width, height }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(
        () => {
            const img = new Image()
            img.onload = () => {
                setImageLoaded(true)
            }
            img.src = src
        }, [src]
    )

    return (
        <>
            {!imageLoaded && (
                <Blurhash
                    hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}
            <img
                src={src}
                alt={alt}
                style={imageLoaded ? {} : { display: "none" }}
            />
        </>
    );
}

export default ImageComponent;