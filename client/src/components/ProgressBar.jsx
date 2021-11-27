import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/variables.scss';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "15px"}}>
      <Box sx={{ width: '90%', mr: 1, borderRadius: '50px'}}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="$text-light">{`${Math.round(
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

const ProgressBar = (props) => {
  const [progress1, setProgress1] = useState(0);

  const convertNum = Number(props.percent)

  useEffect(() => {

    const timer = setInterval(() => {
      setProgress1((prevProgress) => (prevProgress >= convertNum ? convertNum : prevProgress + 1));
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [convertNum]);

  const StyledLinearProgress1 = withStyles({
    colorPrimary: {
      backgroundColor: "#837F7F"
    },
    barColorPrimary: {
      backgroundColor: props.color,
      borderRadius: "50px"
    }
  })(LinearProgressWithLabel);

  return ( 
    <Box sx={{ width: '100%', padding: '0px', borderRadius: '50px'}}>
    <StyledLinearProgress1 sx={{ height: props.height, borderRadius: '50px' }} value={progress1} />
  </Box>
   );

 
}



export default ProgressBar;