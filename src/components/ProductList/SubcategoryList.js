import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const SubcategoryList = ({ subcategories, onSubcategorySelect }) => {
  return (
    <Grid container spacing={2} style={{ marginTop: 10 }}>
      {subcategories.map((subcat, index) => (
        <Grid item key={index} xs={6} sm={4} md={3}>
          <Card
            onClick={() => onSubcategorySelect(subcat.name)}
            sx={{ cursor: "pointer" }}>
            <CardMedia
              component="img"
              height="140"
              image={subcat.image}
              alt={subcat.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {subcat.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SubcategoryList;
