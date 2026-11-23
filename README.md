Mini Product Catalog built with React and Vite for DCIT26 Laboratory Exercise 3.


1. **What is the difference between props and state?**
    - Props are values passed from a parent component to a child, and the child
   can only read them. State is data that a component owns and manages itself,
   and updating it makes the component re-render.

2. **Why can a child component not modify the props it receives?**
    - Props belong to the parent. React keeps data flowing one way (parent to
   child) so the app is predictable and easier to debug. If a child needs to
   change something, it asks the parent to do it.

3. **How does the onAddToCart callback allow data to flow from child to parent?**
    - The parent passes a function down as a prop. When the button is clicked, the
   child calls that function and passes the product title as an argument. The
   function runs in the parent, so the parent receives the data and updates its
   own state.

4. **Why is the key prop required when rendering a list with .map()?**
    - React uses keys to identify which item is which between renders. If keys are
   missing or duplicated, React may update the wrong item, lose component state,
   or re-render unnecessarily, and it shows a warning in the console.

5. **What does the children prop allow you to do that a normal prop does not?**
    - It lets you put any JSX (elements, text, or other components) between a
   component's opening and closing tags, such as a "New" or "Sale" badge, instead
   of only passing simple values like strings or numbers.