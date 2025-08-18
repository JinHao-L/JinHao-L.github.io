import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { animateScroll } from 'react-scroll';

const COLOR = 'titan-white';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;
    const toggleVisible = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
          setVisible(true);
        } else if (scrolled <= 300) {
          setVisible(false);
        }
      }, 100);
    };

    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const dynamicClassName = visible ? 'inline text-gray-800' : 'hidden';

  return (
    <button
      onClick={() => {
        animateScroll.scrollToTop({ duration: 500, smooth: true });
      }}
      className={`${dynamicClassName} fixed bottom-6 items-center flex justify-center right-6 p-0 w-12 h-12 md:bottom-10 bg-${COLOR}-500 rounded-full z-50 hover:bg-${COLOR}-700 active:shadow-lg mouse shadow-sm transition ease-in duration-200 focus:outline-hidden`}
    >
      <MdKeyboardArrowUp size={30} />
    </button>
  );
};

export default ScrollToTop;
