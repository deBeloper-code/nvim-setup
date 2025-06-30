local chat = require "CopilotChat"

-- Configuración inicial de CopilotChat
chat.setup {
  window = {
    layout = "float", -- 'vertical', 'horizontal', 'float', 'replace'
    width = 0.7, -- fractional width of parent, or absolute width in columns when > 1
    height = 0.7, -- fractional height of parent, or absolute height in rows when > 1
    relative = "editor", -- 'editor', 'win', 'cursor', 'mouse'
    border = "double", -- 'none', single', 'double', 'rounded', 'solid', 'shadow'
    title = "Copilot Chat", -- title of chat window
    zindex = 1, -- determines if window is on top or below other floating windows
  },
  allow_insecure = true,
  question_header = "## Bryan", -- Header to use for user questions
  answer_header = "## Copilot ", -- Header to use for AI answers
  error_header = "## Error ", -- Header to use for errors
  separator = "──", -- Separator to use in chat
  auto_follow_cursor = false,
  opts = {
    highlight_headers = false,
    separator = "---",
    error_header = "> [!ERROR] Error",
    mappings = {
      complete = {
        detail = "Use @<Tab> or /<Tab> for options.",
        insert = "<Tab>",
      },
    },
  },
}
