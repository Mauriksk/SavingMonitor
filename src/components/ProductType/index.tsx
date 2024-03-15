import { Box, Typography } from "@mui/material";

type ProductType = {
  title: string;
  color: string;
  handleChange: (field: string, value: string) => void;
  selectedValue: string;
};

export const ProductType: React.FC<ProductType> = ({
  title,
  color,
  handleChange,
  selectedValue
}) => {
  return (
    <Box
      onClick={() => handleChange("type", title)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        height: 40,
        width: "20%",
        borderBottom: selectedValue === title ?  "3px solid #ffffff" : undefined
      }}
    >
      <Typography>{title}</Typography>
    </Box>
  );
};
