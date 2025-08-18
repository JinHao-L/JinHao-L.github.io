import React from 'react';

import Hoverable from './Hoverable';

export interface LinkButtonProps {
  url: string;
  disabled?: boolean;
  disabledHint?: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ url, disabled, disabledHint, children }) => {
  if (disabled) {
    return (
      <Hoverable
        hoverText={disabledHint || 'Site is no longer live :('}
        canHover={!!disabled}
        className="px-4 py-2 mx-3 my-1 font-normal text-white bg-transparent border border-white rounded-sm hover:bg-titan-white-500 hover:text-gray-800 hover:border-transparent cursor-not-allowed"
      >
        {children}
      </Hoverable>
    );
  }

  return (
    <a target="_blank" href={url} rel="noreferrer" tabIndex={-1}>
      <button className="px-4 py-2 mx-3 my-1 font-normal text-white bg-transparent border border-white rounded-sm hover:bg-titan-white-500 hover:text-gray-800 hover:border-transparent">
        {children}
      </button>
    </a>
  );
};

export default LinkButton;
