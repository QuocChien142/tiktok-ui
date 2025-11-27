import { useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [useFallback, setUseFallback] = useState(false);

    useEffect(() => {
        setUseFallback(false);
    }, [src]);

    const handleError = () => {
        setUseFallback(true);
    };

    // Nếu có src ưu tiên src, không có src thì dùng fallback, không có cả 2 thì dùng noImage
    const displaySrc = useFallback ? customFallback || images.noImage : src || customFallback || images.noImage;

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={displaySrc}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
