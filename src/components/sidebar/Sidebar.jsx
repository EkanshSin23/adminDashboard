
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkMode';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className='icon' /><span>Dashboard</span></li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li><AccountCircleIcon className='icon' /><span>Users</span></li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li><InventoryIcon className='icon' /><span>Products</span></li>
                    </Link>
                    <li><ProductionQuantityLimitsIcon className='icon' /><span>Orders</span></li>
                    <li><LocalShippingIcon className='icon' /><span>Delivery </span></li>
                    <p className="title">USEFUL</p>
                    <li><QueryStatsIcon className='icon' /><span>Stats </span></li>
                    <li><CircleNotificationsIcon className='icon' /><span>Notifications </span></li>
                    <p className="title">SERVICE</p>
                    <li><MonitorHeartIcon className='icon' /><span>System Health </span></li>
                    <li><PsychologyIcon className='icon' /><span>Logs </span></li>
                    <li><SettingsIcon className='icon' /><span>Settings </span></li>
                    <p className="title">USER</p>
                    <li><PersonIcon className='icon' /><span>Profile </span></li>
                    <li><LogoutIcon className='icon' /><span>Log Out </span></li>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions" onClick={() => dispatch({ type: "LIGHT" })} ></div>
                <div className="colorOptions" onClick={() => dispatch({ type: "DARK" })} ></div>

            </div>
        </div >
    )
}

export default Sidebar