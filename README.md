# Portfolio - Belén Developer

## 📁 Estructura del Proyecto

```
project/
├── index.html              # Archivo HTML principal
├── src/
│   ├── styles/            # Archivos CSS organizados
│   │   ├── reset.css      # Reset básico de estilos
│   │   ├── variables.css  # Variables CSS y temas
│   │   ├── animations.css # Animaciones y keyframes
│   │   └── main.css       # Estilos principales de componentes
│   └── scripts/           # Scripts JavaScript modulares
│       ├── cursor.js      # Cursor personalizado
│       ├── terminal.js    # Animación del terminal
│       ├── menu.js        # Menú hamburguesa y sidebar
│       └── animations.js  # Animaciones de scroll (reveal)
└── README.md              # Este archivo
```

## 🎨 Organización de CSS

### reset.css
- Reset básico de estilos
- Box-sizing, márgenes y padding
- Scroll behavior

### variables.css
- Variables de colores y tema
- Efectos de fondo (noise overlay, gradientes)
- Configuración base del body

### animations.css
- @keyframes para todas las animaciones
- Clases de animación reutilizables
- Transiciones y efectos

### main.css
- Componentes de la interfaz
- Navegación y hero
- Secciones (about, projects, skills, contact)
- Media queries responsive
- Menú hamburguesa y sidebar

## 🛠️ Organización de JavaScript

### cursor.js
- Cursor personalizado con anillo
- Efectos hover en elementos interactivos
- Animación fluida del cursor

### terminal.js
- Animación de escritura del terminal
- Efecto de cursor parpadeante
- Observer para activar cuando es visible

### menu.js
- Funcionalidad del menú hamburguesa
- Apertura/cierre del sidebar
- Event listeners para navegación móvil

### animations.js
- Intersection Observer para revelar elementos
- Animación de skill bars
- Efectos de scroll

## 🚀 Cómo usar

1. **Desarrollo local:**
   - Simplemente abre `index.html` en tu navegador
   - O usa Live Server en VS Code para hot reload

2. **Estructura modular:**
   - Cada archivo CSS maneja una responsabilidad específica
   - Los scripts están separados por funcionalidad
   - Fácil de mantener y escalar

3. **Modificar estilos:**
   - Colores y tema → `variables.css`
   - Animaciones → `animations.css`
   - Componentes específicos → `main.css`

4. **Modificar funcionalidad:**
   - Cursor → `cursor.js`
   - Terminal → `terminal.js`
   - Menú móvil → `menu.js`
   - Efectos scroll → `animations.js`

## 📱 Responsive

El diseño es completamente responsive con breakpoints:
- Mobile: < 480px
- Tablet: 481px - 768px
- Tablet grande: 769px - 1024px
- Desktop: 1025px - 1440px
- Pantallas grandes: > 1440px

## ✨ Características

- ✅ Cursor personalizado
- ✅ Animaciones suaves
- ✅ Terminal interactivo
- ✅ Diseño responsive
- ✅ Menú hamburguesa para móviles
- ✅ Efectos de scroll (reveal)
- ✅ Grid de tecnologías
- ✅ Barras de skill animadas

## 🎯 Mejoras implementadas

1. **Separación de responsabilidades**: CSS y JS organizados en módulos
2. **Mantenibilidad**: Fácil encontrar y modificar código específico
3. **Performance**: Archivos más pequeños y enfocados
4. **Escalabilidad**: Agregar nuevas funcionalidades es más simple
5. **Legibilidad**: Código más limpio y organizado

## 📝 Notas

- El favicon está embebido en el HTML como data URI
- Las fuentes se cargan desde Google Fonts
- Los iconos usan Devicons y Font Awesome
- Todas las rutas son relativas para fácil deployment
