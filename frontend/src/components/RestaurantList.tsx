import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  Divider,
  Grid,
  Button,
  Snackbar,
  Alert,
  CardActions,
} from "@mui/material";
import {
  EditSquare,
  HighlightOff,
  LocationOnOutlined,
  PhoneInTalk,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Restaurant {
  id: number;
  name: string;
  address: string;
  contact: string;
}

interface Props {
  restaurants: Restaurant[];
  onDelete: (id: number) => Promise<{ success: boolean; message: string }>;
}

const RestaurantList: React.FC<Props> = ({ restaurants, onDelete }) => {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleDeleteRestaurant = async (id: number) => {
    const result = await onDelete(id);
    setSnackbar({
      open: true,
      message: result.message,
      severity: result.success ? "success" : "error",
    });
  };

  return (
    <Container maxWidth="lg" sx={{marginBottom: "2rem"}}>
      <Box mt={3}>
        <Typography variant="h4" align="center" fontFamily={"Poppins"} fontWeight={600} gutterBottom>
          All Restaurants
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Grid container spacing={3}>
          {restaurants.map((restaurant) => (
            <Card
              elevation={4}
              sx={{
                height: "100%",
                width: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                
              }}
            >
              <CardContent>
                <Typography variant="h6" align="center" fontFamily= "Poppins" gutterBottom>
                  {restaurant.name}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                >
                  <PhoneInTalk sx={{ fontSize: 16, mr: 0.5 }} /> +91{" "}
                  {restaurant.contact}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                >
                  <LocationOnOutlined sx={{ fontSize: 16, mr: 0.5 }} />{" "}
                  {restaurant.address}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => navigate(`/edit-restaurant/${restaurant.id}`)}
                >
                  <EditSquare />
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDeleteRestaurant(restaurant.id)}
                >
                  <HighlightOff />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default RestaurantList;
