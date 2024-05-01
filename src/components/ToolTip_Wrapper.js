import { IconButton, Tooltip } from "@mui/material";

export const ToolTipWrapper = ({ Component, handleFunc, PlaceHolder }) => (
  <Tooltip title={PlaceHolder} onClick={() => handleFunc()} sx={{ p:0 }}>
    <IconButton sx={{ p:0 }}>{Component}</IconButton>
  </Tooltip>
);
