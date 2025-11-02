export const basicCompletions = [
    {
        label: 'extends',
        detail: 'Extend a template',
        insertText: '{% extends "${1:template.html.twig}" %}',
        example: `{% extends "base.html.twig" %}  {# Extends a base template #}`
    },
    {
        label: 'include',
        detail: 'Include a template',
        insertText: '{% include "${1:template.html.twig}" %}',
        example: `{% include "header.html.twig" %}  {# Includes another template #}`
    },
    {
        label: 'block',
        detail: 'Define a block',
        insertText: '{% block ${1:name} %}\n\t$0\n{% endblock %}',
        example: `{% block content %}\n\t<h1>Hello World</h1>\n{% endblock %}  {# Defines a content block #}`
    },
    {
        label: 'endblock',
        detail: 'Define an endblock',
        insertText: '{% endblock %}',
        example: `{% endblock %}  {# End of content block or other blocks #}`
    },
    {
        label: 'macro',
        detail: 'Define a macro',
        insertText: '{% macro ${1:name}(${2:params}) %}\n\t$0\n{% endmacro %}',
        example: `{% macro greeting(name) %}\n\tHello, {{ name }}!\n{% endmacro %}  {# Defines a macro to greet a user #}`
    },
    {
        label: 'import',
        detail: 'Import a macro',
        insertText: '{% import "${1:macros.twig}" as ${2:macros} %}',
        example: `{% import "macros.twig" as macros %}  {# Imports a macros file #}`
    },
    {
        label: 'from',
        detail: 'Import specific macros',
        insertText: '{% from "${1:macros.twig}" import ${2:macro_name} %}',
        example: `{% from "macros.twig" import greeting %}  {# Imports a specific macro #}`
    },
    {
        label: 'mustache',
        detail: 'Insert {{ }} with space',
        insertText: '{{ ${1:value} }} ',
        example: `{{ name }}  {# Inserts a variable with spaces #}`
    },
    {
        label: 'comment',
        detail: 'Twig comment',
        insertText: '{# ${1:Comment} #}',
        example: `{# This is a comment #}  {# A comment in the template #}`
    },
    {
        label: 'merge',
        detail: 'Merge two arrays',
        insertText: '{% set ${1:new_array} = ${2:array1}|merge(${3:array2}) %}',
        example: `{% set combined = [1, 2]|merge([3, 4]) %}  {# Merges two arrays into one #}`
    },
    {
        label: 'first',
        detail: 'Get the first element of an array or string',
        insertText: '{{ ${1:array}|first }}',
        example: `{{ ['apple', 'banana', 'cherry']|first }}  {# Displays "apple" #}`
    },
    {
        label: 'last',
        detail: 'Get the last element of an array or string',
        insertText: '{{ ${1:array}|last }}',
        example: `{{ ['apple', 'banana', 'cherry']|last }}  {# Displays "cherry" #}`
    }
];
