# Day 3, PM Exerise: Components

## Part 1: High-Level Planning

### Introduction: Todo Site

Your task for the next few days is to create a 'Todo Tracker' website. This single-page website should be able to perform the following actions:

- Add todos to a list
- Delete todos once they have been added
- Filter through todos by substring

Please view the demo video uploaded at designs/Todo_Demo.m4v for an idea of what the site should look like. Do note the following specifications:

- When there are no todos in the list, the text 'No Todos to complete' should render under 'Current Todos', and the search bar should not appear
    # Conditional behavior
- As soon as a todo has been added, it will appear as an unordered list element under 'Current Todos' along with the search bar. Next to the todo should be a button which deletes the todo from the list.
- The search bar updates the filtering whenever its text is changed - if a todo does not contain the text as a substring than it is taken away
    # Listener that re-renders onChange
- If there are todos in existence and the search bar does not match any of them, the text 'No results found' should be rendered under 'Current Todos'
- At this state of the project, do not worry about styling at all (that will be the next stage!) - for now, it's most important that you nail down the basics of data flow and state management in React.

### TODO Planning Stage

Regardless of your background in React, we can break down this task. Let's outline in high-level terms a guideline for implementing the functionality of the website.

1. Breaking the user interface into different components.

- I like to think of a component in React as a subset of the user interface which accomplishes one thing - for example, the "Add Todo" Bar, the bulleted list of Todos, or the search bar.
- Furthermore, break up each component into potential subcomponents and ultimately React tags such as div, ul, or input.
- It's often very helpful to draw out the user interface by hand and use the 'box' method to group individual sections into components and then sub components.

2. Now that you've established which components your app will use, consider how data should flow through your application. We can break this up into a few smaller questions.

- What type of data needs to be stored in the app? Certainly you will want some sort of a list of todos, but what form should those todos take? A list of strings? A list of objects containing a string and an id? Do keep in mind that you will have to have a way of uniquely identifying each todo so that it can individually be deleted from the list.
- What type of data does each component need to access? For example, if you decide to create a separate component for the unordered list of todos, that component will need to access the list of todos that you've stored somewhere in your app. Keep in mind that data flow in React is always downward - data in one component can be passed down to its child components through props, yet not vice versa. Therefore, if data needs to be accessed by two components, it needs to be stored in a common ancestor of those two components.

Here's the task: in the file `DESIGN.md`, write a few paragraphs describing the component structure of your app and how data will transfer between those components. Diagrams are encouraged!

## Part 2: Isolated Component Development in Storybook

Now that we've exercised thinking in React, if you have time, we can start to create isolated components (we'll go over interactions between components tomorrow).

Storybook is a development tool which can help us view components in isolation and in different states.

I've included one component, Circular Photo, which you can use as a template when creating new components (make a new subdirectory for each new component). Once you've made these components, you can add new instances of them to Storybook in `/stories/index.js` and run `npm run storybook` to check them out!
