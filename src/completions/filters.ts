export const filtersCompletions = [
    {
        label: 'upper',
        detail: 'Convert to uppercase',
        insertText: '|upper'
    },
    {
        label: 'lower',
        detail: 'Convert to lowercase',
        insertText: '|lower'
    },
    {
        label: 'date',
        detail: 'Format a date',
        insertText: '|date(${1:"Y-m-d"})'
    },
    {
        label: 'join',
        detail: 'Join an array into a string with an empty separator by default',
        insertText: "|join('${1:}')"
    },
    {
        label: 'length',
        detail: 'Get the length of an array or string',
        insertText: '|length'
    },
    {
        label: 'first',
        detail: 'Get the first element of an array',
        insertText: '|first'
    },
    {
        label: 'last',
        detail: 'Get the last element of an array',
        insertText: '|last'
    }
]; 