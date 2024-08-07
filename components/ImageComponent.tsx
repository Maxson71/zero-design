"use client"

import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash"


interface ImageComponentProps {
    src: string;
    alt: string;
}


const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
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
                <div
                    className="loading-img animate-pulse bg-default-300 flex flex-auto"
                ></div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                style={imageLoaded ? {} : { display: "none" }}
            />
        </>
    );
}

export default ImageComponent;