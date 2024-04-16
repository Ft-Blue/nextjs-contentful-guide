import {
  Entry,
  EntrySkeletonType,
  createClient,
} from "contentful";

export const getEntryById = <T extends EntrySkeletonType>(
  entryId: string,
  isDraftModeEnabled: boolean
): Promise<Entry<T, undefined>> => {
  const contenfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: isDraftModeEnabled
      ? process.env.CONTENTFUL_PREVIEW_API_KEY ?? ""
      : process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
    host: isDraftModeEnabled ? "preview.contentful.com" : "cdn.contentful.com",
  });

  return contenfulClient.getEntry<T>(entryId);
};
