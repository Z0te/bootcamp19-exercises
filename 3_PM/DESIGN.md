Components:
- Current todos section
    - Title (<h1>)
    - Tasks (<ul>)
        - Task (<li>)
            - Text field (<p> or nothing)
            - "Delete" button (<button>)
- Add task bar
    - Text field (<form>)
    - Button (<button>)
- Search bar
    - Text field (<form>)

Data:
- Master array of tasks
    - Index
    - Value
    - In react, this would look like a mapped element such that each li has a "key" element in the tag you could identify it with.
    # Do you need this? This depends on if we modify the array and then re-render or modify the dom and then remove from the array. The latter method makes for less rendering.

The components will the structured as follows: there's the "app" component, that houses everything - the search, add, and todos list. Each of those are also their own components. Each will have their div. The add component will consist of a form and button tags, the todos list will consist of a title (probably h1) and then subcomponents for each of the tasks. Each task will be a text field (div?) and a button. The search component will just be a form. Since every single component will need access to the tasks, the tasks, which will be in the form of an array, will be stored in the app component.

As for the transfer of data, the tasks will be stored as strings in an array. Ever time it will need to be rendered, it will be mapped to <li> tags and given corresponding buttons that know the index of the list element so that the element can be removed from the array when deleted. Upon deletion, all the tasks are re-rendered.