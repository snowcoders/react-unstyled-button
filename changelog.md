### Unreleased

- Breaking
  - Moved to exporting ES Modules
  - [Node's documentation](https://nodejs.org/api/esm.html#esm_ecmascript_modules)
  - [Jest's documentation](https://github.com/facebook/jest/issues/9430)
- IUnstyledButtonProps is now UnstyledButtonProps
- UnstyledButtonProps extends HTMLButtonElement to make passing props easier
- isBaseStylesDisabled prop has been removed - just use a button

### 1.2.3

- Removed unneeded units on 0 unit values (Thanks ritcheyer)
