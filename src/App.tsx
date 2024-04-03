import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import { TabProps } from './components/NavBar/interfaces';

export default function App() {

  const location = useLocation();
  const query = location.search;
  const tabs: TabProps[] = [
    { name: 'Home', url: '/my-portfolio' + query },
    { name: 'Projects', url: '/my-portfolio/projects' + query },
    { name: 'Contact', url: '/my-portfolio/contact' + query },];

  return (
    <div className="flex flex-col">
      <Navbar tabs={tabs} />
      <Outlet />
    </div>
  );
}