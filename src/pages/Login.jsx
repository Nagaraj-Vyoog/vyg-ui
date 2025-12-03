import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignupPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f6f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "95%", sm: "90%", md: "1150px" },
          height: { xs: "auto", md: "630px" },
          borderRadius: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        {/* LEFT EMPTY SIDE (similar to your screenshot) */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            backgroundColor: "#ffffff",
            display: { xs: "none", md: "block" },
          }}
        />

        {/* RIGHT PANEL - SIGNUP FORM */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            p: { xs: 4, sm: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Top Login Redirect */}
          <Typography
            variant="body2"
            sx={{ textAlign: "right", mb: 2, color: "#666" }}
          >
            Already have an account?{" "}
            <Link href="#" underline="hover" sx={{ color: "#d12c4e" }}>
              Log in
            </Link>
          </Typography>

          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: "#6366f1", mb: 4 }}
          >
            Sign up
          </Typography>

          {/* Google Signup */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              backgroundColor: "#d9534f",
              textTransform: "none",
              borderRadius: "10px",
              py: 1.2,
              mb: 3,
              "&:hover": { backgroundColor: "#c94543" },
            }}
          >
            Sign up with Google
          </Button>

          {/* Divider */}
          <Divider sx={{ my: 3 }}>OR</Divider>

          {/* First + Last Name */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              label="First name"
              placeholder="Input first name"
              fullWidth
            />
            <TextField
              label="Last name"
              placeholder="Input last name"
              fullWidth
            />
          </Box>

          {/* Email */}
          <TextField
            label="Email"
            placeholder="example.email@gmail.com"
            fullWidth
            sx={{ mt: 2 }}
          />

          {/* Password */}
          <TextField
            label="Password"
            type="password"
            placeholder="Enter at least 8+ characters"
            fullWidth
            sx={{ mt: 2 }}
          />

          {/* Terms checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography sx={{ fontSize: "14px" }}>
                By signing up, I agree with the{" "}
                <Link href="#">Terms of Use</Link> &{" "}
                <Link href="#">Privacy Policy</Link>
              </Typography>
            }
            sx={{ mt: 1 }}
          />

          {/* Create account button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.4,
              backgroundColor: "#6366f1",
              borderRadius: "10px",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Create an account
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
