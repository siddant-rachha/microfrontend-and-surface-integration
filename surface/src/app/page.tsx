'use client';
// import {MFButton} from 'demo-microfrontend';
import React from 'react';
// import WebComponentLoader from './WebComponentLoader';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'demo-web-component-test': { text?: string; desc?: string };
      }
    }
  }
}

export default function Home(): React.JSX.Element {

  return (
    <div style={{padding: '10px'}}>
      <h1>Surface</h1>
      <div style={{border: '1px solid black', padding: '10px'}}>
        {/* <MFButton text='This text comes from suface' /> */}
        {/* <WebComponentLoader 
          text='This text from web component' 
          desc='This desc comes from WC' 
        /> */}
        {/* <WebComponentLoader 
          text='This text from web component script tag' 
          desc='This desc comes from WC script tag' 
        /> */}

        <demo-web-component-test text='This text from web component IntrinsicElements' desc='This desc comes from WC IntrinsicElements' />
      </div>
    </div>
  );
}
