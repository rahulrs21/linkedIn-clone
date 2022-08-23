import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Widgets_HardCoded from './Widgets_HardCoded';

const Widgets = () => {

  const newsArticles = (heading, subtitle) => (
    <div className="widgets__article">
      
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>

    </div>
  )

  

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      
    
      {/* <Widgets_HardCoded /> */}


      {/* This below code is not running bcz in function don't start with '{flower bracket}' at last, Instead start with '()',  --> const newsArticles = (heading, subtitle) => ()*/}
      {newsArticles("PAPA REACT is back", "Top News - 9099 readers")}
      {newsArticles("Coronavirus: UK updates", "Top News - 886 readers")}
      {newsArticles("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticles("Bitcoin breaks $22k", "Crypto - 8000 readers")}
      {newsArticles("Is Redux too good?", "Code - 1220 readers")}

    </div>
  );
}

export default Widgets
