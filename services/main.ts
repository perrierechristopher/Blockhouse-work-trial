import { requestToApi } from "./requestHandler";

export const dashboardAPI: any = {
  getLineChartData: requestToApi("/line-chart-data", "GET"),
  getPieChartData: requestToApi("/pie-chart-data", "GET"),
  getBarChartData: requestToApi("/bar-chart-data", "GET"),
};
