import Button from '@mui/material/Button';

export const MFButton = ({text, desc}:{text?:string;desc?:string}) => {
  return <div><div>This is MF Containers</div><Button variant="contained">{text || 'Web Component'}</Button><div>Desc{desc}</div></div>
}
