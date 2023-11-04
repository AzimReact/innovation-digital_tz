import axios from "axios";
import dayjs from "dayjs";
import {useEffect,useState} from "react";
import {MONTHS,checkContribution} from "./utils/utils";
import "./App.css";

function App() {
  const [data,setData] = useState(null);
  const currentDate = dayjs();
  const previousYearDate = currentDate.subtract(1,"year");
  const previousMonth = previousYearDate.month();
  const filteredMonths = [];
  const filteredContribution = [];

  let i = 0;
  let monthIndex = previousMonth + 1;

  while (i <= 11) {
    if (!MONTHS[monthIndex]) {
      monthIndex = 0;
    }
    filteredMonths.push(MONTHS[monthIndex]);

    monthIndex++;
    i++;
  }

  useEffect(() => {
    axios
      .get("https://dpg.gg/test/calendar.json")
      .then((res) => setData(res.data));
  },[]);

  for (let key in data) {
    if (
      previousYearDate.isBefore(key) &&
      dayjs(key).month() !== previousYearDate.month()
    ) {
      filteredContribution.push({
        days: dayjs(key).day() + dayjs(key).month() * 30,
        contribution: data[key],
      });
    }
  }

  return (
    <main>
      <section className="container">
        <div>
          <ul className="list-weekdays">
            <li>Пн</li>
            <li>Ср</li>
            <li>Пт</li>
          </ul>
        </div>
        <div>
          <ul className="list-months">
            {filteredMonths.map((item,index) => (
              <li key={index}>{item.month}</li>
            ))}
          </ul>
          <div className="box-cells">
            {Array.from({length: 357},(_,index) => {
              const contributionItem = filteredContribution.find(
                (item) => item.days === index
              );
              return (
                <div
                  className={`cell ${checkContribution(contributionItem)}`}
                  key={index}
                ></div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;