import { Button } from '@mui/material';
import { useCreateActivities, useDeleteAllActivities, useFetchActivities } from '../../services/Activities.service';
import { filterAtom } from '../../store/activity';
import { useRecoilState } from 'recoil';

const ButtonGroup = () => {
  const [filter, setFilter] = useRecoilState(filterAtom);
  const createActivitiesMutation = useCreateActivities();
  const deleteActivitiesMutation = useDeleteAllActivities();
  const fetchActivities = useFetchActivities();

  const handleCreateClick = () => {
    createActivitiesMutation.mutate();
  };

  const handleDeleteClick = () => {
    deleteActivitiesMutation.mutate();
  };

  const handleListClick = () => {
    setFilter('');
    fetchActivities.refetch();
  }

  return (
    <>
      <Button onClick={handleCreateClick} className='button' variant="contained" color="success">Create New Activities</Button>
      <Button onClick={handleDeleteClick} className='button' variant="contained" color="error">Delete Activities</Button>
      <Button onClick={handleListClick} className='button' variant="contained" color="secondary">List all Activities</Button>
    </>
  )
}

export default ButtonGroup;