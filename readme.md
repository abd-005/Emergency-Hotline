## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**getElementById** is responsible for fetch ID from HTML Document while **getElementsByClassName** is responsible for fetch all of the same classes and **querySelector** is usually responsible for fetch ID or the first ID available **querySelectorAll** is responsible for fetch classes. querySelector in the way of CSS selector.

2. How do you **create and insert a new element into the DOM**?

**step 1:** create element with **document.createElement()**
**step 2:** set the content with **innerText**
**step 1:** insert the new element with **appendChild()**

3. What is **Event Bubbling** and how does it work?

  Event Bubbling is an event propagation.
it works in few steps:
  a. target element
  b. event handler for target element
  c. nevigate to parent element and execute event handlers
  d. use DOM tree until it reached the root element 
  
4. What is **Event Delegation** in JavaScript? Why is it useful?
 
   **Event Delegation** is a tecnique to attach single event listener to a parent element instead of multiple listener.
it's usefule 'cause of **Performance, Dynamic Elements and Simplified Code**

5. What is the difference between **preventDefault() and stopPropagation()** methods?

  **preventDefault()** is responsible for preventing form submition.
  **stopPropagation()** stops the event from propagating to parent elements.
