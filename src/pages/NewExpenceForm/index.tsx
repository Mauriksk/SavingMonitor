import { Box, Button, TextField, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ProductType } from "../../components/ProductType";
import { tokens } from "../../theme";
import { Header } from "../../components/Header";

export const NewExpenceForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="New Expence"  subtitle="Save your expences"/>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productName}
                name="productName"
                error={!!touched.productName && !!errors.productName}
                helperText={touched.productName && errors.productName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gridColumn: "span 4",
                }}
              >
                <ProductType
                  title="Entertiment"
                  color={colors.blue[400]}
                  handleChange={setFieldValue}
                  selectedValue={values.type}
                />
                <ProductType
                  title="Meal"
                  color={colors.green[400]}
                  handleChange={setFieldValue}
                  selectedValue={values.type}
                />
                <ProductType
                  title="Clothes"
                  color={colors.grey[500]}
                  handleChange={setFieldValue}
                  selectedValue={values.type}
                />
                <ProductType
                  title="Suscription"
                  color={colors.red[400]}
                  handleChange={setFieldValue}
                  selectedValue={values.type}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Expense
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  productName: yup.string().required("required"),
  price: yup.string().required("required"),
});
const initialValues = {
  productName: "",
  price: "",
  type: "Entertiment",
};
