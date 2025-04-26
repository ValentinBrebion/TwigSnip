export const basicCompletions = [
    {
        label: 'extends',
        detail: 'Extend a template',
        insertText: '{% extends "${1:template.html.twig}" %}'
    },
    {
        label: 'include',
        detail: 'Include a template',
        insertText: '{% include "${1:template.html.twig}" %}'
    },
    {
        label: 'block',
        detail: 'Define a block',
        insertText: '{% block ${1:name} %}\n\t$0\n{% endblock %}'
    },
    {
        label: 'endblock',
        detail: 'Define an endblock',
        insertText: '{% endblock %}'
    },
    {
        label: 'macro',
        detail: 'Define a macro',
        insertText: '{% macro ${1:name}(${2:params}) %}\n\t$0\n{% endmacro %}'
    },
    {
        label: 'import',
        detail: 'Import a macro',
        insertText: '{% import "${1:macros.twig}" as ${2:macros} %}'
    },
    {
        label: 'from',
        detail: 'Import specific macros',
        insertText: '{% from "${1:macros.twig}" import ${2:macro_name} %}'
    },
    {
        label: 'mustache',
        detail: 'Insert {{ }} with space',
        insertText: '{{ ${1:value} }} '
    },
    {
        label: 'comment',
        detail: 'Twig comment',
        insertText: '{# ${1:Comment} #}'
    },
    {
        label: 'merge',
        detail: 'Merge two arrays',
        insertText: '{% set ${1:new_array} = ${2:array1}|merge(${3:array2}) %}'
    },
    {
        label: 'first',
        detail: 'Get the first element of an array or string',
        insertText: '{{ ${1:array}|first }}'
    },
    {
        label: 'last',
        detail: 'Get the last element of an array or string',
        insertText: '{{ ${1:array}|last }}'
    },
]; 