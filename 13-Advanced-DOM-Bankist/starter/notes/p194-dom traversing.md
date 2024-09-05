
## childNodes vs children

In JavaScript, both `childNodes` and `children` are properties used to access child elements of a DOM node, but they have important differences:

1. **`childNodes`**:
   - This property returns a **NodeList** of all child nodes, including **text nodes**, **element nodes**, and **comment nodes**.
   - It includes any whitespace (like spaces or line breaks) between elements because those are considered text nodes.
   - Example:
     ```javascript
     let parent = document.getElementById('parent');
     console.log(parent.childNodes); // Logs NodeList of all child nodes (including text nodes and comments)
     ```

2. **`children`**:
   - This property returns an **HTMLCollection** of only the **element nodes** (i.e., elements like `<div>`, `<span>`, etc.).
   - It **excludes text nodes, comments**, or other non-element nodes.
   - Example:
     ```javascript
     let parent = document.getElementById('parent');
     console.log(parent.children); // Logs HTMLCollection of only element nodes
     ```

### Key Differences:
- **Type of nodes**:
  - `childNodes` includes all types of nodes (elements, text, comments).
  - `children` includes only element nodes.
  
- **Returned type**:
  - `childNodes` returns a **NodeList**, which can contain all kinds of nodes.
  - `children` returns an **HTMLCollection**, which contains only element nodes.

### Example:
If the HTML is as follows:
```html
<div id="parent">
  Hello
  <p>Paragraph 1</p>
  <!-- A comment -->
  <span>Span 1</span>
</div>
```
And you run:
```javascript
let parent = document.getElementById('parent');
console.log(parent.childNodes); // NodeList: text ("Hello"), <p>, comment, <span>
console.log(parent.children);   // HTMLCollection: <p>, <span>
```

So, `childNodes` will contain the text "Hello" and the comment node, while `children` will only contain the `<p>` and `<span>` elements.


## parentNode vs parentElement

In JavaScript, both `parentNode` and `parentElement` are properties that return the parent of a DOM node, but they behave slightly differently:

1. **`parentNode`**:
   - This property returns the **parent node** of the current node, which could be **any type of node** (an element node, a document node, etc.).
   - It works with all node types, including text nodes and other non-element nodes.
   - If the node doesn't have a parent, it returns `null`.
   - Example:
     ```javascript
     let element = document.getElementById('child');
     console.log(element.parentNode); // Returns the parent node (could be an element or document node)
     ```

2. **`parentElement`**:
   - This property returns the **parent element** of the current node, but only if the parent is an **element node**.
   - If the parent node is not an element (e.g., if it's a document node), `parentElement` returns `null`.
   - It is specifically designed to work with element nodes.
   - Example:
     ```javascript
     let element = document.getElementById('child');
     console.log(element.parentElement); // Returns the parent element (null if the parent is not an element)
     ```

### Key Differences:
- **Type of parent returned**:
  - `parentNode` returns any parent node (including element nodes, document nodes, or others).
  - `parentElement` returns only element nodes as parents. If the parent is not an element, it returns `null`.

### Example:
If the HTML is as follows:
```html
<div id="parent">
  <p id="child">This is a paragraph.</p>
</div>
```
And you run:
```javascript
let child = document.getElementById('child');
console.log(child.parentNode);   // Returns the <div> element (because <div> is the parent node)
console.log(child.parentElement); // Returns the <div> element (because <div> is an element node)
```
However, in the case where the parent node is not an element, like in the case of a document node:
```javascript
let html = document.documentElement;
console.log(html.parentNode);   // Returns the document node
console.log(html.parentElement); // Returns null (because the document is not an element)
```

### Summary:
- Use `parentNode` when you want to get the parent node, regardless of whether it's an element or another type of node.
- Use `parentElement` when you specifically want the parent **element** and don't care about non-element nodes.


Both parentNode and parentElement return only one single node or element, not a collection. They retrieve the direct parent of the current node or element in the DOM tree, or null if no parent exists.



In JavaScript, `nextElementSibling` and `previousElementSibling` are properties used to navigate between sibling elements in the DOM, but they work in opposite directions. Here's how they function:

### **`nextElementSibling`**:
- This property returns the **next sibling element** (i.e., the next adjacent element node) immediately following the current element in the DOM hierarchy.
- If there is no next sibling element (i.e., it's the last child or the next node is not an element), it returns `null`.
- Example:
  ```javascript
  let element = document.getElementById('item1');
  console.log(element.nextElementSibling); // Logs the next sibling element after #item1
  ```

### **`previousElementSibling`**:
- This property returns the **previous sibling element** (i.e., the previous adjacent element node) immediately preceding the current element in the DOM hierarchy.
- If there is no previous sibling element (i.e., it's the first child or the previous node is not an element), it returns `null`.
- Example:
  ```javascript
  let element = document.getElementById('item2');
  console.log(element.previousElementSibling); // Logs the previous sibling element before #item2
  ```

### Key Differences:
- **Direction**:
  - `nextElementSibling` moves to the **next element** in the DOM hierarchy.
  - `previousElementSibling` moves to the **previous element** in the DOM hierarchy.

- **Returns**:
  - Both properties return the next or previous **element node** (like a `<div>`, `<p>`, etc.), ignoring non-element nodes (like text nodes or comments).
  - If there are no more sibling elements in the respective direction, both return `null`.

### Example:
Given the following HTML structure:
```html
<ul>
  <li id="item1">Item 1</li>
  <li id="item2">Item 2</li>
  <li id="item3">Item 3</li>
</ul>
```
If you run:
```javascript
let item1 = document.getElementById('item1');
console.log(item1.nextElementSibling);   // Logs <li id="item2">Item 2</li>

let item3 = document.getElementById('item3');
console.log(item3.previousElementSibling); // Logs <li id="item2">Item 2</li>
```

In both cases, non-element nodes such as text or comment nodes are skipped, and only sibling elements are returned.

### Summary:
- `nextElementSibling` gets the next element node in the DOM, and `previousElementSibling` gets the previous one.
- Both ignore non-element nodes (such as text and comments).

Both nextElementSibling and previousElementSibling return only one element, not an HTMLCollection or a NodeList.