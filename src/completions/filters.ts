export const filtersCompletions = [
    {
        label: 'upper',
        detail: 'Convert to uppercase',
        insertText: '|upper',
        example: `{{ "hello"|upper }}  {# Displays "HELLO" #}`
    },
    {
        label: 'lower',
        detail: 'Convert to lowercase',
        insertText: '|lower',
        example: `{{ "HELLO"|lower }}  {# Displays "hello" #}`
    },
    {
        label: 'date',
        detail: 'Format a date',
        insertText: '|date(${1:"Y-m-d"})',
        example: `{{ "2025-04-28"|date("d/m/Y") }}  {# Displays "28/04/2025" #}`
    },
    {
        label: 'join',
        detail: 'Join an array into a string with an empty separator by default',
        insertText: "|join('${1:}')",
        example: `{{ ['apple', 'banana', 'cherry']|join(', ') }}  {# Displays "apple, banana, cherry" #}`
    },
    {
        label: 'length',
        detail: 'Get the length of an array or string',
        insertText: '|length',
        example: `{{ "Hello World"|length }}  {# Displays "11" #}`
    },
    {
        label: 'first',
        detail: 'Get the first element of an array',
        insertText: '|first',
        example: `{{ ['apple', 'banana', 'cherry']|first }}  {# Displays "apple" #}`
    },
    {
        label: 'last',
        detail: 'Get the last element of an array',
        insertText: '|last',
        example: `{{ ['apple', 'banana', 'cherry']|last }}  {# Displays "cherry" #}`
    }
];
