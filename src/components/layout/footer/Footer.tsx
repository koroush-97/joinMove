import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

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
    <div className=" mx-auto border-2 border-red-500 ">
      <Stack spacing={2}>
        <Item
          sx={{
            bgcolor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container">
            <Button
              variant="contained"
              disableElevation
              sx={{ bgcolor: "#EAB308", borderRadius: "20px", color: "black" }}
            >
              Sign in for more access
            </Button>{" "}
          </div>
        </Item>
        <Item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "600px",
            bgcolor: "black",
          }}
        >
          <div className="container mx-auto border-2 border-red-500 bg-black ">
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item
                sx={{
                  padding: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "black",
                  color: "#fff",
                }}
              >
                <div
                  className={
                    " border-2 border-gray-500 flex justify-center items-center"
                  }
                >
                  secondbox
                </div>
              </Item>
              <Item sx={{ bgcolor: "black", color: "#fff" }}>
                <div
                  className={
                    " border-2 border-gray-500 flex justify-center items-center"
                  }
                >
                  secondbox
                </div>
              </Item>
            </Stack>
          </div>
        </Item>
        <Item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "black",
            color: "#fff",
          }}
        >
          <Box>thats tor interview</Box>
        </Item>
      </Stack>
    </div>
  );
}
