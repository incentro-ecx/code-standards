# Style Guide

A consistent code style helps readability and makes it easier to switch between developing various packages.

_It's also a nice basis to start nerdy discussions._

## 👩‍🎓 Guidelines

We have some general guidelines we adhere by:

- **DRY** - **D**on't **R**epeat **Y**ourself. If you see yourself copying and pasting code, check if there's room for a shared utility method / component / service.
- **KISS** - **K**eep **I**t **S**imple and **S**tupid. Don't overcomplicate things. Try to make your code as simple and understandable as possible.
- **SoC** - **S**eparation **o**f **C**oncerns. Structure your code into small chunks that have their own responsibility. For example: try to remove logic from your presentation layer, into the the API or logic components / hooks.
- **The Boy Scout Rule** - We leave our code better than we found it. See something that's unreadable or undocumented? Refactor it!
- **Do refactor** - Stress and deadlines aren't valid reasons to merge a PR (except for hotfixes). If you find something that should be refactored, do it now.

## 📢 Naming things

### 📂 Files & folders

For file and folder names we use `kebab-case`. Filenames can optionally have their type in the name, for example `button.component.tsx`, `prettier.config.js`, `get-customer.handler.ts`, `not-found.exception.ts`. It's encouraged but not enforced.

Some popular examples:

- `*.config.ts` - Configuration files
- `*.test.ts` - Files containing tests
- `*.class.ts` - ES6 classes
- `*.error.ts` - ES6 class extending `Error`
- `*.type.ts` - Typescript type
- `*.enum.ts` - Typescript enums
- `*.component.tsx` - React components
- `*.hook.ts` - React hooks
- `*.context.tsx` - React context
- `*.query.graphql` - GraphQL queries
- `*.mutation.graphql` - GraphQL mutations

There's a couple of exceptions to this rule, like file based routing found in popular frameworks.

### 🏷️ Variables

Variables should be `camelCase`. If they're constant values on the top level of the file, they should be `UPPER_CASE`.

Example:

```typescript
const PACKAGE_JSON_PATH = "./package.json";

function readPackageJson() {
  const absolutePath = path.resolve(PACKAGE_JSON_PATH);

  return fs.readFileSync(absolutePath);
}
```

### 🧬 Interfaces, types & enums

We don't use interfaces, we use types. Types can do everything interfaces can and more.

Types and enums use `PascalCase`. Type properties should be `camelCase` and enum keys should be `UPPER_CASE`. Enum values should be `UPPER_CASE`.

Example:

```typescript
type Product = {
  sku: string;
  title: string;
};

enum ProductType {
  PHYSICAL = "PHYSICAL",
  DIGITAL = "DIGITAL",
}
```

### 🇭🇺 Hungarian notation

Avoid using Hungarian notation, which is to put the type of the variable in the name of the variable. For example: `const stringInput`, `const sInput`, `type TProduct` or `function ButtonComponent`.

### 🥶 Smurf naming conventions

The [smurf naming convention](https://devcards.io/smurf-naming-convention) is where a lot of classes / variables have the same prefix:

```ts
type ProductVariantPriceDiscount = string;
type ProductVariantPriceRegular = string;
type ProductVariantOption = object;

export type ProductVariant = {
  price: {
    discount: ProductVariantPriceDiscount;
    regular: ProductVariantPriceRegular;
  };
  options: ProductVariantOption[];
};
```

Avoid using a lot of prefixes if the context isn't global (is exported) or we don't expect the prefix to cause conflicts. In the above case, the following would be a lot more readable and realistically won't cause any conflicts within one package / service / project:

```ts
type PriceDiscount = string;
type PriceRegular = string;
type Option = object;

export type Variant = {
  price: {
    discount: PriceDiscount;
    regular: PriceRegular;
  };
  options: Option[];
};
```

### 🔟 Boolean variables

Boolean variables should start with `is`, `has`, `should` or `can`. For example: `isDigitalProduct`, `hasIcon`, `shouldShowDescription` or `canContinue`.

### 🪺 Repetition in nesting

Avoid repetition in nested object structures, so instead of:

```json
{
  "product": {
    "productTitle": "Title"
  }
}
```

Use:

```json
{
  "product": {
    "title": "Title"
  }
}
```

## 📘 Typescript

As a basis we follow [Prettier](https://prettier.io/)'s default code style and **we do not diverge from it**. On top of that we have some additional linting rules from various ESLint plugins, which are documented at the [ESLint package](https://incentro-ecx.github.io/code-standards/configs/eslint).

Some notable rules:

- We force the use of [type-only imports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export).
- We allow a maximum of 10 imports per file, forcing modules to stay small. There's an exception for barrel files (`index.ts`).

## ⚛️ React

1. The name of a React component should not use the word `Component`

2. The props interface of the component should follow the name `type <Component>Props = {}`

3. Event handlers should follow the following naming scheme:

   a. The prop should start with `on`: `onClick`

   b. Inside the component the prop should be renamed to start with `emit`: `emitClick`.

   c. If you create a function that handles an event, it should start with `handle`: `handleClick`.

   d. If you emit a custom event, make sure you export it. This way consumers of your component can use this type to get type hints about the shape of the event you're emitting.

4. Props should not be destructured in the function signature. Instead, destructure them inside the function body to keep the function signature clean.

5. The function signature of a React component should always have `JSX.Element` as a return type.

Example:

```tsx
export type ButtonClickHandler = () => void;

type ButtonProps = {
  children: ReactNode;
  onClick?: ButtonClickHandler;
};

export function Button(props: ButtonProps): JSX.Element {
  const { children, onClick: emitClick } = props;

  const handleClick = useCallback(() => {
    emitClick?.();
  }, [emitClick]);

  return <button onClick={handleClick}>{children}</button>;
}
```

## 🌐 GraphQL

We use the [Apollo naming conventions](https://www.apollographql.com/docs/technotes/TN0002-schema-naming-conventions/) wherever possible

## 🖕 Diverging from linting rules

If you have to diverge from linting rules, **disable the rule for one line only**. Also, add a small comment, starting with `REASON:` that explains the reason you have to disable this comment.

```ts
// REASON: ESLint uses default exports for its config.
// eslint-disable-next-line import/no-default-export
export default config;
```

You can also consider adding and creating an [override](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work) if you expect this deviation from the standard to happen more often for a default set of files.
