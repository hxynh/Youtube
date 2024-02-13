export function FormatTimeElapsed (postedDate){
    const posted = new Date(postedDate);
    const current = new Date();

    let timeDifference = current - posted;

    const years = current.getUTCFullYear() - posted.getUTCFullYear();
    
    const months = current.getUTCMonth() - posted.getUTCMonth();
   
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    timeDifference -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    timeDifference -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(timeDifference / (1000 * 60));
    timeDifference -= minutes * (1000 * 60);

    const seconds = Math.floor(timeDifference / 1000);

    console.log("Year: ", years, " Month: ", months, " Day: ", days, " Hour: ", hours, " Min: ", minutes, " Seconds: ", seconds);
    
    return (
        years ? years+` year${years > 1 ? 's' : ''}` : 
        months ? months+` month${months > 1 ? 's' : ''}` : 
        days ? days+` day${days > 1 ? 's' : ''}` : 
        hours ? hours+` hour${hours > 1 ? 's' : ''}` : 
        minutes ? minutes+` minute${minutes > 1 ? 's' : ''}` : 
        seconds+` second${seconds > 1 ? 's' : ''}`
    );
}