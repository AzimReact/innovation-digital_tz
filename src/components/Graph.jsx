import React, {useState} from 'react';

const Graph = ({data}) => {
  const [modal, setModal] = useState(false);
  const [selectedCell, setSelectedCell] = useState([]);
  
  function getTargetCell(contr, desc) {
    if (desc === selectedCell[1]) {
      setModal(false);
      setSelectedCell([]);
    } else {
      setModal(true);
      setSelectedCell([contr, desc]);
    }
  }

  return (
  <>
  <div className='graph'>{data.map(el =>
    <div onClick={() => getTargetCell(el.contribution, el.desc) } className={`cell ${el.contribution >= 30 ? 'cell30' : el.contribution >= 20 ? 'cell20' : el.contribution >= 10 ? 'cell10' : el.contribution >= 1 ? 'cell1' : ''}`}
    style={{
      border: el.desc === selectedCell[1] ? '1px solid black' : '',
    }} key={el.id}>
      <div className={el.desc === selectedCell[1]? 'modal' : 'd-n'}>
        <div>{selectedCell[0]} contributions</div>
        <div className='desc'>{selectedCell[1]}</div>
      <div className="triangle"></div>
      </div>
    </div>
  )}</div>
  </>
  );
};

export default Graph; 

