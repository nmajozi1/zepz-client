import FilterInput from '../FilterInput/Filter.component';
import ButtonGroup from '../ButtonGroup/ButtonGroup.component';
import Info from '../Info/Info.component';
import './SideNav.component.scss';

const SideNav = () => {
  return (
    <div className='side-nav'>
      <FilterInput />
      <ButtonGroup />
      <Info />
    </div>
  )
}

export default SideNav