"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateCompletions = void 0;
exports.dateCompletions = [
    {
        label: 'timestamp',
        detail: 'Get the timestamp of a date',
        insertText: '|date("U")',
        example: `{{ "2025-04-28"|date("U") }}  {# Displays the Unix timestamp of the date "2025-04-28" #}`
    },
    {
        label: 'strtotime',
        detail: 'Convert a string to a date',
        insertText: '|date("${1:Y-m-d}", strtotime("${2:now}"))',
        example: `{{ "next Monday"|date("Y-m-d", strtotime("next Monday")) }}  {# Displays the date of next Monday in Y-m-d format #}`
    },
    {
        label: 'time_diff',
        detail: 'Get time difference from now',
        insertText: '{{ "${1:date}"|date("U") - "now"|date("U") }} seconds ago',
        example: `{{ "2025-04-28"|date("U") - "now"|date("U") }} seconds ago  {# Displays the number of seconds between the given date and now #}`
    }
];
//# sourceMappingURL=dateFilters.js.map