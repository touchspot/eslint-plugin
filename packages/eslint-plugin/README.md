# `@touchspot/eslint-plugin`

## Installation

```sh
npm i -D @touchspot/eslint-plugin
```

## Usage

```jsonc
{
    "extends": ["plugin:@touchspot/esm"], // or "plugin:@touchspot/cjs"
}
```

```jsonc
{
    "extends": ["plugin:@touchspot/esm", "plugin:@touchspot/+react"],
}
```

```jsonc
{
    "extends": ["plugin:@touchspot/esm", "plugin:@touchspot/+react", "plugin:@touchspot/+tailwindcss"],
}
```

```jsonc
{
    "extends": ["plugin:@touchspot/esm", "plugin:@touchspot/+next"],
}
```

```jsonc
{
    "extends": ["plugin:@touchspot/esm", "plugin:@touchspot/+next", "plugin:@touchspot/+tailwindcss"],
}
```
