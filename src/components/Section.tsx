import React from 'react';
import { Element } from 'react-scroll';

import Divider from './Divider';

export interface SectionProps {
  id: string;
  nextId?: string;
  style?: React.CSSProperties;
  className?: string;
  minHeight?: string;
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  id,
  style,
  children,
  className,
  nextId,
  minHeight = 'calc(100vh - 60px)',
}) => {
  return (
    <Element
      id={id}
      name={id}
      className={`pt-4 px-8 m-0 flex flex-col  ${className || ''}`}
      style={{ minHeight: minHeight, ...style }}
    >
      <div className="items-start grow overflow-x-hidden">{children}</div>
      {nextId && <Divider scrollTarget={nextId} className={'relative bottom-5'} />}
    </Element>
  );
};

export default Section;
