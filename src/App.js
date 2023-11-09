import {useEffect,useState} from 'react';
import {fetchData} from './API/api';
import {createPreData} from './utils/createPreData';
import {transformMonths} from './utils/transformMonths';
import Graph from './components/Graph';
import './App.css';

function App() {
  const [data,setData] = useState(null);
  const preData = createPreData();

  const months = [];
  transformMonths(months);

  useEffect(() => {
    fetchData(preData,setData);
  },[]);

  return (
    <main className='wrapper'>
      {data === null ? 'Loading...' :
        <section>
          <div className='weekday'>
            <div>Пн</div>
            <div>Ср</div>
            <div>Пт</div>
          </div>
          <div>
            <div className='months'>
              {months.map(el =>
                <div key={el.id}>{el.month}</div>
              )}
            </div>
            <Graph data={data} />
          </div>
        </section>
      }
    </main>
  );
};

export default App;
