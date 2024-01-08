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

    // Sort
    console.log(page)
}

main()
    .catch(err => console.error(err))