import { useEffect, useState } from "react";
import { getCurrentWeek, getNextWeek, getPrevWeek, getEventTable, getValidateDate } from "./helpers/helpers";
import GlobalStyles from "./styles/global";
import Layout from "./Layout/Layout";
import TopPanel from "./components/ControlPanel/TopPanel";
import BotPanel from "./components/ControlPanel/BotPanel";
import EventTable from "./components/EventTable";
const App = () => {
  const currentWeek = getCurrentWeek();
  const [week, setWeek] = useState(currentWeek);
  const [event, setEvent] = useState([]);
  const [activeCell, setActiveCell] = useState("");
  const initEventTable = getEventTable(week, event);
  const handleChangeWeek = (button) => {
    if (button === "next") {
      setWeek(getNextWeek(week[6]));
    }
    if (button === "prev") {
      setWeek(getPrevWeek(week[0]));
    }
    if (button === "today") {
      setWeek(currentWeek);
    }
  };
  const handleAddEvent = () => {
    const eventPromt = prompt("Enter event time: YYYY-MM-DD HH:mm:ss");
    if (eventPromt) {
      const isValid = getValidateDate(eventPromt);
      if (!isValid) {
        alert("Please enter the correct date");
      }
      if (typeof isValid === "string") {
        if (!event.includes(isValid)) {
          setEvent((prev) => [...prev, isValid]);
        }
        if (event.includes(isValid)) {
          alert("This event has been added");
        }
      }
    }
  };
  const handleChoseEvent = (id) => {
    setActiveCell(id);
  };
  const handleDeleteEvent = () => {
    setEvent(event.filter((e) => e !== activeCell));
  };
  useEffect(() => {
    const prevLocalStorageData = JSON.parse(localStorage.getItem("Event"));
    if (prevLocalStorageData) setEvent(prevLocalStorageData);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Event", JSON.stringify(event));
  }, [event]);

  return (
    <>
      <Layout>
        <TopPanel onAddEvent={handleAddEvent} onChangeWeek={handleChangeWeek} week={week} />
        <EventTable activeCell={activeCell} onChoseEvent={handleChoseEvent} table={initEventTable} />
        <BotPanel event={event} activeCell={activeCell} onDelete={handleDeleteEvent} onChangeWeek={handleChangeWeek} />
      </Layout>
      <GlobalStyles />
    </>
  );
};

export default App;
