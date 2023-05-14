import { IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useFetchActivities, useFilterByType } from "../../services/Activities.service";
import { useRecoilState } from "recoil";
import { filterAtom } from "../../store/activity";
import './Filter.component.scss';

const FilterInput = () => {
  const [filter, setFilter] = useRecoilState(filterAtom);
  const fetchActivities = useFetchActivities();
  const filterActivitiesMutation = useFilterByType();

  const handleClearFilter = () => {
    setFilter('');
    fetchActivities.refetch();
  }

  const handleInputCahnge = (event: any) => {
    setFilter(event.target.value);
  }

  const handleBlur = () => {
    if (filter === '') {
      fetchActivities.refetch();
    }
  };

  const handleFilter = (event: any) => {
    const type = event.target.value;
    if(event.key === 'Enter') {
      filterActivitiesMutation.mutate(type);
    }
  }

  return (
    <span className='text-container'>
      <TextField style={{ width: "100%"}}
        id="seach" 
        label="Filter By Type" 
        variant="standard" 
        value={filter}
        onChange={handleInputCahnge}
        onBlur={handleBlur}
        onKeyDown={(event) => handleFilter(event)}
      />
      <IconButton onClick={handleClearFilter} aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </span>
  )
}

export default FilterInput;