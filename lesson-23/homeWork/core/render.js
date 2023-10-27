export const render = (node, elements) => {
  const children = node.children;

  [...children].forEach((child) => {
    child.remove();
  });

  if (Array.isArray(elements)) return node.append(...elements);
};
