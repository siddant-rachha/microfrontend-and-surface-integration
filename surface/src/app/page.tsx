'use client';
// import {MFButton} from 'demo-microfrontend';
import React from 'react';
import WebComponentLoader from './WebComponentLoader';

export default function Home() {

  return (
    <div style={{padding: '10px'}}>
      <h1>Surface</h1>
      <div style={{border: '1px solid black', padding: '10px'}}>
        {/* <MFButton text='This text comes from suface' /> */}
        {/* <WebComponentLoader 
          text='This text from web component' 
          desc='This desc comes from WC' 
        /> */}
        <WebComponentLoader 
          text='This text from web component script tag' 
          desc='This desc comes from WC script tag' 
        />

        {/* this throw typescript error, needs ts fix */}
        {/* <demo-web-component-test text='This text from web component test' desc='This desc comes from WC test' /> */}
      </div>
    </div>
  );
}
