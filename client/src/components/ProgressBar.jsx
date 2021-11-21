import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "15px" }}>
      <Box sx={{ width: '50%', mr: 1, borderRadius: '50px' }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  
  value: PropTypes.number.isRequired,
};
const StyledLinearProgress1 = withStyles({
  colorPrimary: {
    backgroundColor: "#837F7F"
  },
  barColorPrimary: {
    backgroundColor: "#6AD650",
    borderRadius: "50px"
  }
})(LinearProgressWithLabel);

const StyledLinearProgress2 = withStyles({
  colorPrimary: {
    backgroundColor: "#262525"
  },
  barColorPrimary: {
    backgroundColor: "#D6A850",
    borderRadius: "50px"
  }
})(LinearProgressWithLabel);


const ProgressBar = (props) => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress1((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
      setProgress2((prevProgress) => (prevProgress >= 50 ? 50 : prevProgress + 10));
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return ( 
    <Box sx={{ width: '100%', padding: '10px', borderRadius: '50px'}}>
    <StyledLinearProgress1 sx={{ height: '50px', borderRadius: '50px' }} value={progress1} />
    <StyledLinearProgress2 sx={{ height: '50px', borderRadius: '50px' }} value={progress2} />
  </Box>
   );
}

export default ProgressBar;