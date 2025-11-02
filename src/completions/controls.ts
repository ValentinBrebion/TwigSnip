export const controlsCompletions = [
    {
        label: 'if',
        detail: 'Conditional statement',
        insertText: '{% if (${1:condition}) %}\n\t$0\n{% endif %}',
        example: `{% if user.isLoggedIn %}\n\t<p>Welcome back, {{ user.name }}!</p>\n{% endif %}`
    },
    {
        label: 'elseif',
        detail: 'Else if condition',
        insertText: '{% elseif (${1:condition}) %}',
        example: `{% if user.isAdmin %}\n\t<p>Admin dashboard</p>\n{% elseif user.isLoggedIn %}\n\t<p>Welcome back, {{ user.name }}!</p>\n{% endif %}`
    },
    {
        label: 'else',
        detail: 'Else condition',
        insertText: '{% else %}',
        example: `{% if user.isAdmin %}\n\t<p>Admin dashboard</p>\n{% else %}\n\t<p>Access restricted</p>\n{% endif %}`
    },
    {
        label: 'endif',
        detail: 'End loop if',
        insertText: '{% endif %}',
        example: `{% if user.isLoggedIn %}\n\t<p>Welcome back!</p>\n{% endif %}`
    },
    {
        label: 'for',
        detail: 'loop for',
        insertText: '{% for ${1:item} in ${2:items} %}\n\t$0\n{% endfor %}',
        example: `{% for post in posts %}\n\t<h2>{{ post.title }}</h2>\n\t<p>{{ post.content }}</p>\n{% endfor %}`
    },
    {
        label: 'endfor',
        detail: 'End loop for',
        insertText: '{% endfor %}',
        example: `{% for post in posts %}\n\t<h2>{{ post.title }}</h2>\n\t<p>{{ post.content }}</p>\n{% endfor %}`
    },
    {
        label: 'set',
        detail: 'Define a variable',
        insertText: '{% set ${1:variable} = ${2:value} %}',
        example: `{% set greeting = "Hello, world!" %}\n<p>{{ greeting }}</p>`
    },
    {
        label: 'switch',
        detail: 'Twig if / elseif / else structure',
        insertText: `{% if \${1:variable} == '\${2:value1}' %}\n\t\$0\n{% elseif \${1:variable} == '\${3:value2}' %}\n\t\$4\n{% else %}\n\t\$5\n{% endif %}`,
        example: `{% if user.role == 'admin' %}\n\t<p>Admin access</p>\n{% elseif user.role == 'editor' %}\n\t<p>Editor access</p>\n{% else %}\n\t<p>Regular user access</p>\n{% endif %}`
    },
    {
        label: 'trans',
        detail: 'Translate a string',
        insertText: '{{ "${1:Hello world}"|trans }}',
        example: `{{ "Welcome"|trans }}`
    },
    {
        label: 'sort',
        detail: 'Sort an array',
        insertText: '{{ ${1:array}|sort }}',
        example: `{{ [3, 1, 2]|sort }}`
    },
    {
        label: 'defined',
        detail: 'Check if a variable is defined',
        insertText: '{% if ${1:variable} is defined %}\n\t$0\n{% endif %}',
        example: `{% if user is defined %}\n\t<p>User is defined</p>\n{% endif %}`
    },
    {
        label: 'empty',
        detail: 'Check if a variable is empty',
        insertText: '{% if ${1:variable} is empty %}\n\t$0\n{% endif %}',
        example: `{% if posts is empty %}\n\t<p>No posts available</p>\n{% endif %}`
    },
    {
        label: 'sameas',
        detail: 'Strictly compare two variables',
        insertText: '{% if ${1:var1} is same as(${2:var2}) %}\n\t$0\n{% endif %}',
        example: `{% if user.name is same as('John') %}\n\t<p>Welcome John</p>\n{% endif %}`
    },
    {
        label: 'iterable',
        detail: 'Check if a variable is iterable',
        insertText: '{% if ${1:variable} is iterable %}\n\t$0\n{% endif %}',
        example: `{% if posts is iterable %}\n\t<p>The posts array is iterable.</p>\n{% endif %}`
    },
    {
        label: 'ternary',
        detail: 'Twig inline if (ternary operator)',
        insertText: '{{ ${1:condition} ? ${2:"yes"} : ${3:"no"} }}',
        example: `{{ user.isLoggedIn ? "Welcome back" : "Please log in" }}`
    },
    {
        label: 'inArray',
        detail: 'Check if a value is in an array',
        insertText: '{% if ${1:variable} in ["${2:value1}", "${3:value2}"] %}\n\t$0\n{% endif %}',
        example: `{% if 'apple' in ['banana', 'apple', 'orange'] %}\n\t<p>Apple is in the list</p>\n{% endif %}`
    }
];
