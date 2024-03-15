import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px" ml={"30px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.green[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
