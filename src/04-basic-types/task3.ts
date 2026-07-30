type ID = string | number;

function formatId(id: ID): string {

    if (typeof id === "string") {
        return id.toUpperCase();
    }

    return `ID-${id}`;
}

console.log(formatId("abc123"));

console.log(formatId(101));

// formatId(true);