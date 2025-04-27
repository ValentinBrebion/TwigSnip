export const controlsCompletions = [
    {
        label: 'if',
        detail: 'Condition if',
        insertText: '{% if (${1:condition}) %}\n\t$0\n{% endif %}'
    },
    {
        label: 'elseif',
        detail: 'Else if condition',
        insertText: '{% elseif (${1:condition}) %}'
    },
    {
        label: 'else',
        detail: 'Else condition',
        insertText: '{% else %}'
    },
    {
        label: 'endif',
        detail: 'End loop if',
        insertText: '{% endif %}'
    },
    {
        label: 'for',
        detail: 'loop for',
        insertText: '{% for ${1:item} in ${2:items} %}\n\t$0\n{% endfor %}'
    },
    {
        label: 'endfor',
        detail: 'End loop for',
        insertText: '{% endfor %}'
    },
    {
        label: 'set',
        detail: 'Définir une variable',
        insertText: '{% set ${1:variable} = ${2:value} %}'
    },
    {
        label: 'switch',
        detail: 'Twig if / elseif / else structure',
        insertText: `{% if \${1:variable} == '\${2:value1}' %}\n\t\$0\n{% elseif \${1:variable} == '\${3:value2}' %}\n\t\$4\n{% else %}\n\t\$5\n{% endif %}`
    },
    {
        label: 'trans',
        detail: 'Translate a string',
        insertText: '{{ "${1:Hello world}"|trans }}'
    },
    {
        label: 'sort',
        detail: 'Sort an array',
        insertText: '{{ ${1:array}|sort }}'
    },
    {
        label: 'defined',
        detail: 'Check if a variable is defined',
        insertText: '{% if ${1:variable} is defined %}\n\t$0\n{% endif %}'
    },
    {
        label: 'empty',
        detail: 'Check if a variable is empty',
        insertText: '{% if ${1:variable} is empty %}\n\t$0\n{% endif %}'
    },
    {
        label: 'sameas',
        detail: 'Strictly compare two variables',
        insertText: '{% if ${1:var1} is same as(${2:var2}) %}\n\t$0\n{% endif %}'
    },
    {
        label: 'iterable',
        detail: 'Check if a variable is iterable',
        insertText: '{% if ${1:variable} is iterable %}\n\t$0\n{% endif %}'
    },
    {
        label: 'ternary',
        detail: 'Twig inline if (ternary operator)',
        insertText: '{{ ${1:condition} ? ${2:"yes"} : ${3:"no"} }}'
    },
    {
        label: 'inArray',
        detail: 'Check if a value is in an array',
        insertText: '{% if ${1:variable} in ["${2:value1}", "${3:value2}"] %}\n\t$0\n{% endif %}'
    }
    
]; 