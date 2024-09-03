https://www.linkedin.com/advice/1/how-can-you-optimize-event-handling-delegation#:~:text=Event%20delegation%20means%20assigning%20one,click%20handler%20to%20their%20container.

### What is Event Delegation?

Event delegation is a technique in JavaScript where you leverage event bubbling to manage events for multiple elements by using a single event listener on a common ancestor element. Instead of attaching individual event listeners to each element, you attach one event listener to a parent element, which then "delegates" the event handling to the appropriate child element.

### How Event Delegation Works:

1. **Event Bubbling:**
   - When an event occurs on an element, it first runs the handlers on that element, and then it "bubbles up" to its ancestors. Event delegation takes advantage of this bubbling behavior.

2. **Using a Parent Listener:**
   - You attach a single event listener to a parent element that contains multiple child elements.
   - Inside the event handler, you can check the `event.target` property to determine which child element triggered the event and handle it accordingly.

### Example of Event Delegation:

Suppose you have a list of items, and you want to perform an action when any list item is clicked. Instead of adding a click event listener to each `<li>` element, you add one listener to the parent `<ul>`:

```javascript
document.querySelector('ul').addEventListener('click', function (e) {
  if (e.target && e.target.nodeName === 'LI') {
    console.log('List item ', e.target.textContent, ' was clicked!');
  }
});
```

### Typical Use Cases for Event Delegation:

1. **Handling Events on Dynamically Added Elements:**
   - When elements are added dynamically to the DOM (e.g., via AJAX or user actions), event delegation is especially useful because you don't need to reattach event listeners for each new element. The parent listener handles all current and future child elements.

   Example: Managing click events on a dynamically generated list of items.

2. **Improving Performance:**
   - Attaching individual event listeners to a large number of elements can be inefficient and consume more memory. Event delegation reduces the number of event listeners by attaching just one to a parent element.

   Example: Handling clicks on a table with hundreds of rows.

3. **Simplifying Code:**
   - Event delegation can simplify your code by centralizing event handling in one place, making it easier to maintain and manage.

   Example: Implementing toggle functionality for multiple items (like an accordion) with a single event listener.

4. **Handling Similar Events Across Multiple Elements:**
   - When you have multiple elements that need to respond similarly to the same event, event delegation allows you to use a single event handler for all of them.

   Example: Managing form input validations for multiple input fields within a form.

### Key Points to Remember:

- **Use `event.target`:** In the event handler, `event.target` points to the actual element that triggered the event. You can use this to identify and handle the specific child element that was interacted with.
  
- **Event Delegation Limitations:** While event delegation is powerful, it's mainly applicable to events that bubble up, such as `click`, `focus`, `blur`, etc. Not all events bubble (e.g., `scroll`, `load`), so event delegation cannot be used with them.

### Example with Dynamic Content:

Imagine a chat application where new messages are added dynamically. You want to allow users to like a message by clicking a "like" button:

```javascript
document.querySelector('.messages').addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('like-button')) {
    console.log('Message liked:', e.target.closest('.message').textContent);
  }
});

// Here, `.messages` is the parent element containing all message elements
// and `.like-button` is a class applied to the like buttons within each message.
```

In this example, even if new messages are added dynamically, the single event listener on `.messages` handles clicks on any `.like-button` that appears within it.