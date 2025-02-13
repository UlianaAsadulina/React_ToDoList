# React + Vite

Your todo list application must have:

A heading labeling it as a "todo list."
A list of "todo" items, which are strings listing activities to be accomplished (e.g. "find that missing sock"). Each "todo" item should have:

A checkbox next to it which indicates whether it is "complete."
A "delete" button next to it which removes it from the list.

The "delete" button should be disabled unless the todo is complete!
An "edit" button that replaces the todo string with a text input used to edit the todo.

Hint: bind the value of this text input to a piece of state so that it is always accurate, even when first displayed!
When this text input is active, the "delete" and "edit" buttons should be hidden, and a "save" button should appear. The "save" button should save any changes made to the todo within the text input.
An input element that creates new todo items and adds them to the list.
New todos should be added to the top of the list visually; the oldest todos should be at the bottom.

Objective:
Use the useReducer and/or useImmerReducer hook to manage state with reducer functions.
Use useState in places where reducers are not appropriate or necessary.
Implement controlled forms and inputs.
Effectively decide where pieces of state should live.
Use conditional rendering and conditional styling to provide a positive, interactive user experience.
Create a complete React application from a set of desired functionality.