import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Box } from "@mui/material";

function ButtonCircularProgress(props) {
  const { size } = props;
  return (
    <Box color="secondary.main" pl={1.5} display="flex">
      <CircularProgress
        size={size ? size : 24}
        thickness={size ? (size / 5) * 24 : 5}
        color="secondary"
      />
    </Box>
  );
}

ButtonCircularProgress.propTypes = {
  size: PropTypes.number,
};

export default ButtonCircularProgress;
