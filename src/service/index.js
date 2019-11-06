import AccountService from "./AccountService.js";
import appHomeService from "./appHomeService.js";
export default {
  ...AccountService,
  ...appHomeService
};
