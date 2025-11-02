# TwigSnip - Extension VSCode for Twig Snippets

Welcome to the ***TwigSnip*** extension for Visual Studio Code! This extension allows you to add common Twig snippets to improve your productivity when writing Twig templates and preview your Twig files.

## Features
### Twig Preview

You can preview your Twig file by Ctrl+Shift+P (Windows) or Cmd+Shift+P (Mac) and typing `TwigSnip | Preview Twig`.

### 1. **Twig Tags**

| Snippet    | Description                          |
|------------|--------------------------------------|
| `if`       | Conditional statement               |
| `elseif`   | Else if condition                   |
| `else`     | Else condition                      |
| `endif`    | End if block                        |
| `for`      | Iterative loops                     |
| `endfor`   | End for loop                        |
| `set`      | Define a variable                   |
| `extends`  | Template inheritance                |
| `include`  | Include a template                  |
| `block`    | Define a block                      |
| `endblock` | End a block definition              |
| `macro`    | Define a macro                      |
| `import`   | Import macros                       |
| `from`     | Import specific macros              |
| `comment`  | Twig comment                        |

### 2. **Twig Filters**

| Filter      | Description                                       |
|-------------|---------------------------------------------------|
| `upper`     | Convert to uppercase                             |
| `lower`     | Convert to lowercase                             |
| `date`      | Format a date                                    |
| `join`      | Join an array into a string with a separator     |
| `length`    | Get the length of an array or string             |
| `first`     | Get the first element of an array or string      |
| `last`      | Get the last element of an array or string       |
| `timestamp` | Get the Unix timestamp of a date                 |
| `strtotime` | Convert a string to a date                       |
| `time_diff` | Get time difference from now in seconds          |
| `sort`      | Sort an array                                    |
| `merge`     | Merge two arrays                                 |
| `trans`     | Translate a string                               |

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
