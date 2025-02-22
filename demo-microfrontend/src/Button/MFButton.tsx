import Button from '@mui/material/Button';

export const MFButton = ({text}:{text?:string}) => {
  return <div><div>This is MF Containers</div><Button variant="contained">{text || 'Microfrontend'}</Button></div>
}
