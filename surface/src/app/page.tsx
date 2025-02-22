'use client';
import {MFButton} from 'demo-microfrontend';
export default function Home() {
  return (
    <div style={{padding: '10px'}}>
      <h1>Surface</h1>
      <div style={{border: '1px solid black', padding: '10px'}}>
      <MFButton text='This text comes from suface' />
      </div>
    </div>
  );
}
