import React from 'react';

import SocialBar from './SocialBar';

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="flex flex-col-reverse items-center max-w-6xl gap-1 px-3 pt-4 pb-4 m-auto text-sm text-gray-800 md:flex-row">
        <div className="">© Copyright {new Date().getFullYear()}</div>
        <SocialBar className={'md:flex-auto md:flex-row-reverse'} />
      </div>
    </div>
  );
};

export default Footer;
