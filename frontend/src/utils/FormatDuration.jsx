const DOUBLE_DIGIT_FORTMATTER = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  }) //Ensures we always have double digits

export function FormatDuration (duration) {
    /*const hrs = Math.floor(duration /60 /60);
    const mins = Math.floor((duration - hrs *60 *60) / 60);
    const secs = duration % 60;

    return (`${hrs === 0 ? "" : hrs+":"}${DOUBLE_DIGIT_FORTMATTER.format(mins)}:${DOUBLE_DIGIT_FORTMATTER.format(secs)}`);*/

    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const match = duration.match(regex);

  // Extract hours, minutes, and seconds from the match
  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;

  // Return an object with hours, minutes, and seconds
  return (`${hours === 0 ? "" : hours+":"}${DOUBLE_DIGIT_FORTMATTER.format(minutes)}:${DOUBLE_DIGIT_FORTMATTER.format(seconds)}`);
  
}