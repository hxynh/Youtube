import { navItems } from "../data/LeftNavList";
import {SmallBarIcon, LargeBarIcon} from "../components/LeftBarIcon";
import { useState } from "react";
import MenuNav from "../components/MenuNav";

export default function LeftNavBar ({menuExpanded, setMenuExpanded, isLargeScreen}) {
    const [iconSelected, setIconSelected] = useState(navItems[0].text);
   

    return (
        <>
            <aside className={` h-full top-0 item-start overflow-y-auto scrollbar-hidden flex flex-col flex-shrink-0 bg-white `}>
            {/* {menuExpanded && !isLargeScreen && <MenuNav 
                        menuExpanded={menuExpanded}
                        setMenuExpanded={setMenuExpanded}
                        />} */}
            {
                navItems.map((item, index) => (
                    <>
                    {!menuExpanded && item.smallMenu && <SmallBarIcon 
                        icon={item.icon} 
                        title={item.text}
                        iconSelected={iconSelected}
                        setIconSelected={setIconSelected}
                    />}
                    {menuExpanded && <LargeBarIcon 
                        icon={item.icon} 
                        title={item.text}
                        divider={index===2 ? true : false}
                        iconSelected={iconSelected}
                        setIconSelected={setIconSelected}
                    />}
                    </>
                ))
            } 
            </aside>

        </>
        )
}

