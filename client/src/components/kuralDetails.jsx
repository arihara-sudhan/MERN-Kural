import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './kural.css';

function KuralDetails(props) {
  const { no } = useParams();
  const kuralNo = parseInt(no, 10) || props.kuralNo;
  const [kural, setKural] = useState(null);
  const [moveToInput, setMoveToInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchKural() {
      try {
        const response = await fetch(`http://localhost:3000/kural?no=${kuralNo}`);
        const data = await response.json();
        setKural(data);
      } catch (error) {
        console.error('Error fetching Kural:', error);
      }
    }

    fetchKural();
  }, [kuralNo]);

  const previousKuralNo = kuralNo > 1 ? kuralNo - 1 : null;
  const nextKuralNo = kuralNo < 1330 ? kuralNo + 1 : null;

  const handleMoveToInput = (event) => {
    setMoveToInput(event.target.value);
  };

  const handleMoveToClick = () => {
    if (moveToInput) {
      setTimeout(() => {
        navigate(`/${moveToInput}`);
      }, 1000); // Move to the entered Kural after 1 second
    }
  };

  return (
    <div>
      {kural ? (
        <div className='kural-sub'>
          <center><h2>குறள் : {kural.no}</h2></center>
          <p>{kural.kural}</p>
          <p>பொருள் : {kural.meaning}.</p>
          <p>Explanation: {kural.explanation}.</p>
        </div>
      ) : (
        <p>ஏற்றுகிறது...</p>
      )}
      <div className='buttons'>
        {previousKuralNo && <Link to={`/${previousKuralNo}`} className='button'>முந்தையது</Link>}
        <div className='move-to'>
          <input
            type='number'
            value={moveToInput}
            onChange={handleMoveToInput}
            placeholder='குறள் எண்'
            className='move-to-input'
          />
          <button onClick={handleMoveToClick} className='button'>செல்</button>
        </div>
        {nextKuralNo && <Link to={`/${nextKuralNo}`} className='button'>அடுத்தது</Link>}
      </div>
    </div>
  );
}

export default KuralDetails;
