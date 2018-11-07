import showdown from "showdown";
import { NavCategory } from "../Nav";

// Capture all text within parens
const rxMdLabel = /\[(.*)\]/;

// Capture all text within square braces
const rxMdLink = /\((.*)\)/;

const rxIsCategory = /^- \[/;
// const rxIsDoc = /^  - \[/

const MarkdownUtils = {
  /** Generate Nav menu from markdown text. Expects a 2 level deep md list */
  mdToCategories: (md: string) =>
    md
      .trim()
      .split("\n")
      .reduce((agg: Array<NavCategory>, curr: string) => {
        let link;
        let name;
        if (rxIsCategory.test(curr)) {
          name = curr.match(rxMdLabel) || [];
          name = name[1] || "";
          link = curr.match(rxMdLink) || [];
          link = "/" + link[1];
          agg[agg.length] = { name, link, items: [] };
        } else {
          name = curr.match(rxMdLabel) || [];
          name = name[1] || "";
          link = curr.match(rxMdLink) || [];
          link = "/" + link[1];
          agg[agg.length - 1].items.push({ name, link });
        }
        return agg;
      }, []),

  /** Retrieve md content from docs by given category and page */
  getPageContent: async (category: string, page: string) => {
    const converter = new showdown.Converter();
    const content = page
      ? require(`../docs/${category}/${page}`)
      : require(`../docs/${category}`);

    return await fetch(content)
      .then(response => response.text())
      .then(text => ({ content: { __html: converter.makeHtml(text) } }));
  }
};

export default MarkdownUtils;
