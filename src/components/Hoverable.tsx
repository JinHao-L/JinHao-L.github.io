import React, { createRef } from 'react';
import { createPopper } from '@popperjs/core';

export type HoverIconProps = {
  hoverText: string;
  className?: string;
  canHover?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Hoverable: React.FC<HoverIconProps> = ({
  hoverText,
  className,
  children,
  canHover = true,
  ...buttonProps
}) => {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef = createRef<HTMLButtonElement>();
  const tooltipRef = createRef<HTMLDivElement>();
  const openTooltip = () => {
    createPopper(btnRef.current as HTMLButtonElement, tooltipRef.current as HTMLDivElement, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            padding: 3,
          },
        },
      ],
    });
    setTooltipShow(true);
  };
  const closeTooltip = () => {
    setTooltipShow(false);
  };

  return (
    <>
      <button
        onMouseEnter={canHover ? openTooltip : undefined}
        onTouchStart={canHover ? openTooltip : undefined}
        onMouseLeave={canHover ? closeTooltip : undefined}
        onTouchEnd={canHover ? closeTooltip : undefined}
        ref={btnRef}
        className={className}
        {...buttonProps}
      >
        {children}
      </button>

      {canHover && (
        <div
          className={
            (tooltipShow ? 'opacity-100' : 'opacity-0 hidden sm:block') +
            ' fixed mt-5 border-0 z-50 transition-opacity font-normal leading-normal text-sm max-w-xs break-words bg-transparent'
          }
          ref={tooltipRef}
        >
          <div
            className={
              'text-white opacity-75 font-semibold border-b border-solid uppercase rounded-t-md'
            }
          >
            {hoverText}
          </div>
        </div>
      )}
    </>
  );
};

export default Hoverable;
