import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { client } from "@/lib/sanityClient";

// Кешування на 60 секунд (1 хвилина)
// Можна змінити на більше значення, наприклад 3600 для 1 години
const CACHE_REVALIDATE_TIME = 60;

// Функція для створення унікального ключа кешу на основі query та params
const getCacheKey = (query: string, params: Record<string, unknown>) => {
  const paramsKey = JSON.stringify(params || {});
  return `sanity-${Buffer.from(query + paramsKey).toString("base64")}`;
};

export async function POST(req: NextRequest) {
  const { query, params } = await req.json();

  if (!query || typeof query !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid query" },
      { status: 400 }
    );
  }

  try {
    // Створюємо кешовану функцію з унікальним ключем для кожного запиту
    const cacheKey = getCacheKey(query, params || {});
    const data = await unstable_cache(
      async () => {
        return await client.fetch(query, params || {});
      },
      [cacheKey],
      {
        revalidate: CACHE_REVALIDATE_TIME,
        tags: ["sanity"],
      }
    )();

    // Додаємо заголовки кешування
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_REVALIDATE_TIME}, stale-while-revalidate=${CACHE_REVALIDATE_TIME * 2}`,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Sanity query failed" }, { status: 500 });
  }
}