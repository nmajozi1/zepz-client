import { Typography } from '@mui/material';
import './Info.component.scss';

const Info = () => {
  return (
    <span className='info-footer'>
      <Typography><b>Candidate: </b>Ntokozo Majozi</Typography>
      <Typography><b>Assessment: </b>Zepz</Typography>
    </span>
  )
}

export default Info;