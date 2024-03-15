import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../theme";

const data = [
    {
      "country": "Enero",
      "hot dog": 101,
      "hot dogColor": "hsl(37, 70%, 50%)",
      "burger": 132,
      "burgerColor": "hsl(258, 70%, 50%)",
      "sandwich": 124,
      "sandwichColor": "hsl(147, 70%, 50%)",
      "kebab": 108,
      "kebabColor": "hsl(64, 70%, 50%)",
      "fries": 95,
      "friesColor": "hsl(77, 70%, 50%)",
      "donut": 139,
      "donutColor": "hsl(152, 70%, 50%)"
    },
    {
      "country": "Febrero",
      "hot dog": 97,
      "hot dogColor": "hsl(129, 70%, 50%)",
      "burger": 110,
      "burgerColor": "hsl(128, 70%, 50%)",
      "sandwich": 174,
      "sandwichColor": "hsl(3, 70%, 50%)",
      "kebab": 189,
      "kebabColor": "hsl(144, 70%, 50%)",
      "fries": 195,
      "friesColor": "hsl(68, 70%, 50%)",
      "donut": 55,
      "donutColor": "hsl(131, 70%, 50%)"
    },
    {
      "country": "Marzo",
      "hot dog": 168,
      "hot dogColor": "hsl(204, 70%, 50%)",
      "burger": 73,
      "burgerColor": "hsl(358, 70%, 50%)",
      "sandwich": 143,
      "sandwichColor": "hsl(156, 70%, 50%)",
      "kebab": 52,
      "kebabColor": "hsl(37, 70%, 50%)",
      "fries": 150,
      "friesColor": "hsl(219, 70%, 50%)",
      "donut": 164,
      "donutColor": "hsl(265, 70%, 50%)"
    },
    {
      "country": "Abril",
      "hot dog": 195,
      "hot dogColor": "hsl(332, 70%, 50%)",
      "burger": 21,
      "burgerColor": "hsl(224, 70%, 50%)",
      "sandwich": 178,
      "sandwichColor": "hsl(124, 70%, 50%)",
      "kebab": 85,
      "kebabColor": "hsl(183, 70%, 50%)",
      "fries": 191,
      "friesColor": "hsl(104, 70%, 50%)",
      "donut": 17,
      "donutColor": "hsl(195, 70%, 50%)"
    },
    {
      "country": "Mayo",
      "hot dog": 161,
      "hot dogColor": "hsl(236, 70%, 50%)",
      "burger": 5,
      "burgerColor": "hsl(185, 70%, 50%)",
      "sandwich": 88,
      "sandwichColor": "hsl(75, 70%, 50%)",
      "kebab": 119,
      "kebabColor": "hsl(341, 70%, 50%)",
      "fries": 103,
      "friesColor": "hsl(207, 70%, 50%)",
      "donut": 151,
      "donutColor": "hsl(91, 70%, 50%)"
    },
    {
      "country": "Junio",
      "hot dog": 62,
      "hot dogColor": "hsl(112, 70%, 50%)",
      "burger": 55,
      "burgerColor": "hsl(110, 70%, 50%)",
      "sandwich": 70,
      "sandwichColor": "hsl(125, 70%, 50%)",
      "kebab": 135,
      "kebabColor": "hsl(4, 70%, 50%)",
      "fries": 99,
      "friesColor": "hsl(229, 70%, 50%)",
      "donut": 171,
      "donutColor": "hsl(89, 70%, 50%)"
    },
    {
      "country": "Julio",
      "hot dog": 95,
      "hot dogColor": "hsl(212, 70%, 50%)",
      "burger": 196,
      "burgerColor": "hsl(170, 70%, 50%)",
      "sandwich": 12,
      "sandwichColor": "hsl(251, 70%, 50%)",
      "kebab": 43,
      "kebabColor": "hsl(250, 70%, 50%)",
      "fries": 111,
      "friesColor": "hsl(120, 70%, 50%)",
      "donut": 197,
      "donutColor": "hsl(186, 70%, 50%)"
    }
  ]

export const BarChart = ({ isDashboard = true }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

