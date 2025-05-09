document.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName.toLowerCase() !== 'path') return;

    const fillAttr = target.getAttribute("fill")?.toLowerCase();
    const originalFillAttr = target.getAttribute("data-original-fill");

    if (fillAttr === "transparent" && originalFillAttr) {
        target.setAttribute("fill", originalFillAttr);
        target.removeAttribute("data-original-fill");
    } else if (fillAttr === "#009900" && !originalFillAttr) {
        target.setAttribute("data-original-fill", fillAttr);
        target.setAttribute("fill", "transparent");
    } else {
        return;
    }

    event.preventDefault();
    event.stopPropagation();

}, true);