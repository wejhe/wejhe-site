export type ButtonType = "primary" | "secondary";

export type ButtonConfig = {
  href: string;
  type: ButtonType;
  label: string;
};

export type Drop = {
  top: number;
  delay: number;
  duration: number;
  size: number;
};
