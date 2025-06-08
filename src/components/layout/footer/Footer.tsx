import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Footer() {
  return (
    <div className="container mx-auto ">
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item>
            {" "}
            <Button
              variant="contained"
              disableElevation
              sx={{ bgcolor: "#EAB308", borderRadius: "20px", color: "black" }}
            >
              Sign in for more access
            </Button>{" "}
          </Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </div>
  );
}
