return {
  { "nvim-lua/plenary.nvim", branch = "master" },
  {
    "folke/todo-comments.nvim",
    lazy = false,
    dependencies = { "nvim-lua/plenary.nvim" },
    config = function()
      require("todo-comments").setup {}
    end,
  },
  {
    "nvim-telescope/telescope.nvim",
    dependencies = { "nvim-treesitter/nvim-treesitter" },
    cmd = "Telescope",
    opts = function()
      return require "configs.telescopes"
    end,
  },
  {
    "stevearc/conform.nvim",
    opts = require "configs.conform",
  },
  {
    "neovim/nvim-lspconfig",
    config = function()
      require "configs.lspconfig"
    end,
  },
  {
    "kdheepak/lazygit.nvim",
    lazy = true,
    cmd = {
      "LazyGit",
      "LazyGitConfig",
      "LazyGitCurrentFile",
      "LazyGitFilter",
      "LazyGitFilterCurrentFile",
    },
    -- optional for floating window border decoration
    dependencies = {
      "nvim-lua/plenary.nvim",
    },
    -- setting the keybinding for LazyGit with 'keys' is recommended in
    -- order to load the plugin when the command is run for the first time
    keys = {
      { "<leader>lg", "<cmd>LazyGit<cr>", desc = "LazyGit" },
    },
  },

  {
    "nvim-treesitter/nvim-treesitter",
    opts = {
      filters = {
        dotfiles = false,
        custom = { "node_modules" },
      },
      ensure_installed = {
        "vim",
        "lua",
        "vimdoc",
        "html",
        "css",
        "typescript",
        "javascript",
        "java",
        "tsx",
        "json5",
      },
    },
  },
  {
    "olimorris/codecompanion.nvim",
    lazy = false,
    dependencies = {
      "nvim-lua/plenary.nvim",
      "nvim-treesitter/nvim-treesitter",
      "hrsh7th/nvim-cmp",
      "nvim-telescope/telescope.nvim",
    },
    opts = require "configs.codecompanion",
  },
  {
    "someone-stole-my-name/yaml-companion.nvim",
    lazy = false,
    requires = {
      { "neovim/nvim-lspconfig" },
      { "nvim-lua/plenary.nvim" },
      { "nvim-telescope/telescope.nvim" },
    },
    config = function()
      require("telescope").load_extension "yaml_schema"
    end,
  },
  {
    "MeanderingProgrammer/render-markdown.nvim",
    dependencies = { "nvim-treesitter/nvim-treesitter", "nvim-tree/nvim-web-devicons" }, -- if you prefer nvim-web-devicons
    opts = require "configs.rendermarkdown",
    ft = { "markdown", "codecompanion", "copilot-chat" },
  },
  {
    "RRethy/vim-illuminate",
    lazy = false,
    config = function()
      require("illuminate").configure {
        providers = { "lsp", "treesitter", "regex" },
        delay = 200, -- Tiempo en milisegundos antes de resaltar
        filetypes_denylist = { "NvimTree", "TelescopePrompt" },
        under_cursor = true, -- Resaltar la palabra bajo el cursor
      }
    end,
  },
  {
    "shellRaining/hlchunk.nvim",
    event = { "BufReadPre", "BufNewFile" },
    lazy = false,
    config = function()
      require "configs.chunk"
    end,
  },
  {
    "CopilotC-Nvim/CopilotChat.nvim",
    lazy = false,
    dependencies = {
      { "github/copilot.vim" }, -- or zbirenbaum/copilot.lua
      { "nvim-lua/plenary.nvim", branch = "master" }, -- for curl, log and async functions
    },
    config = function()
      require "configs.copilot"
    end,
  },
  {
    "rcarriga/nvim-notify",
    lazy = false,
    config = function()
      local notify = require "notify"
      vim.notify = notify
      notify.setup {
        stages = "fade_in_slide_out", -- Animaciones
        timeout = 3000, -- Tiempo antes de ocultarse (ms)
        background_colour = "#000000", -- Fondo transparente
      }
    end,
  },
}
