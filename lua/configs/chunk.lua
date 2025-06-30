local hlchunk = require "hlchunk"

hlchunk.setup {
  chunk = {
    enable = true,
    chars = {
      horizontal_line = "─",
      vertical_line = "│",
      left_top = "┌",
      left_bottom = "└",
      right_arrow = ">",
    },
    style = "#00ffff",
  },
  indent = {
    enable = true,
    chars = {
      "․",
      "⁚",
      "⁖",
      "⁘",
      "⁙",
    },
    style = {
      "#666666",
      "#555555",
      "#444444",
    },
  },
  line_num = {
    enable = true,
    style = "#00ffff",
  },
}
