
import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash"

export default function ImageComponent({ src }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect {() => {
        const img = new Image()
        img.onLoad = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src]}

    return {
        <img
            src={src}
            alt=""
        />
    };
}