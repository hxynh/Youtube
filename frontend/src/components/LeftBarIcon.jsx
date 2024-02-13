import { ButtonGhost } from "./ButtonStyles";
import { Divider } from "@mui/material";

export function SmallBarIcon ({icon, title, iconSelected, setIconSelected}) {
    //console.log("Active icon: ", iconSelected);
    return(
        <a 
            className={`w-full py-1 `}
            onClick={() => setIconSelected(title)}>
            <ButtonGhost
                className={`${title===iconSelected ? "bg-secondary-hover" : ""} flex flex-col w-full rounded-lg justify-center`}
            >
                {icon}
                <div className="text-[0.6rem]">
                    {title}
                </div>
            </ButtonGhost>
        </a>
    )
}

export function LargeBarIcon ({icon, title, divider, iconSelected, setIconSelected}) {
    return(
        <a 
            className={`w-full py-1`}
            onClick={() => setIconSelected(title)}>
            <ButtonGhost className={`${title===iconSelected ? "bg-secondary-hover" : ""} flex w-full rounded-lg flex-row px-3 py-2 justify-start`}>
                {icon}
                <div className="mx-5 text-sm">
                    {title}
                </div>
            </ButtonGhost>
            {divider && <Divider />}
        </a>
        
    )
}
