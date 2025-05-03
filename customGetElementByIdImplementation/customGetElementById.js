function customGetElementById(id, root = document.body) {
    // Base case: check if the current root element has the matching id
    if (root.id === id) {
      return root;
    }
  
    // Recursive case: search through children
    for (let i = 0; i < root.children.length; i++) {
      const found = customGetElementById(id, root.children[i]);
      if (found) return found;
    }
  
    // If no match found in the subtree return null
    return null;
}
  