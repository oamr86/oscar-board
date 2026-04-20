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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## Optimización de componentes y rendimiento

### Uso de React.memo

Se utiliza `React.memo` en los siguientes componentes de presentación:

- **TaskListPresentation** (`features/task/components/TaskListPresentation.tsx`)
- **ProjectListPresentation** (`features/projects/components/ProjectListPresentation.tsx`)

**Justificación:**
Ambos componentes renderizan listas de elementos (tareas y proyectos) y reciben sus datos y handlers por props. Al envolverlos en `React.memo`, evitamos renders innecesarios cuando las props no cambian, optimizando el rendimiento en listas grandes o cuando el estado global cambia frecuentemente.

### Uso de useMemo

En `TaskListContainer` (`features/task/components/TaskListContainer.tsx`) se utiliza `useMemo` para calcular la lista filtrada de tareas (tickets). Esto evita que la función de filtrado se ejecute en cada render si las dependencias no han cambiado, mejorando la eficiencia cuando la lista de tareas es grande o los filtros complejos.

### Uso de useCallback

En `TaskListContainer` se usan `useCallback` para los handlers `handleRemove` y `handleToggle`, que se pasan como props a `TaskListPresentation` (un componente memoizado). Esto asegura que las referencias de los handlers no cambien entre renders, permitiendo que `React.memo` funcione correctamente y evitando renders innecesarios de los hijos.

### Uso de React.lazy y Suspense

En la página de proyectos (`app/projects/page.tsx`), el componente `ProjectListContainer` se carga de forma diferida usando `React.lazy` y `Suspense`. Esto permite dividir el código y cargar componentes pesados sólo cuando son necesarios, mejorando el tiempo de carga inicial de la aplicación.
