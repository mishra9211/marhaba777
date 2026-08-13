import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { currencies } from "../catalog";

export default defineTool({
  name: "list_currencies",
  title: "List currencies",
  description: "List every currency AlexGoa panels can be set up in.",
  inputSchema: {},
  outputSchema: { currencies: z.array(z.string()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: currencies.join("\n") }],
    structuredContent: { currencies },
  }),
});
