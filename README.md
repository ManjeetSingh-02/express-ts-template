# express-ts-template
Express with TypeScript Template

## .env
```env
ORIGIN_URL=http://localhost:5173
PORT=3000
DATABASE_URL=mongodb://localhost:27017/your_database_name
or
DATABASE_URL=postgresql://username:password@localhost:5432/your_database_name
NODE_ENV=development
COOKIE_SECRET=minimum_of_32_char_cookie_secret
```

## Install dependencies
```bash
pnpm add cookie-parser cors dotenv express mongoose winston winston-daily-rotate-file zod
```

## Install dev dependencies
```bash
pnpm add -D @eslint/js @types/cookie-parser @types/cors @types/express @types/node eslint eslint-config-prettier globals jiti prettier tsx typescript typescript-eslint
```