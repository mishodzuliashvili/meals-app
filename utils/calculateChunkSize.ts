export function calculateChunkSize(
    windowWidth: number,
    defaultSize: number,
    ...steps: {
        columns: number;
        minWidth: number;
    }[]
) {
    steps.sort((a, b) => a.minWidth - b.minWidth);
    let chunkSize = defaultSize;
    for (const step of steps) {
        if (windowWidth >= step.minWidth) {
            chunkSize = Math.ceil(defaultSize / step.columns);
        } else {
            break;
        }
    }
    return chunkSize;
}
