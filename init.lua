vim.g.base46_cache = vim.fn.stdpath "data" .. "/base46/"
vim.g.mapleader = " "
-- bootstrap lazy and all plugins
local lazypath = vim.fn.stdpath "data" .. "/lazy/lazy.nvim"

if not vim.uv.fs_stat(lazypath) then
  local repo = "https://github.com/folke/lazy.nvim.git"
  vim.fn.system { "git", "clone", "--filter=blob:none", repo, "--branch=stable", lazypath }
end

vim.opt.rtp:prepend(lazypath)

local lazy_config = require "configs.lazy"

-- load plugins
require("lazy").setup({
  {
    "NvChad/NvChad",
    lazy = false,
    branch = "v2.5",
    import = "nvchad.plugins",
  },

  { import = "plugins" },
}, lazy_config)

-- load theme
dofile(vim.g.base46_cache .. "defaults")
dofile(vim.g.base46_cache .. "statusline")

require "options"
require "nvchad.autocmds"

-- OR setup with some options
require("nvim-tree").setup {
  filters = {
    exclude = { "node_modules", ".env", "coverage", "dist", "target", ".scannerwork", ".json", ".node", "logs" },
  },
}

local chat = require "CopilotChat"
local proxyWal = "http://proxy-intlho.wal-mart.com:8080"
-- Desactivar proxy por defecto
vim.g.copilot_proxy = nil
chat.proxy = nil

-- Valores comunes para la configuración de CopilotChat
local common_chat_config = {
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

-- Función para activar o desactivar el proxy
local function toggle_proxy(proxy)
  vim.g.copilot_proxy = proxy
  vim.g.copilot_proxy_strict_ssl = not proxy
  chat.setup(vim.tbl_extend("force", common_chat_config, { proxy = proxy }))
  vim.cmd "Copilot restart"
  local status = proxy and "🟢 Copilot Proxy Activado" or "🔴 Copilot Proxy Desactivado"
  vim.notify(status, "info", { title = "Copilot" })
end

-- Verifica el estado inicial del proxy
if vim.g.copilot_proxy then
  vim.notify("🟢 Copilot Proxy Activado", "info", { title = "Copilot" })
else
  vim.notify("🔴 Copilot Proxy Desactivado", "info", { title = "Copilot" })
end

-- Crear un comando para alternar entre el proxy activado y desactivado
vim.api.nvim_create_user_command("CopilotToggleProxy", function()
  if vim.g.copilot_proxy then
    toggle_proxy(nil) -- Desactivar Proxy
  else
    toggle_proxy(proxyWal) -- Activar Proxy
  end
end, {})

vim.cmd "highlight IlluminatedWordText guibg=#3B4252 guifg=white"

vim.schedule(function()
  require "mappings"
end)
