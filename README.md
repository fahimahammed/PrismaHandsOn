# PrismaHandsOn

Welcome to PrismaHandsOn – your go-to resource for hands-on learning with Prisma ORM! Whether you're a beginner or an experienced developer looking to level up your skills, this repository is designed to guide you through the practical aspects of using Prisma in real-world scenarios.

## Retrieving Data

### **Finding Records:**

**1. Finding All Records:**

- Use `prisma.model.findMany()` to retrieve all records of a specific model.
- Example: `const allUsers = await prisma.user.findMany()`

**2. Finding the First Record:**

- Use `prisma.model.findFirst()` to retrieve the first record matching your criteria.
- Example: `const firstUser = await prisma.user.findFirst({ where: { name: 'Alice' } })`

**3. Finding the First Record or Throwing an Error:**

- Use `prisma.model.findFirstOrThrow()` to retrieve the first record or throw an error if none is found.
- Example: `const user = await prisma.user.findFirstOrThrow({ where: { id: 1 } })`

**4. Finding a Unique Record:**

- Use `prisma.model.findUnique()` to retrieve a single record based on unique fields, such as an email address.
- Example: `const user = await prisma.user.findUnique({ where: { email: 'johndoe@example.com' } })`

**5. Finding a Unique Record or Throwing an Error:**

- Use `prisma.model.findUniqueOrThrow()` to retrieve a unique record or throw an error if none or multiple are found.

**6. Selecting Specific Fields:**

- Use the `select` option to fetch only the desired fields, improving performance.
- Example: `const users = await prisma.user.findMany({ select: { name: true, email: true } })`

### **Relation Queries:**

**1. Fluent API:**

- Prisma offers a fluent API for navigating relationships between models.
- Example: `const posts = await prisma.user.findUnique({ where: { email: 'johndoe@example.com' } }).posts()`

**2. Nested Reads:**

- Fetch related data in a single query using `include` or nested `select`.
- Example: `const userWithPosts = await prisma.user.findUnique({ where: { email: 'johndoe@example.com' }, include: { posts: true } })`

**3. Relation Filters:**

- Filter related records using `where` within nested reads.
- Example: `const userWithRecentPosts = await prisma.user.findUnique({ where: { email: 'johndoe@example.com' }, include: { posts: { where: { published: true } } } })`

### Filtering

**1. AND:**

- Combines multiple conditions using `and` within the `where` clause.
- Example: `const users = await prisma.user.findMany({ where: { age: { gt: 25 }, city: 'London' } })`

**2. Contains:**

- Checks if a string field contains a substring using `contains`.
- Example: `const posts = await prisma.post.findMany({ where: { title: { contains: 'Prisma' } } })`

**3. Equality:**

- Compares values for exact equality using `==`.
- Example: `const user = await prisma.user.findUnique({ where: { email: 'johndoe@example.com' } })`

**4. Greater Than:**

- Finds values greater than a specified value using `gt`.
- Example: `const expensiveProducts = await prisma.product.findMany({ where: { price: { gt: 100 } } })`

**5. In Array:**

- Checks if a value is present within an array using `in`.
- Example: `const activeUsers = await prisma.user.findMany({ where: { status: { in: ['active', 'pending'] } } })`

**6. NOT:**

- Negates a condition using `not`.
- Example: `const nonAdminUsers = await prisma.user.findMany({ where: { role: { not: 'admin' } } })`

**7. OR:**

- Combines multiple conditions using `or` within the `where` clause.
- Example: `const posts = await prisma.post.findMany({ where: { OR: [{ title: { contains: 'Prisma' } }, { content: { contains: 'ORM' } }] } })`

**8. Starts With:**

- Checks if a string field starts with a specific substring using `startsWith`.
- Example: `const users = await prisma.user.findMany({ where: { name: { startsWith: 'A' } } })`

## **Key Points:**

- Prisma generates type-safe queries based on your schema, ensuring correctness.
- Queries are automatically optimized for performance.
- Nested reads reduce the number of database round trips.
- Relation filters allow for precise data retrieval.

## **Remember:**

- Always import the Prisma Client in your code: `const { PrismaClient } = require('@prisma/client');`
- Instantiate the client: `const prisma = new PrismaClient();`
- Close the client after use: `await prisma.$disconnect();`