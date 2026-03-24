import { useMemo, useState } from 'react'
import { clsx } from 'clsx'
import styles from './ProductGallery.module.scss'

const ProductGallery = ({ imageUrl, imagesUrl, title }) => {
  const [selectedImage, setSelectedImage] = useState('')

  const galleryImages = useMemo(() => {
    const imgs = []
    if (imageUrl) imgs.push(imageUrl)
    if (imagesUrl && Array.isArray(imagesUrl)) {
      imgs.push(...imagesUrl)
    }
    return [...new Set(imgs.filter(Boolean))].slice(0, 4)
  }, [imageUrl, imagesUrl])

  return (
    <div className={styles.productGallery}>
      <div className={styles.mainImage}>
        <img src={selectedImage || imageUrl} alt={title} />
      </div>

      <div className={styles.thumbnailList}>
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={clsx(styles.thumbnail, {
              [styles.active]: selectedImage === img,
            })}
            onClick={() => setSelectedImage(img)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setSelectedImage(img)
            }}
          >
            <img src={img} alt={`${title}-${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
