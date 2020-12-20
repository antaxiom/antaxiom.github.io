/** @author https://github.com/k4rakara/ */

const leRegExp: RegExp = /<a href="([a-zA-Z0-9\-]+)">(.*?)<\/a> — ([A-Za-z]+ \d+, \d{4})/;

class Post {
  public el: HTMLParagraphElement;
  public title: string;
  public url: string;
  public date: Date;

  constructor(el: HTMLParagraphElement) {
    this.el = el;
    [ this.title, this.url, this.date ] = ((): [ string, string, Date ] => {
      const matches: RegExpMatchArray = this.el.innerHTML.match(leRegExp);
      if (matches != null) {
        return [ matches[2], matches[1], new Date(matches[3]) ];
      } else {
        throw new Error(`Failed to match RegExp on the following HTML:\n${this.el.innerHTML}`);
      }
    })();
  }
}

document.addEventListener("DOMContentLoaded", (): void => {
  (window as any).posts =
    // Select all `<p>` elements that are directly parented by `<body>`.
    Array.from(document.querySelectorAll("body > p"))
    // Filter out `<p>` elements that don't have a `<a>` element as a child or
    // contain the _full_ link to the GitHub repo.
    .filter((el: HTMLParagraphElement): boolean => el.innerHTML.match(leRegExp) != null)
    // Create `Post`s from the remaining `<p>` elements.
    .map((el: HTMLParagraphElement): Post => new Post(el))
    // _Temporarily_ remove the `Post`s from the DOM.
    .map((post: Post): Post => { post.el.remove(); return post; })
    // Sort the `Post`s by ascending date.
    .sort((a: Post, b: Post): number => b.date.getTime() - a.date.getTime())
    // Add the `Post`s back to the DOM.
    .map((post: Post): Post => { document.body.append(post.el); return post; });
});

