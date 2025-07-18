# Estimating System V2

A full-stack web app using React, Node.js, Prisma, and PostgreSQL styled with AdminLTE 3 (dark).

## Setup

### Backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev
npm run dev
