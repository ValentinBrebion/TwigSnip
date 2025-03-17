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
    }
]; 