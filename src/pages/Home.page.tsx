import { Box } from '@mui/material';
import CustomTable from '../components/Table/Table.component';
import './Home.page.scss';
import SideNav from '../components/SideNav/SideNav.component';

const Home = () => {

  return (
    <div className='container'>
      <Box className='info-block'>
        <SideNav />
        <CustomTable />
      </Box>
    </div>
  )
}

export default Home;
