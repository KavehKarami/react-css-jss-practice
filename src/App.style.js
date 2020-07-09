import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  myButton: {
    color: "green",
    backgroundColor: ({ theme }) => theme.background,
    margin: {
      top: 2,
      right: 0,
      bottom: 0,
      left: "1rem",
    },
  },
  myLabel: {
    fontStyle: "italic",
  },
});
