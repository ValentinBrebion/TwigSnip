"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateCompletions = void 0;
exports.dateCompletions = [
    {
        label: 'timestamp',
        detail: 'Get the timestamp of a date',
        insertText: '|date("U")'
    },
    {
        label: 'strtotime',
        detail: 'Convert a string to a date',
        insertText: '|date("${1:Y-m-d}", strtotime("${2:now}"))'
    },
    {
        label: 'time_diff',
        detail: 'Get time difference from now',
        insertText: '{{ "${1:date}"|date("U") - "now"|date("U") }} seconds ago'
    }
];
//# sourceMappingURL=dateFilters.js.map