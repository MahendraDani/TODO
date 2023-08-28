const { format } = require("date-fns");
const hour = format(new Date(), "HH:mm:ss").split(":")[0];
const time = format(new Date(), "HH:mm:ss").split(":");
if (hour < 12) {
  time[2] = ":";
  time[3] = " AM";
} else {
  time[2] = ":";
  time[3] = " PM";
}

console.log(time);
