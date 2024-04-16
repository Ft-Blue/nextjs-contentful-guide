import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePageMetadataFields {
    page?: EntryFieldTypes.Symbol;
    metaTitle: EntryFieldTypes.Symbol;
    metaDescription: EntryFieldTypes.Symbol;
    noIndex: EntryFieldTypes.Boolean;
    noFollow: EntryFieldTypes.Boolean;
}

export type TypePageMetadataSkeleton = EntrySkeletonType<TypePageMetadataFields, "pageMetadata">;
export type TypePageMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageMetadataSkeleton, Modifiers, Locales>;
