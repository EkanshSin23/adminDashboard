
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkMode';
// import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext)
    return (

        < div className='navbar' >
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        {darkMode ? <LightModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} /> : <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />}

                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon' />

                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon' />

                    </div>
                    <div className="item">
                        <img src="https://picsum.photos/id/237/200/300" alt="" className='avatar' />

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Navbar