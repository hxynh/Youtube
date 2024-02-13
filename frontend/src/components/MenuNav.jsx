import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconGhost} from '../components/ButtonStyles';


export default function MenuNav({menuExpanded, setMenuExpanded}) {
  return (
    <div className={`flex gap-4 items-center flex-shrink-0 p-2 `} > {/*Menu and Logo*/}
        <IconGhost onClick={() => setMenuExpanded(!menuExpanded)}>
            <MenuIcon />    
        </IconGhost>
        <div className='flex'> {/*Youtube logo*/}
            <YouTubeIcon fontSize='large' sx={{ color:'red'}}/>  {/**Add re-route later**/}
            <h3 className='text-xl font-semibold tracking-tighter leading-relaxed'>YouTube</h3>
        </div>
    </div>
  )
}
