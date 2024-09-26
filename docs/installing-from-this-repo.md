# Installing from this repo

This repository is private, therefore, you may not be able to install directly
using `pnpm`, `yarn` or `npm`, as these generally only resolve to the NPM
registry. In order to use configuration files specified in this repository,
you will need to add a `.npmrc` file to the root of your directory.

In this file, add the following data:

```txt
@incentro-dc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GPR_TOKEN}
```

Substitute `${GPR_TOKEN}` with a GitHub token, generated
[here](https://github.com/settings/tokens/new?scopes=repo,write:packages,read:packages&description=Incentro%20ECX%20-%20Package%20Access),
and your package manager should be able to resolve the `@incentro-dc` imports.
