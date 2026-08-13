import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { contact } from "../catalog";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description: "Get the public Marhaba contact and support details, including the WhatsApp link.",
  inputSchema: {},
  outputSchema: { brand: z.string(), whatsapp: z.string(), support: z.string(), note: z.string() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
