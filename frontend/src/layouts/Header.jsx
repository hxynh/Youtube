import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {IconDefault, IconGhost} from '../components/ButtonStyles';
import { useState } from 'react';
import MenuNav from '../components/MenuNav';

export default function Header ({menuExpanded, setMenuExpanded}) {
    const [showFullSearch, setShowFullSearch] = useState(false);

    return (
        <div className="flex justify-between gap-10 lg:gap-20 bg-white">
            <MenuNav 
                menuExpanded={menuExpanded} 
                setMenuExpanded={setMenuExpanded} 
                />
            <form className={`gap-4 flex-grow justify-center ${showFullSearch ? "flex" : "hidden md:flex"}`}> {/*Search*/}
                <div className='flex flex-grow max-w-[600px] py-2'>
                    {showFullSearch && (<IconGhost className='flex-shrink-0 mr-2'
                                            onClick={() => setShowFullSearch(false)} > 
                                            <ArrowBackIcon />
                                        </IconGhost>)}
                    <input 
                        type="search" 
                        placeholder="Search"
                        className='border border-secondary-border rounded-l-full w-full shadow shadow-secondary px-4 focus:border-blue-500 outline-none' 
                    />
                    <button className='w-[15%] h-full bg-secondary  text-black rounded-r-full border border-l-0 border-secondary-border flex-shrink-0' >
                        <SearchOutlinedIcon />
                    </button>
                </div>
                <IconDefault type='button' className='flex-shrink-0 my-2'>
                    <MicOutlinedIcon />
                </IconDefault>
            </form>
            <div className={`flex-shrink-0 md:gap-2 ${showFullSearch ? "hidden" : "flex"} py-2`}> {/*Upload, Notification and Profile*/}
                <IconGhost 
                    className='md:hidden'
                    onClick={() => setShowFullSearch(true)}>
                    <SearchOutlinedIcon/>
                </IconGhost>
                <IconGhost className='md:hidden'>
                    <MicOutlinedIcon />              
                </IconGhost>
                <IconGhost>
                    <VideoCallOutlinedIcon />
                </IconGhost>
                <IconGhost>
                    <NotificationsOutlinedIcon />
                </IconGhost>
                <IconGhost>
                    <AccountCircleOutlinedIcon />
                </IconGhost>
            </div>
        </div>
    )
}