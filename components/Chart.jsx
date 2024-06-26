import { View } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

import { colors } from "@/styles/styles";

const screenWidth = Dimensions.get("screen").width - 60 - 75;

const Chart = ({ inStock = 0, outOfStock = 0 }) => {
  const data = [
    {
      name: "Out of stock",
      population: outOfStock,
      color: colors.color1_light,
      legendFontColor: colors.color2,
    },
    {
      name: "In stock",
      population: inStock,
      color: colors.color1_light2,
      legendFontColor: colors.color2,
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26,255,146,${opacity})`,
  };

  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={150}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor={colors.color3}
        paddingLeft="15"
        center={[10, 10]}
        absolute
      />
    </View>
  );
};

export default Chart;
