# Zeeguros Web

## Overview

Zeeguros Web es un proyecto desarrollado con **Next.js** y un CMS headless basado en **Sanity**. El sitio ofrece una gestión flexible de contenidos gracias a una taxonomía bien estructurada y la integración de componentes modulares.

## Tecnologías Utilizadas

- **Framework**: Next.js 15.1.3
- **CMS**: Sanity (headless)
- **Estilización**: TailwindCSS + Styled Components
- **Gestión de Estado**: Zustand
- **Validación de Formularios**: React Hook Form + Zod
- **Fuentes & Iconos**: FontAwesome, Lucide React
- **Animaciones**: TailwindCSS Animate

## Estructura de Contenidos (Sanity)

Sanity está organizado en una taxonomía flexible que permite la creación de páginas altamente personalizadas:

- **Blog** → publicaciones individuales
- **Pages** → páginas estáticas (ej. Inicio, Términos y Condiciones, etc.)
- **Componentes** → secciones reutilizables para la construcción de páginas

### Flexibilidad del CMS

Gracias a Sanity, las páginas pueden construirse de manera modular:

- Las diferentes **secciones** pueden combinarse libremente
- Cada **componente** es personalizable en contenidos e imágenes
- El CMS permite la gestión **independiente** de las distintas versiones lingüísticas

## Configuración y Puesta en Marcha

### 1. Clonar el repositorio

```sh
  git clone https://github.com/tu-repo/zeeguros-web.git
  cd zeeguros-web
```

### 1. Clonar el repositorio

```sh
  npm install
```

### 3. Configurar variables de entorno

Un archivo .env.template está disponible en el repositorio. Renombrarlo a .env.local y agregar las credenciales de Sanity recuperables desde tu cuenta.

### 4. Iniciar el proyecto en modo desarrollo

```sh
    npm run dev
```

### 5. Próximos Pasos

- Expansión del CMS: agregar páginas multilingües para las landing pages
- Optimización SEO: mejorar los metadatos y estrategias SEO para cada versión lingüística
- Mejoras UI/UX: integración de animaciones avanzadas y mejoras gráficas
