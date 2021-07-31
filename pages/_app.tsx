import React from 'react';
import { AppProps } from 'next/app';

const MatterApplication: React.FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default MatterApplication;
