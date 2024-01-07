import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Delete existing data
    await prisma.post.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.profile.deleteMany({});

    // Create new data
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            name: 'User 1',
            age: 25,
            country: 'USA',
            role: Role.USER,
            posts: {
                create: [
                    {
                        title: 'First Post',
                        published: true,
                        categories: {
                            create: [{ name: 'Technology' }, { name: 'Programming' }],
                        },
                    },
                ],
            },
            profile: {
                create: {
                    bio: 'This is the bio for User 1.',
                },
            },
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            name: 'User 2',
            age: 30,
            country: 'Canada',
            role: Role.ADMIN,
            posts: {
                create: [
                    {
                        title: 'Second Post',
                        published: true,
                        categories: {
                            create: [{ name: 'Science' }, { name: 'Nature' }],
                        },
                    },
                ],
            },
            profile: {
                create: {
                    bio: 'This is the bio for User 2.',
                },
            },
        },
    });

    console.log('Seed data created successfully');
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
