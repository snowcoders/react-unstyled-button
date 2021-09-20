# Deprecation

The majority of what this package did is remove the styling of the default html button. However now that IE 11 is deprecated, the css property [all: unset](https://caniuse.com/css-all) works across enough browsers that it doesn't make sense to maintain this project.

```css
input[type=button],
input[type=submit],
button {
  all: unset;
}
```

[![npm (scoped)](https://img.shields.io/npm/v/@snowcoders/react-unstyled-button.svg)](https://www.npmjs.com/package/@snowcoders/react-unstyled-button)
[![CircleCI branch](https://img.shields.io/circleci/project/github/snowcoders/react-unstyled-button/master.svg)](https://circleci.com/gh/snowcoders/react-unstyled-button)

# Use it

`npm install --save @snowcoders/react-unstyled-button`

```
import { UnstyledButton } from "@snowcoders/react-unstyled-button";
import "@snowcoders/react-unstyled-button/styles.css";

render() {
    <UnstyledButton
        onClick={this.onClick}
    >
        Button text
    </UnstyledButton>
}
```

## Adding custom styling

Custom styling can be applied via specificity

```
// green-button.css
.sci-react-unstyled-button.green-button {
  // Box-Sizing
  padding: 14px 40px;
  border-radius: 100px;
  border-width: 0px;
  border-style: solid;

  // Colors
  border-color: #16da00;
  background-color: green;
  color: white;

  // Sizes
  font-size: 16px;
  font-family: "Open Sans", X-LocaleSpecific, sans-serif;

  &:hover {
    background-color: darkgreen;
  }
}
```

```
// green-button.js
import { UnstyledButton } from "@snowcoders/react-unstyled-button";
import "@snowcoders/react-unstyled-button/styles.css";
import "./green-button.css";

render() {
    <UnstyledButton
        className="green-button"
        onClick={this.onClick}
    >
        Button text
    </UnstyledButton>
}
```

# Parent Library

This component is part of a larger components library, [react-ui-base](https://github.com/snowcoders/react-ui-base). The goal is to keep all the core logic and base css styles in a single location, that way building out new UI component libraries cheaper and faster (and less buggy).

We highly recommend visiting the react-ui-base repository to understand how to customize the css along with see examples.

You can also view all the components on our demo site https://snowcoders.github.io/react-ui-base/

# This component

This component takes the normal HTML Button element and removes all browser styling from it.
