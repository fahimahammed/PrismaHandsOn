import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // Cursor
    const page = await prisma.post.findMany({
        where: { published: true },
        cursor: { id: 1 },
        take: 3,
    });

    // Limit-offset
    const limitOffset = await prisma.post.findMany({
        where: { published: true },
        skip: 1,
        take: 1,
    });
    // Sort
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "asc" },
    });

    const prolificAuthors = await prisma.user.findMany({
        orderBy: { posts: { _count: "desc" } },
    });

    console.log(prolificAuthors)
}

main()
    .catch(err => console.error(err))