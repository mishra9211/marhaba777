import { defineMcp } from "@lovable.dev/mcp-js";
import listPanelsTool from "./tools/list-panels";
import listCurrenciesTool from "./tools/list-currencies";
import getOffersTool from "./tools/get-offers";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "b2b-b2c-launchpad",
  title: "B2B & B2C Launchpad",
  version: "0.1.0",
  instructions:
    "Public catalog tools for Marhaba's B2B and B2C panel business. Use `list_panels` for SEMI/B2B/B2C site listings, `list_currencies` for supported currencies, `get_offers` for current promotions, and `get_contact` for support details.",
  tools: [listPanelsTool, listCurrenciesTool, getOffersTool, getContactTool],
});
