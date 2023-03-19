import { useState } from "react"
import { Gallery } from "react-grid-gallery"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { images } from "./images"
import './styles/Portfolio.scss'
import { Tab, Tabs } from "react-bootstrap";
import { Container } from "react-bootstrap"

function Photography () {
    
    const [index, setIndex] = useState(-1)

    const currentImage = images[index]
    const nextIndex = (index + 1) % images.length
    const nextImage = images[nextIndex] || currentImage
    const prevIndex = (index + images.length - 1) % images.length
    const prevImage = images[prevIndex] || currentImage
  
    const handleClick = (index, item) => setIndex(index)
    const handleClose = () => setIndex(-1)
    const handleMovePrev = () => setIndex(prevIndex)
    const handleMoveNext = () => setIndex(nextIndex)

   

return(
    <div className="photographyTab">
   <Container className="project-container">

    <Gallery 
      key={Tab}
      rowHeight={300}
      images={images}
      onClick={handleClick}
      enableImageSelection={false}
    />
    {!!currentImage && (
      <Lightbox
      
        enableZoom={false}
        mainSrc={currentImage.src}
        imageTitle={currentImage.caption}
        mainSrcThumbnail={currentImage.src}
        nextSrc={nextImage.src}
        nextSrcThumbnail={nextImage.src}
        prevSrc={prevImage.src}
        prevSrcThumbnail={prevImage.src}
        onCloseRequest={handleClose}
        onMovePrevRequest={handleMovePrev}
        onMoveNextRequest={handleMoveNext}
        animationDisabled={true}
      />
    )}
    </Container>
  </div>
)
    };

export default Photography;
