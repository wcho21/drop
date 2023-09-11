type StylizeFunction = (s: string) => string;

const stylizeKeywordInLine = (line: string, keywords: string[], stylize: StylizeFunction): string => {
  for (const keyword of keywords) {
    const keywordWithIndent = RegExp(`(^\\s*)${keyword}`);
    const matched = line.match(keywordWithIndent);
    if (matched !== null) {
      const indent = matched[1];
      return `${indent}${stylize(keyword)}`;
    }
  }

  return line;
};

export const stylizeText = (text: string, keywords: string[], stylize: StylizeFunction) => text
  .split("\n")
  .map(line => stylizeKeywordInLine(line, keywords, stylize))
  .join("\n");
