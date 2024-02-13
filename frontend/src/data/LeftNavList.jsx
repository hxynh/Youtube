import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export const navItems = [
    {text: "Home", smallMenu: true, icon: <HomeIcon /> },
    {text: "Shorts", smallMenu: true, icon: <RepeatOutlinedIcon />},
    {text: "Subscritpion", smallMenu: true, icon: <SubscriptionsOutlinedIcon />},
    {text: "Library", smallMenu: true, icon: <VideoLibraryOutlinedIcon />},
    {text: "History", smallMenu: false, icon: <HistoryOutlinedIcon />},
    {text: "Your videos", smallMenu: false, icon: <SlideshowOutlinedIcon />},
    {text: "Watch Later", smallMenu: false, icon: <AccessTimeOutlinedIcon />},
    {text: "Liked videos", smallMenu: false, icon: <ThumbUpAltOutlinedIcon />}];