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
    try {
      const content = category
        ? require(`../docs/${category}/${page}`)
        : require(`../docs/${page}`);

      return await fetch(content)
        .then(response => response.text())
        .then(text => ({ content: { __html: converter.makeHtml(text) } }));
    } catch (error) {
      return {
        content: {
          __html: `
            <h1 class="error-number">404</h1>
            <h2 class="error-msg">
              No file found at path
              <strong>${category ? category + "/" : ""}${page}</strong>
            </h2>
          `
        }
      };
    }
  }
};

export default MarkdownUtils;
