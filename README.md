## Project: CV Creator 
I created a simple application that helps you build a CV.
###### View this app live [here](https://bshowen.github.io/CV-Application/)
## Intention: To familiarize myself with React 
My goal with this application was to start learning about React. I used the create-react-app tool to initialize my application and then I used react-bootstrap for my components. 
# What I learned in this project. 
- How to use the create-react-app tool
- How to use and render React components with JSX. 
- I learned how components have and update their state, how they receive props, callbacks, etc. 
- I created some of my own components to keep my code DRY. 

# Notes for myself
- Components with inline styling.
  - use <strong>camelCase</strong> for CSS style names that are <strong>kebab-case</strong>: marginTop instead of margin-top
  - Inline styling is slow. Use this for prototyping then move your styling to its own CSS file. 
```
  const style = {
    border: "1px solid red", marginTop: "10px"
  };
  <p style={style}>Hello!</p>
```

- Class names in components 
  - "class" is a reserved js keyword. Use "className" instead. 
```
  <p class="my-css-class-selector">Hello</p> //Wrong!
  <p className="my-css-class-selector">Hello</p> //Correct. 
```

- Use short circuit evaluation for conditional rendering. 
```
  let componentCanRender = true;
  render(){
    return {componentCanRender && <p>Hello</p>};
  }
```
