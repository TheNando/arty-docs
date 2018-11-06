import { NavCategory } from "../Nav";

const MarkdownUtils = {
  /** Generate Nav menu from markdown text. Expects a 2 level deep md list */
  mdToCategories: (md: string) =>
    md.split("\n").reduce((agg: Array<NavCategory>, curr: string) => {
      if (curr.substr(0, 2) === "- ") {
        agg[agg.length] = { name: curr.substr(2), items: [] };
      } else {
        agg[agg.length - 1].items.push({ name: curr.substr(4) });
      }
      return agg;
    }, [])
};

export default MarkdownUtils;
