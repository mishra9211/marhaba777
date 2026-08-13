import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { categoryInfo, panels, type PanelCategory } from "../catalog";

export default defineTool({
  name: "list_panels",
  title: "List panels",
  description:
    "List the publicly advertised Marhaba panel sites by category (semi, b2b, b2c). Omit the category to get all of them.",
  inputSchema: {
    category: z
      .enum(["semi", "b2b", "b2c"])
      .optional()
      .describe("Panel category to filter by. Omit for all categories."),
  },
  outputSchema: { categories: z.array(z.record(z.string(), z.unknown())) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const keys = (category ? [category] : (Object.keys(panels) as PanelCategory[])) as PanelCategory[];
    const result = keys.map((key) => ({
      category: key,
      ...categoryInfo[key],
      sites: panels[key],
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { categories: result },
    };
  },
});
