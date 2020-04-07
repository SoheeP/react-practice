import React from 'react';
import './Pallette.css'

const Pallette = ({colors, selected, onSelect}) => {
  // 객체 배열을 컴포넌트 배열로 변환
  const color = colors.map(
    ({id, color }) => (
      <div
        key={id}
        className={`color ${(id === selected)?'active':''}`}
        style={
          //  객체전달
          {backgroundColor: color}
        }
        onClick={(e)=>{
          e.stopPropagation();
          onSelect(id)
        }}
      ></div>
    )
  );
  return (
    <div className="pallette">
      {color}
    </div>
  );
};


export default Pallette;

