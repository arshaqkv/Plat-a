import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  TextField,
  Box,
  Paper,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { createRestaurant } from "../api/restaurantApi";

interface RestaurantFormData {
  name: string;
  address: string;
  contact: string;
}

const AddRestaurantForm: React.FC = () => {
  const [formData, setFormData] = useState<RestaurantFormData>({
    name: "",
    address: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<RestaurantFormData>>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear individual error
  };

  const validate = (): boolean => {
    const newErrors: Partial<RestaurantFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Restaurant name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be a 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Trim data before validation and submission
    const trimmedData: RestaurantFormData = {
      name: formData.name.trim(),
      address: formData.address.trim(),
      contact: formData.contact.trim(),
    };
  
    // Update state with trimmed data (optional but helpful for UX)
    setFormData(trimmedData);
  
    try {
      if (validate()) {
        const { message } = await createRestaurant(trimmedData);
        setSnackbar({
          open: true,
          message: message,
          severity: "success",
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error: any) {
      const backendMessage =
        error?.response?.data?.message || "Something went wrong";
  
      setSnackbar({
        open: true,
        message: backendMessage,
        severity: "error",
      });
    }
  };  
  

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="bg-[url('./assets/bg-2.jpg')] bg-cover bg-no-repeat bg-blend-overlay bg-black/60 min-h-screen">
      <Navbar />

      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4, mt: 2 }}>
          <Typography variant="h5" gutterBottom align="center" fontFamily={"Poppins"} fontWeight={500}>
            🍽️ Add New Restaurant
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
              <TextField
                label="Restaurant Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
                label="Address"
                name="address"
                fullWidth
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
              />

              <TextField
                label="Contact Number"
                name="contact"
                fullWidth
                value={formData.contact}
                onChange={handleChange}
                error={!!errors.contact}
                helperText={errors.contact}
              />

              <Button type="submit" variant="contained" color="info">
                Add Restaurant
              </Button>
              <Button onClick={()=> navigate(-1)} type="button" variant="outlined" color="info">
                Cancel
              </Button>
            </Grid>
          </Box>
        </Paper>

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
      </Container>
    </div>
  );
};

export default AddRestaurantForm;
