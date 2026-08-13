import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { offers } from "../catalog";

export default defineTool({
  name: "get_offers",
  title: "Get current offers",
  description:
    "Get the current AlexGoa offers, such as the free cricket schedule banner and the B2C commission system.",
  inputSchema: {},
  outputSchema: { offers: z.array(z.object({ title: z.string(), details: z.array(z.string()) })) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(offers, null, 2) }],
    structuredContent: { offers },
  }),
});
