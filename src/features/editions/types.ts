export type Translation = {
  name: string;
  author: string;
  language: string;
  direction: "ltr" | "rtl";
  source: string;
  comments: string;
  link: string;
  linkmin: string;
};

export type QuranEditions = {
  [key: string]: Translation;
};
