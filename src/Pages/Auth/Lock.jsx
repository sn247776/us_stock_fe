import React from "react";
import "../Pages.css";
import IMG from "../../assets/user.jpeg";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";

function Lock() {
  return (
    <div className="bg-login">
      <div className="main-login">
        <div className="login-tab">
          <div>
            <Avatar
              alt="Remy Sharp"
              src={IMG}
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <h2>JOHN DEO</h2>
          <p>
            <b>Locked</b>
          </p>
          <div>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Box
                sx={{ display: "flex", alignItems: "flex-end", width: "320px" }}
              >
                <LockIcon sx={{ color: "action.active", mr: 1, my: 0.8 }} />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="standard"
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Box sx={{ textAlign: "center" }}>
                <Link href="#" variant="body2">
                  Sign in as a different user
                </Link>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lock;
