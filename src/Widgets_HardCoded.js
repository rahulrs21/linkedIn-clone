import React from 'react'
import './Widgets.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets_HardCoded() {

  return (
    <div className=''>


      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
          <h4>Tesla hits new highs</h4>
          <p>Cars & auto - 300 readers</p>
        </div>
      </div>

      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
          <h4>Coronavirus: UK updates</h4>
          <p>Top News - 886 readers</p>
        </div>
      </div>

      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
          <h4>Bitcoin breaks $22k</h4>
          <p>Crypto - 8000 readers</p>
        </div>
      </div>

      {/* {newsArticles("Hello", "Hiii")} */}


    </div>
  )
}

export default Widgets_HardCoded
