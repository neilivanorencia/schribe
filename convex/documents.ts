import { v } from "convex/values";

import { mutation, query } from "@/convex/_generated/server";

export const getSidebar = query({
  args: {
    parentDocument: v.optional(v.id("documents")),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const documents = await ctx.db
      .query("documents")
      .withIndex("by_user_parent", (q) =>
        q.eq("userId", userId).eq("parentDocument", args.parentDocument),
      )
      .filter((q) => q.eq(q.field("isArchived"), false))
      .order("desc")
      .collect();

    const documentsWithHasChildren = await Promise.all(
      documents.map(async (doc) => {
        const children = await ctx.db
          .query("documents")
          .withIndex("by_user_parent", (q) =>
            q.eq("userId", userId).eq("parentDocument", doc._id),
          )
          .filter((q) => q.eq(q.field("isArchived"), false))
          .collect();

        return {
          ...doc,
          hasChildren: children.length > 0,
        };
      }),
    );

    return documentsWithHasChildren;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("documents")),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const userId = identity.subject;

    const document = await ctx.db.insert("documents", {
      title: args.title,
      parentDocument: args.parentDocument,
      userId,
      isArchived: false,
      isPublished: false,
    });

    return document;
  },
});
