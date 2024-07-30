// composables/useDisplay.js
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export const useDisplay = () => {
  if (!import.meta.client) return {};
  const breakpoints = useBreakpoints(breakpointsTailwind);

  return {
    xs: breakpoints.smaller("sm"),
    sm: breakpoints.between("sm", "md"),
    md: breakpoints.between("md", "lg"),
    lg: breakpoints.between("lg", "xl"),
    xl: breakpoints.greater("xl"),

    smAndLarger: breakpoints.greaterOrEqual("sm"),
    mdAndLarger: breakpoints.greaterOrEqual("md"),
    lgAndLarger: breakpoints.greaterOrEqual("lg"),
    xlAndLarger: breakpoints.greaterOrEqual("xl"),

    smAndSmaller: breakpoints.smallerOrEqual("sm"),
    mdAndSmaller: breakpoints.smallerOrEqual("md"),
    lgAndSmaller: breakpoints.smallerOrEqual("lg"),
    xlAndSmaller: breakpoints.smallerOrEqual("xl"),
  };
};
