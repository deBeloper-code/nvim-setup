local options = {
  display = {
    action_palette = {
      width = 95,
      height = 10,
      prompt = "Prompt ", -- Prompt used for interactive LLM calls
      provider = "telescope", -- default|telescope|mini_pick
      opts = {
        show_default_actions = true, -- Show the default actions in the action palette?
        show_default_prompt_library = true, -- Show the default prompt library in the action palette?
      },
    },
    chat = {
      -- Change the default icons
      icons = {
        pinned_buffer = " ",
        watched_buffer = "👀 ",
      },

      -- Alter the sizing of the debug window
      debug_window = {
        ---@return number|fun(): number
        width = vim.o.columns - 5,
        ---@return number|fun(): number
        height = vim.o.lines - 2,
      },

      -- Options to customize the UI of the chat buffer
      window = {
        layout = "vertical", -- float|vertical|horizontal|buffer
        position = nil, -- left|right|top|bottom (nil will default depending on vim.opt.plitright|vim.opt.splitbelow)
        border = "double",
        height = 0.8,
        width = 0.4,
        relative = "editor",
        opts = {
          breakindent = true,
          cursorcolumn = true,
          cursorline = false,
          foldcolumn = "2",
          linebreak = true,
          list = true,
          numberwidth = 2,
          signcolumn = "no",
          spell = false,
          wrap = true,
        },
      },

      ---Customize how tokens are displayed
      ---@param tokens number
      ---@param adapter CodeCompanion.Adapter
      ---@return string
      token_count = function(tokens, adapter)
        return " (" .. tokens .. " tokens)"
      end,
    },
  },
  strategies = {
    chat = {
      roles = {
        ---The header name for the LLM's messages
        ---@type string|fun(adapter: CodeCompanion.Adapter): string
        llm = function(adapter)
          return "CodeCompanion (" .. adapter.formatted_name .. ")"
        end,

        ---The header name for your messages
        ---@type string
        user = "Bryan",
      },
      agents = {
        ["my_agent"] = {
          description = "A custom agent combining tools",
          system_prompt = "Describe what the agent should do",
          tools = {
            "cmd_runner",
            "editor",
            -- Add your own tools or reuse existing ones
          },
        },
      },
      adapter = "ollama",
      variables = {
        ["yanked"] = {
          callback = function()
            local yanked_text = vim.fn.getreg '"0'
            return yanked_text
          end,
          description = "Explain what my_var does",
          opts = {
            contains_code = false,
          },
        },
      },
    },
    slash_commands = {
      ["file"] = {
        callback = "strategies.chat.slash_commands.file",
        description = "Select a file using Telescope",
        opts = {
          provider = "telescope", -- Other options include 'default', 'mini_pick', 'fzf_lua', snacks
          contains_code = true,
        },
      },
    },
    inline = {
      adapter = "ollama",
    },
  },
  adapters = {
    llama3 = function()
      return require("codecompanion.adapters").extend("ollama", {
        name = "llama3", -- Give this adapter a different name to differentiate it from the default ollama adapter
        schema = {
          model = {
            default = "llama3:latest",
          },
          num_ctx = {
            default = 16384,
          },
          num_predict = {
            default = -1,
          },
        },
      })
    end,
  },
}

return options
