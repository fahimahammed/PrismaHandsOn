import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // Fluent API
    const fluentApi = await prisma.user
        .findUnique({
            where: {
                id: 5
            }
        })
        .posts()
    // Nested reads

    const userWithPosts = await prisma.user.findMany({
        where: {
            id: 6
        },
        include: {
            posts: {
                include: {
                    categories: true
                }
            }
        }
    });

    // Relation filters
    const publishedPosts = await prisma.user.findMany({
        include: {
            posts: {
                where: {
                    published: true
                }
            }
        }
    })

    console.dir(publishedPosts, { depth: Infinity });
}

main()
    .catch(err => console.error(err))