import React, { useState} from 'react'
import { Swatches } from './Swatches'
import { ColorExtractor } from 'react-color-extractor'

 function Colordetect ({url}) {
  const [image, setImage] = useState(null)
  const [colors, setColors] = useState([])
  const[hasError, sethasError] = useState(false) 
  
  const getColors = colors => {
    setColors(colors);
  }
   React.useEffect(() => {
    setImage(url);
   },[url]);
    return (
      <div
        className="center-content"
        style={{
          flexDirection: 'column'
        }} >
       <ColorExtractor rgb getColors={getColors} >
          <img src={image} style={{ "display": "none" }} />
      </ColorExtractor>       
        {colors?.length > 0 ? (
          <Swatches colors={colors} type="rgb"/>
        ) : null}
      </div>
    )
}
export default Colordetect