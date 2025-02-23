'use client';
import React, { useEffect } from 'react';

interface WebComponentProps {
  text: string;
  desc: string;
}

const WebComponentLoader: React.FC<WebComponentProps> = ({ text, desc }) => {
  useEffect(() => {
    // import('demo-web-component-test');
  }, []);

  return React.createElement('demo-web-component-test', { text, desc });
};

export default WebComponentLoader;
