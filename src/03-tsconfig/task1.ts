async function fetchMessage(): Promise<string> {
    return "Hello TypeScript";
}

async function main() {
    const message = await fetchMessage();
    console.log(message);
}

main();