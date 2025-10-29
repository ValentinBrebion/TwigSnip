"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateCompletions = void 0;
exports.dateCompletions = [
    {
        label: 'timestamp',
        detail: 'Get the timestamp of a date',
        insertText: '|date("U")',
        example: `{{ "2025-04-28"|date("U") }}  {# Affiche le timestamp Unix de la date "2025-04-28" #}`
    },
    {
        label: 'strtotime',
        detail: 'Convert a string to a date',
        insertText: '|date("${1:Y-m-d}", strtotime("${2:now}"))',
        example: `{{ "next Monday"|date("Y-m-d", strtotime("next Monday")) }}  {# Affiche la date du lundi prochain au format Y-m-d #}`
    },
    {
        label: 'time_diff',
        detail: 'Get time difference from now',
        insertText: '{{ "${1:date}"|date("U") - "now"|date("U") }} seconds ago',
        example: `{{ "2025-04-28"|date("U") - "now"|date("U") }} seconds ago  {# Affiche le nombre de secondes entre la date donnée et maintenant #}`
    }
];
//# sourceMappingURL=dateFilters.js.map