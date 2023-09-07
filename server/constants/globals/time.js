const setTime = () => {
  const date = new Date();
  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  const time = [hour, ":", minute];

  if (hour > 12) {
    time[3] = " PM";
  } else {
    time[3] = " AM";
  }
  return time;
};

module.exports = { setTime };
