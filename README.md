1. What is the difference between props and state?
 - Props are data passed down from a parent component to a child meaning it is only an ingredient that the child can use and the child can only read them. State is data that a component keeps and manages by itself, and when it changes, the component re-renders meaning its like a notebook and everytime it change, it gets remade.

2. Why can a child component not modify the props it receives?
 - Props belong to the parent, not the child. React makes data flow one way, from parent to child, so the app stays predictable and easier to debug. If a child needs something changed, it asks the parent to do it through a function.

3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?
 - The parent passes a function down to the child as a prop. When the button is clicked, the child calls that function and gives it the product title. The function runs inside the parent, so the parent receives the data and can update its own state (the cart count and last added item).

4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?
 - React uses the key to tell which item in the list is which, so it knows what changed, was added, or was removed between renders. If a key is missing or duplicated, React may update or remove the wrong item, mix up component state, or re-render unnecessarily. It also shows a warning in the console.

5. What does the children prop allow you to do that a normal prop does not?
 - It lets you put any JSX between a component's opening and closing tags, such as a <span>New</span> badge, text, or even other components. A normal prop usually carries a single value like a string, number, or function, while children lets the parent pass whole pieces of content to display inside the component.
