# Bracket Miscoloring Fix

## Issue
The VS Code theme was missing specific punctuation scope definitions, causing matching brackets to have different colors instead of consistent coloring.

## Example of the Issue
In JSX/TSX code like this:
```jsx
<div className="ml-auto">{name}</div>
```

The opening `{` and closing `}` brackets would appear in different colors.

## Solution
Added comprehensive punctuation scope definitions to both theme files to ensure matching brackets have consistent colors.

### Scopes Added
- `punctuation.definition.block`
- `punctuation.definition.brace`
- `punctuation.definition.brackets`
- `punctuation.section.block`
- `punctuation.section.brace`
- `punctuation.section.brackets`
- `meta.brace`
- `punctuation.definition.parameters`
- `punctuation.section.parameters`

### Colors Used
- **Dark theme**: `#dcdcdc` (matches editor foreground)
- **Light theme**: `#17181d` (matches editor foreground)

## Files Modified
- `themes/dazzle-dark.json`
- `themes/dazzle-light.json`

This ensures all bracket types (`{}`, `[]`, `()`) have consistent coloring for matching pairs.