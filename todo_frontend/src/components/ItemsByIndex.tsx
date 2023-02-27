export const headings: string[] = ['Todo', 'Markdown editor', 'Time tracker'];

const headingByIndex = (index: number): string => headings[index % headings.length];

export default headingByIndex;