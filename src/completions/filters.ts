export const filtersCompletions = [
    {
        label: 'upper',
        detail: 'Convert to uppercase',
        insertText: '|upper',
        example: `{{ "hello"|upper }}  {# Affiche "HELLO" #}`
    },
    {
        label: 'lower',
        detail: 'Convert to lowercase',
        insertText: '|lower',
        example: `{{ "HELLO"|lower }}  {# Affiche "hello" #}`
    },
    {
        label: 'date',
        detail: 'Format a date',
        insertText: '|date(${1:"Y-m-d"})',
        example: `{{ "2025-04-28"|date("d/m/Y") }}  {# Affiche "28/04/2025" #}`
    },
    {
        label: 'join',
        detail: 'Join an array into a string with an empty separator by default',
        insertText: "|join('${1:}')",
        example: `{{ ['apple', 'banana', 'cherry']|join(', ') }}  {# Affiche "apple, banana, cherry" #}`
    },
    {
        label: 'length',
        detail: 'Get the length of an array or string',
        insertText: '|length',
        example: `{{ "Hello World"|length }}  {# Affiche "11" #}`
    },
    {
        label: 'first',
        detail: 'Get the first element of an array',
        insertText: '|first',
        example: `{{ ['apple', 'banana', 'cherry']|first }}  {# Affiche "apple" #}`
    },
    {
        label: 'last',
        detail: 'Get the last element of an array',
        insertText: '|last',
        example: `{{ ['apple', 'banana', 'cherry']|last }}  {# Affiche "cherry" #}`
    }
];
