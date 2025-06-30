require "nvchad.mappings"

-- add yours here

local map = vim.keymap.set

map("n", ";", ":", { desc = "CMD enter command mode" })
map("i", "jk", "<ESC>")

map({ "n", "t" }, "<A-t>", function()
  require("nvchad.term").toggle { pos = "sp", id = "htoggleTerm" }
end, { desc = "terminal toggleable horizontal term" })

-- Code Companion AI
-- map("n", "<leader>cc", "<cmd>CodeCompanionActions<cr>", {desc = "Open the Action Palette IA"})
-- map("n", "<A-c>", "<cmd>CopilotChatToggle<cr>", {desc = "Toggle Code IA"})
-- map("n", "<leader>ca", "<cmd>CodeCompanionChat Add<cr>", {desc = "Add visually selected chat to the current chat buffer"})
-- Code Companion AI
--
map("n", "]]", function()
  require("illuminate").goto_next_reference(false)
end, { desc = "Ir a la siguiente coincidencia resaltada" })

map("n", "[[", function()
  require("illuminate").goto_prev_reference(false)
end, { desc = "Ir a la anterior coincidencia resaltada" })

-- Code Copilot

map("n", "<A-c>", "<cmd>CopilotChatToggle<cr>", {desc = "Toggle Code IA"})
map("n", "<leader>cc", function()
  local actions = require "CopilotChat.actions"
  require("CopilotChat.integrations.telescope").pick(actions.prompt_actions())
end, { desc = "CopilotChat - Prompt actions" })
map("n", "<leader>ca", function()
  local input = vim.fn.input "Quick Chat: "
  if input ~= "" then
    require("CopilotChat").ask(input, {
      selection = require("CopilotChat.select").buffer,
    })
  end
end, { desc = "CopilotChat - Quick chat" })

-- proxy
map("n", "<A-p>", "<cmd>CopilotToggleProxy<cr>", {desc = "Toggle Proxy"})


-- -- Code Copilot
