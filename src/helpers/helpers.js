import moment from "moment";

export const getCurrentWeek = () => {
  const day = [];
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  week.forEach((w, i) => {
    if (w === moment().format("dddd")) {
      day.push(moment().format("L"));
    }
    if (w !== moment().format("dddd")) {
      if (week.findIndex((a) => a === moment().format("dddd")) > i) {
        day.push(
          moment()
            .subtract(week.findIndex((a) => a === moment().format("dddd")) - i, "day")
            .format("L")
        );
      }
      if (week.findIndex((a) => a === moment().format("dddd")) < i) {
        day.push(
          moment()
            .add(i - week.findIndex((a) => a === moment().format("dddd")), "day")
            .format("L")
        );
      }
    }
  });

  return day;
};

export const getNextWeek = (lastDate) => {
  const days = [];
  const currentDay = moment().format("L").split("/");
  const lastDayInPrevWeek = lastDate.split("/");
  const x = moment([Number(currentDay[2]), Number(currentDay[0] - 1), Number(currentDay[1])]);
  const y = moment([Number(lastDayInPrevWeek[2]), Number(lastDayInPrevWeek[0] - 1), Number(lastDayInPrevWeek[1])]);
  const diffDays = y.diff(x, "days");
  for (let i = 1; i <= 7; i++) {
    days.push(
      moment()
        .add(diffDays + i, "day")
        .format("L")
    );
  }
  return days;
};

export const getPrevWeek = (startDate) => {
  const days = [];
  const currentDay = moment().format("L").split("/");
  const lastDayInPrevWeek = startDate.split("/");
  const x = moment([Number(currentDay[2]), Number(currentDay[0] - 1), Number(currentDay[1])]);
  const y = moment([Number(lastDayInPrevWeek[2]), Number(lastDayInPrevWeek[0] - 1), Number(lastDayInPrevWeek[1])]);
  const diffDays = x.diff(y, "days");
  for (let i = 1; i <= 7; i++) {
    days.unshift(
      moment()
        .subtract(diffDays + i, "day")
        .format("L")
    );
  }
  return days;
};

export const getEventTable = (week, event) => {
  const eventTable = [];
  const id = {};
  const activeCell = {};
  event.forEach((a) => {
    if (week.includes(a.slice(0, 10))) {
      id[week.findIndex((b) => b === a.slice(0, 10)) + String(a.split("").slice(11, 13).join(""))] = a;
      if (activeCell[week.findIndex((b) => b === a.slice(0, 10))]) {
        activeCell[week.findIndex((b) => b === a.slice(0, 10))].push(Number(a.split("").slice(11, 13).join("")));
      }
      if (!activeCell[week.findIndex((b) => b === a.slice(0, 10))]) {
        activeCell[week.findIndex((b) => b === a.slice(0, 10))] = [...[Number(a.split("").slice(11, 13).join(""))]];
      }
    }
  });

  for (let i = 0; i < 24; i++) {
    let row = [];
    for (let j = 0; j < 7; j++) {
      if (Object.keys(activeCell).includes(String(j))) {
        if (activeCell[String(j)].includes(i)) {
          row.push(id[`${j}${String(i).length === 1 ? "0" + i : i}`]);
        } else {
          row.push(false);
        }
      } else {
        row.push(false);
      }
    }
    eventTable.push(row);
  }
  return eventTable;
};

export const getValidateDate = (event) => {
  let eventDate = event.trim().split(" ");
  if (eventDate[0]?.length === 10 && eventDate[1]?.length >= 2 && moment(`${eventDate[0]}T${eventDate[1]}`).isValid()) {
    return `${eventDate[0].split("-")[1]}/${eventDate[0].split("-")[2]}/${
      eventDate[0].split("-")[0]
    }-${eventDate[1].slice(0, 2)}`;
  } else {
    return false;
  }
};
