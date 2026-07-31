# 🚀 Cypress API & UI Hybrid Test Automation Framework

![Cypress API & UI Hybrid Suite](https://github.com/Santi-Furman/cypress-api-ui-hybrid-framework/actions/workflows/cypress.yml/badge.svg)
![Cypress Version](https://img.shields.io/badge/cypress-15.19.0-brightgreen.svg)
![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Un framework de pruebas automatizadas híbridas (**API + UI**) desarrollado con **Cypress**, implementando el patrón de diseño **Page Object Model (POM)**, comandos personalizados, reportes HTML interactivos con **Mochawesome** y un pipeline de **CI/CD** desplegado en **GitHub Actions** y publicado en **GitHub Pages**.

---

# 📊 Reportes de Pruebas en Vivo (Live Report)

Cada ejecución del pipeline genera un reporte interactivo con gráficos y métricas de desempeño.

🌐 **[Ver Reporte Interactivo en GitHub Pages](https://santi-furman.github.io/cypress-api-ui-hybrid-framework/)**

---

# 🏗️ Arquitectura del Framework

El proyecto está diseñado bajo una arquitectura modular y mantenible.

```text
cypress-api-ui-hybrid-framework/
├── .github/
│   └── workflows/
│       └── cypress.yml            # Pipeline de CI/CD para GitHub Actions
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   └── users_api.cy.js    # Pruebas automatizadas de API REST
│   │   └── ui/
│   │       └── dashboard_ui.cy.js # Pruebas E2E de UI con Page Object Model
│   ├── fixtures/
│   │   └── newUserPayload.json    # Payload de datos mockeados para API
│   ├── pages/
│   │   └── InventoryPage.js       # Page Object para la vista de Inventario/Dashboard
│   ├── reports/                   # Reportes generados por Mochawesome (HTML/JSON)
│   └── support/
│       ├── commands.js            # Custom Commands (cy.login, cy.createUserApi)
│       └── e2e.js                 # Importación global de plugins
├── cypress.config.js              # Configuración base de Cypress y Reporter
├── package.json                   # Dependencias y scripts del proyecto
└── README.md                      # Documentación del proyecto
```

---

# 🛠️ Tecnologías y Herramientas

| Tecnología | Uso |
|------------|-----|
| **Cypress v15.19.0** | Framework principal de automatización |
| **JavaScript (ES6+)** | Lenguaje de programación |
| **Page Object Model (POM)** | Patrón de diseño para desacoplar la lógica de las pruebas de la interfaz |
| **Mochawesome Reporter** | Generación de reportes HTML interactivos |
| **GitHub Actions** | Integración Continua (CI/CD) |
| **GitHub Pages** | Publicación automática del reporte HTML |

---

# 🧪 Cobertura de Pruebas

## 📡 1. Pruebas de API REST (JSONPlaceholder)

### `GET /users`

- ✅ Validación del código de respuesta **HTTP 200 OK**.
- ✅ Verificación de tiempos de respuesta.
- ✅ Validación del tipo de contenido (**JSON**).

### `POST /users`

- ✅ Creación de usuarios utilizando payloads parametrizados desde **Fixtures**.
- ✅ Validación del código **201 Created**.
- ✅ Verificación de la estructura del objeto de respuesta.

---

## 🖥️ 2. Pruebas de UI (SauceDemo)

- ✅ Autenticación automatizada mediante **Custom Commands** (`cy.login()`).
- ✅ Navegación y validación del catálogo utilizando **Page Object Model** (`InventoryPage.js`).
- ✅ Interacción con elementos web (agregado de productos al carrito).
- ✅ Verificación del contador dinámico del carrito.

---

# 🚀 Instalación y Ejecución Local

## 📋 Prerrequisitos

- Node.js (**versión 18 o superior** recomendada).
- Git.

---

## 📥 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Santi-Furman/cypress-api-ui-hybrid-framework.git
cd cypress-api-ui-hybrid-framework
```

### 2. Instalar dependencias

```bash
npm install
```

---

# ▶️ Ejecutar las Pruebas

## 🟢 Modo Headless (Línea de comandos)

### Ejecutar toda la suite

```bash
npx cypress run
```

### Ejecutar únicamente las pruebas de API

```bash
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

### Ejecutar únicamente las pruebas de UI

```bash
npx cypress run --spec "cypress/e2e/ui/**/*.cy.js"
```

---

## 🟡 Modo Interactivo (Cypress Test Runner)

```bash
npx cypress open
```

---

# 📈 Reportes de Pruebas

Al ejecutar las pruebas en modo **Headless** (`npx cypress run`), **Mochawesome** genera un reporte HTML enriquecido con:

- 📊 Métricas de ejecución.
- ✅ Casos aprobados y fallidos.
- 📸 Capturas de pantalla automáticas en caso de error.

El reporte se genera en la siguiente ruta:

```text
cypress/reports/index.html
```

Podés abrir este archivo directamente en cualquier navegador web o consultar la versión publicada en GitHub Pages.

---

# ⚙️ Integración Continua (CI/CD)

El archivo `.github/workflows/cypress.yml` define un flujo automatizado que se ejecuta con cada `push` o `pull_request` sobre la rama principal.

## Flujo del Pipeline

1. 🐧 Se inicia un entorno **Ubuntu Latest** con **Node.js 20**.
2. 📦 Se instalan las dependencias mediante:

```bash
npm ci
```

3. 🧪 Se ejecuta toda la suite utilizando la acción oficial **cypress-io/github-action**.
4. 📄 Se genera el reporte HTML con **Mochawesome**.
5. 📦 El reporte se almacena como artefacto descargable (retención de 30 días).
6. 🌐 El reporte se publica automáticamente en la rama **gh-pages**, quedando disponible mediante GitHub Pages.

---

# 👤 Autor

**Santiago Furman**  
**QA Automation Engineer**

- GitHub: **[@Santi-Furman](https://github.com/Santi-Furman)**

