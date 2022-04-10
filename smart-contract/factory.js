import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4fb86bDCC6c0565D59504742913F404A02E73F5A"
);

export default instance;
