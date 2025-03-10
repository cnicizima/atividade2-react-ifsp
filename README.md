This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

Marilene Esquiavoni
14:56
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  list-style: none;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
Marilene Esquiavoni
14:59
export default function Topo {
    return (
        <header>
            <div>
                <picture>
                    <img src='./logo.png'/>
                </picture>

                <nav>
                    <a href="#">Produtos</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}
Marilene Esquiavoni
15:06
.topo {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    max-width: 80%;
}

.topo picture {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 120px;
}

.topo nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
Marilene Esquiavoni
15:14
.topo nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.topo nav a {
    text-transform: uppercase;
    color: #ffc98f;
    font-weight: bold;
    position: relative;
}

.topo nav a:hover {
    color: #ff66c8;
}

@media (max-width: 520px) {
    .topo {
        justify-content: center;
    }

    .topo nav {
        justify-content: center;
    }
}
Marilene Esquiavoni
15:36
.secao_capa p,
.secao_capa h1 {
    max-width: 550px;
    font-family: 'Anybody', cursive;
}

.secao_capa p {
    font-size: 36px;
    color: deeppink;
    text-shadow: 3px 3px 5px white;
    font-weight: bold;
}

.secao_capa h1 {
    text-transform: uppercase;
    color: chocolate;
    text-shadow: 3px 3px 5px white;
    font-size: 40px;
    line-height: 70px;
}


---
Marilene Esquiavoni
15:43
@media (max-width:768px) {
    .secao_capa h1 {
        font-size: 25px;
        line-height: 40px;
    }

    .secao_capa p {
        font-size: 20px;
    }
}

@media (max-width: 550px) {
    .secao_capa {
        background-position: 90% center;
    }
}

ajustar media query

no global scroll margin top o tamanho do topo pra descontar. aplicar na section global. section 