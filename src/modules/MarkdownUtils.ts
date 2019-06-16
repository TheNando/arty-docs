import showdown from "showdown";
import { NavCategory } from "../Nav";

// Capture all text within parens
const rxMdLabel = /\[(.*)\]/;

// Capture all text within square braces
const rxMdLink = /\((.*)\)/;

const rxIsCategory = /^- \[/;
// const rxIsDoc = /^  - \[/

const DOCS_PATH =
  "https://api.github.com/repos/TheNando/arty-docs/contents/docs/";

const INDEX_URL = `${DOCS_PATH}index.md?`;

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
      const path = `${category ? category + "/" : ""}${page}`;

      const content = `${DOCS_PATH}${path}?`;

      return await fetch(content)
        .then(response => response.json())
        .then(meta => ({
          content: { __html: converter.makeHtml(atob(meta.content)) }
        }));
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
  },

  getTableOfContents: () =>
    fetch(INDEX_URL)
      .then(response => response.json())
      .then(meta => MarkdownUtils.mdToCategories(atob(meta.content)))
};

export default MarkdownUtils;
