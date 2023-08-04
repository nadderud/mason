import defaultImage from "/public/img/upload/img_20210703_081612_706.jpg";

const CONFIG = {
  name: "Nadderud Spidergruppe",

  origin: "https://nadderud.no",
  basePathname: "/",
  title: "Nadderud Spidergruppe",
  description:
    "Spennende friluftsliv for barn og ungdom fra 3. klasse og oppover. Vi er en aktiv speidergruppe med ca. 100 medlemmer som dekker området Nadderud, Bekkestua, Hosle, Eikeli og Haslum.",
  defaultImage: defaultImage,

  defaultTheme: "light", // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: "no",
  textDirection: "ltr",
};

export const SITE = { ...CONFIG, blog: undefined };
