import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import { TabProps } from './components/NavBar/interfaces';

export default function App() {

  const location = useLocation();
  const query = location.search;
  const tabs: TabProps[] = [
    { name: 'Home', url: '/' + query },
    { name: 'Projects', url: '/projects' + query },
    { name: 'Contact', url: '/contact' + query },];

  return (
    <div className="flex flex-col">
      <Navbar tabs={tabs} />
      <Outlet />
    </div>
  );
}