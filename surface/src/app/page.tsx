'use client';
// import {MFButton} from 'demo-microfrontend';
import React, { useEffect } from 'react';
import WebComponentLoader from './WebComponentLoader';

export default function Home() {

  useEffect(() => {
    import('demo-web-component-test')
  }
  , []);

  return (
    <div style={{padding: '10px'}}>
      <h1>Surface</h1>
      <div style={{border: '1px solid black', padding: '10px'}}>
        {/* <MFButton text='This text comes from suface' /> */}
        <WebComponentLoader 
          text='This text from web component' 
          desc='This desc comes from WC' 
        />
      </div>
    </div>
  );
}
