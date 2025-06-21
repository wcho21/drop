import Block from "./Block.astro";
import Newline from "./Newline.astro";
import Indent from "./block/Indent.astro";
import If from "./branching/If.astro";
import Elif from "./branching/Elif.astro";
import Else from "./branching/Else.astro";
import Foreach from "./iteration/Foreach.astro";
import Forever from "./iteration/Forever.astro";
import Until from "./iteration/Until.astro";
import While from "./iteration/While.astro";
import Comment from "./span/Comment.astro";
import Break from "./word/Break.astro";
import Continue from "./word/Continue.astro";
import Keyword from "./word/Keyword.astro";
import Return from "./word/Return.astro";
import Throw from "./word/Throw.astro";

const all = {
  Block,
  Newline,
  Indent,
  If,
  Elif,
  Else,
  Foreach,
  Forever,
  Until,
  While,
  Comment,
  Break,
  Continue,
  Keyword,
  Return,
  Throw,
};
export default all;
