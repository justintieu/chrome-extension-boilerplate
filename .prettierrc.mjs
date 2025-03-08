export default {
    semi: true,
    trailingComma: "all",
    singleQuote: false,
    printWidth: 80,
    useTabs: false,
    tabWidth: 4,
    overrides: [
        {
            files: "*.json",
            options: {
                tabWidth: 4,
            },
        },
    ],
};
