import { useEffect, useState } from "react";

const elipsis = (content: string, length: number): string => {
  return content.slice(0, length - 3) + "...";
};

export const useElipsis = (content: string, length: number): string => {
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    const result: string = elipsis(content, length);
    setResult(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
};
