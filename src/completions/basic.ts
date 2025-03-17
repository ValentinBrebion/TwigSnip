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
    }
]; 