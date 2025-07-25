interface KeywordItem {
  keywords?: string[];
}

export function filterByKeyword<T extends KeywordItem>(data: T[], query: string): T[]  {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);

  return data.filter(item => {
    if (!item || !Array.isArray(item.keywords)) return false;

    return item.keywords.some((keyword: string) => {
      const keywordWords = keyword.toLowerCase().split(/\s+/);
      return words.some(word => keywordWords.includes(word));
    });
  });
}
