import { createTheme } from "@nextui-org/react";
import rootTheme from "../../tailwind.config.cjs";

export const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: "#4ADE7B",
      primaryLightHover: "#537D00",
      primaryLightActive: "#476B00",
      primaryLightContrast: "#2F4800",
      primaryBorder: "#3B5A00",
      primaryBorderHover: "#2F4800",
      primarySolidHover: "#233600",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",
      ...rootTheme.theme.extend.colors,
    },
    fonts: {
      primary: "Comfortaa, cursive",
      secondary: "Montserrat, sans-serif",
    },
  },
});
