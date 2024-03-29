import { ImageType } from 'constants/images';
import React, { useState, useMemo } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import SimpleReactLightbox, {
  SRLWrapper,
  SRLWrapperOptions,
  useLightbox,
  Callbacks,
  CallbackOpen,
} from 'simple-react-lightbox';

interface ImageGalleryProps {
  images: ImageType[];
  className?: string;
}

const ImageSRLOverlay: React.FC<{ images: ImageType[]; callbacks: Callbacks }> = ({
  images,
  callbacks,
}) => {
  const options: SRLWrapperOptions = {
    settings: {
      overlayColor: 'rgb(0, 0, 0, 0.8)',
      disablePanzoom: true,
      slideAnimationType: 'both',
    },
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: true,
    },
    thumbnails: {
      showThumbnails: true,
    },
  };

  return <SRLWrapper options={options} elements={images} callbacks={callbacks} />;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const { openLightbox } = useLightbox();

  const callbacks: Callbacks = useMemo(
    () => ({
      onLightboxClosed: ({ currentSlide }: CallbackOpen) => setCurrentImg(+currentSlide.id),
    }),
    [],
  );

  const canCycle = useMemo(() => images.length > 1, [images]);

  return (
    <div className="self-center">
      <ImageSRLOverlay images={images} callbacks={callbacks} />
      <div className={`relative flex justify-center`}>
        <button
          style={{ display: canCycle ? 'grid' : 'none' }}
          onClick={() => setCurrentImg((prev) => (prev - 1 + images.length) % images.length)}
          className={'bg-white rounded-full absolute left-0 top-1/2 mx-3'}
        >
          {<MdNavigateBefore size={25} className="text-blue-900" />}
        </button>
        <button onClick={() => openLightbox(currentImg)}>
          <img
            src={images[currentImg].src}
            alt={images[currentImg].caption}
            className={`${className} w-full object-contain`}
            style={{ maxHeight: '50vh' }}
          />
        </button>
        <button
          style={{ display: canCycle ? 'grid' : 'none' }}
          onClick={() => setCurrentImg((prev) => (prev + 1) % images.length)}
          className={' bg-white rounded-full absolute right-0 top-1/2 mx-3'}
        >
          {<MdNavigateNext size={25} className="text-blue-900" />}
        </button>
      </div>
    </div>
  );
};

const withSLR = (Component: React.FC<ImageGalleryProps>): React.FC<ImageGalleryProps> => ({
  ...props
}) => {
  return (
    <SimpleReactLightbox>
      <Component {...props} />
    </SimpleReactLightbox>
  );
};

export default withSLR(ImageGallery);
