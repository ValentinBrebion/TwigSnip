"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicCompletions = void 0;
exports.basicCompletions = [
    {
        label: 'extends',
        detail: 'Extend a template',
        insertText: '{% extends "${1:template.html.twig}" %}',
        example: `{% extends "base.html.twig" %}  {# Étend un template de base #}`
    },
    {
        label: 'include',
        detail: 'Include a template',
        insertText: '{% include "${1:template.html.twig}" %}',
        example: `{% include "header.html.twig" %}  {# Inclut un autre template #}`
    },
    {
        label: 'block',
        detail: 'Define a block',
        insertText: '{% block ${1:name} %}\n\t$0\n{% endblock %}',
        example: `{% block content %}\n\t<h1>Hello World</h1>\n{% endblock %}  {# Définit un bloc pour le contenu #}`
    },
    {
        label: 'endblock',
        detail: 'Define an endblock',
        insertText: '{% endblock %}',
        example: `{% endblock %}  {# Fin du bloc content ou d'autres blocs #}`
    },
    {
        label: 'macro',
        detail: 'Define a macro',
        insertText: '{% macro ${1:name}(${2:params}) %}\n\t$0\n{% endmacro %}',
        example: `{% macro greeting(name) %}\n\tHello, {{ name }}!\n{% endmacro %}  {# Définit une macro pour saluer un utilisateur #}`
    },
    {
        label: 'import',
        detail: 'Import a macro',
        insertText: '{% import "${1:macros.twig}" as ${2:macros} %}',
        example: `{% import "macros.twig" as macros %}  {# Importe un fichier de macros #}`
    },
    {
        label: 'from',
        detail: 'Import specific macros',
        insertText: '{% from "${1:macros.twig}" import ${2:macro_name} %}',
        example: `{% from "macros.twig" import greeting %}  {# Importe une macro spécifique #}`
    },
    {
        label: 'mustache',
        detail: 'Insert {{ }} with space',
        insertText: '{{ ${1:value} }} ',
        example: `{{ name }}  {# Insère une variable avec des espaces #}`
    },
    {
        label: 'comment',
        detail: 'Twig comment',
        insertText: '{# ${1:Comment} #}',
        example: `{# This is a comment #}  {# Un commentaire dans le template #}`
    },
    {
        label: 'merge',
        detail: 'Merge two arrays',
        insertText: '{% set ${1:new_array} = ${2:array1}|merge(${3:array2}) %}',
        example: `{% set combined = [1, 2]|merge([3, 4]) %}  {# Fusionne deux tableaux en un #}`
    },
    {
        label: 'first',
        detail: 'Get the first element of an array or string',
        insertText: '{{ ${1:array}|first }}',
        example: `{{ ['apple', 'banana', 'cherry']|first }}  {# Affiche "apple" #}`
    },
    {
        label: 'last',
        detail: 'Get the last element of an array or string',
        insertText: '{{ ${1:array}|last }}',
        example: `{{ ['apple', 'banana', 'cherry']|last }}  {# Affiche "cherry" #}`
    }
];
//# sourceMappingURL=basic.js.map