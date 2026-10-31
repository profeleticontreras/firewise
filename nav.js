// Site menu shared by every page. To add an issue, add one line to PAGES below.
(function () {
  var PAGES = [
    { label: "Home", href: "index.html" },
    { label: "Issue 1 | Fall 2026", href: "issue-1.html" }
  ];

  var css =
    ".sitenav{background:#1B3A2D;border-bottom:3px solid #B8924A}" +
    ".sitenav ul{list-style:none;margin:0 auto;padding:0 12px;max-width:980px;display:flex;flex-wrap:wrap;gap:0 4px}" +
    ".sitenav a{display:block;padding:13px 16px;min-height:44px;color:#F7F3EA;text-decoration:none;font:700 16px/1.3 Calibri,'Segoe UI',Arial,sans-serif;border-bottom:4px solid transparent}" +
    ".sitenav a:hover{background:#274A3A}" +
    ".sitenav a[aria-current='page']{color:#E3C98F;border-bottom-color:#E3C98F}" +
    ".sitenav a:focus-visible{outline:3px solid #E3C98F;outline-offset:-3px}";

  var here = location.pathname.split("/").pop() || "index.html";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var nav = document.createElement("nav");
  nav.className = "sitenav";
  nav.setAttribute("aria-label", "Site menu");
  var ul = document.createElement("ul");
  PAGES.forEach(function (p) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = p.href;
    a.textContent = p.label;
    if (p.href === here) a.setAttribute("aria-current", "page");
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);

  function mount() { document.body.insertBefore(nav, document.body.firstChild); }
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
