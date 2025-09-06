import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  id: string;
};

const HomeContent: React.FC<Props> = ({ children, id }: Props) => {
  return (
    <div
      id={id}
      className="container m-auto min-h-dvh w-full flex flex-col gap-7  max-lg:gap-6 pt-[50px]  bg-color_white dark:bg-bg_main"
    >
      {children}
    </div>
  );
};

export default HomeContent;
