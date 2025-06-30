-- This file needs to have same structure as nvconfig.lua
-- https://github.com/NvChad/ui/blob/v3.0/lua/nvconfig.lua
-- Please read that file to know all available options :(

---@type ChadrcConfig
local M = {}

M.base46 = {
  theme = "catppuccin",
  transparency = true,

 hl_override = {
    Comment    = { fg = "#CCCCCC", italic = true },
    ["@comment"] = { fg = "#CCCCCC", italic = true },
    TSComment  = { fg = "#CCCCCC", italic = true },
  },
}

M.ui = {
  statusline = {
    separator_style = "block",
    modules = {
      cwd = function()
        local filepath = vim.fn.expand "%:~:."
        if filepath == "" then
          return "No File"
        end
        return filepath
      end,
    },
  },
}
M.nvdash = {
  load_on_startup = true,
}

return M
