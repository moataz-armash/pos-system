// AlphabetFilter.jsx
import React from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const AlphabetContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const AlphabetTab = styled(Button)(({ theme }) => ({
  minWidth: 50,
  height: 36,
  margin: theme.spacing(0.5),
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.green.main}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.green.main,
  fontWeight: "bold",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.lightGreen.main,
    color: theme.palette.common.white,
    transform: "scale(1.05)",
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.green.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.green.secondary,
    },
  },
}));
const AlphabetFilter = ({
  letterGroups,
  selectedLetterGroup,
  onLetterGroupClick,
}) => (
  <AlphabetContainer>
    {letterGroups.map((group) => (
      <AlphabetTab
        key={group}
        onClick={() => onLetterGroupClick(group)}
        className={selectedLetterGroup === group ? "Mui-selected" : ""}>
        {group}
      </AlphabetTab>
    ))}
  </AlphabetContainer>
);

export default AlphabetFilter;
