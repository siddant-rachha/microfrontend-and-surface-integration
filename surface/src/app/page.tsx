'use client';
// import {MFButton} from 'demo-microfrontend';
import { useEffect } from 'react';

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
        <demo-web-component-test text="This text from web component" desc="This desc comes from WC"></demo-web-component-test>
      </div>
    </div>
  );
}
