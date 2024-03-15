import { Box } from "@mui/material";
import { BarChart } from "../../components/BarChart";
import { PieChart } from "../../components/PieChart";
import { Header } from "../../components/Header";

export const DashBoard = () => {
  return (
    <Box>
      <Header title="Dashboard"  subtitle="Visualice"/>
      <Box height={450}>
        <BarChart />
      </Box>
      <Box height={450}>
        <PieChart />
      </Box>
    </Box>
  );
};
