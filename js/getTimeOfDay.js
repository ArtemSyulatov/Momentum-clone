export let getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  const dayTime = ["night", "morning", "afternoon", "evening"]; 
  for (let key in dayTime) {
    if (Math.floor(hours / 6) == key) {
      return dayTime[key];
    }
  }
};
