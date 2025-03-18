"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlsCompletions = void 0;
exports.controlsCompletions = [
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
        label: 'for',
        detail: 'Boucle for',
        insertText: '{% for ${1:item} in ${2:items} %}\n\t$0\n{% endfor %}'
    },
    {
        label: 'set',
        detail: 'Définir une variable',
        insertText: '{% set ${1:variable} = ${2:value} %}'
    }
];
//# sourceMappingURL=controls.js.map