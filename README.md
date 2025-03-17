# TwigSnip - Extension VSCode for Twig Snippets

Welcome to the ***TwigSnip*** extension for Visual Studio Code! This extension allows you to add common Twig snippets to improve your productivity when writing Twig templates.

## Features

### 1. **Tags Twig**
This extension provides snippets for the most commonly used Twig tags, including:
- `for` : Iterative loops
- `if` : Conditions
- `set` : Variable declaration
- `extends` : Template inheritance
- `include` : Template inclusion
- `block` : Blocks definition

### 2. **Filtres Twig**
Adds common filters to your Twig templates, including :
- `|upper` : Convert to uppercase
- `|lower` : Convert to lowercase
- `|date` : Format a date

## Installation

1. Open **Visual Studio Code**.
2. Go to the Extensions section by clicking on the Extensions icon in the sidebar (or press `Ctrl+Shift+X`).
3. Research `TwigSnip`.
4. Click ***Install*** to add the extension to your editor.

Once the extension is installed, you will be able to use the snippets in your Twig files 
## Usage

Snippets are automatically activated when you're working in a file with the .twig extension. Simply start typing the snippet keyword, and it will appear in the autocomplete suggestions list. For example
- write `if` to get confition snippet `if`.
- Tapez `for` to get loop snippet `for`.

## Examples of Snippets

Here are some examples of available snippets:

### 1. **Snippet `if`**
```twig
{% if (condition) %}
    $0
{% endif %}
```

### 2. **Snippet `for`**
```twig
{% for ${1:item} in ${2:items} %}
    $0
{% endfor %}
```

### 3. **Snippet `set`**
```twig
{% set ${1:variable} = ${2:value} %}
```

### 4. **Snippet `upper`**
```twig
${1:value}|upper
```

### 5. **Snippet `date`**
```twig
${1:value}|date("${2:"Y-m-d"}")
```

### Configuration
No special configuration is required to use the extension. The snippets are ready to use immediately after installation.

### Notes de version
## 0.0.2
- Addition of the following snippets:
  - Tags `for`, `if`, `set`
  - Filters `upper`, `lower`, `date`
  - Tags `extends`, `include`, `block`