# La Cámara del Número Oculto 🔢✨

> Un reto matemático interactivo con atmósfera misteriosa

## 📖 Descripción

**La Cámara del Número Oculto** es una experiencia web inmersiva que desafía tu intuición matemática. A través de un ritual de cinco pasos, el usuario realiza operaciones simples pensando que el resultado depende del número que elige... pero existe un secreto oculto.

Sin importar qué número elijas al inicio, siempre llegarás al mismo resultado: **4**.

### ✨ Características

- **Interfaz misteriosa**: Diseño dark con atmósfera enigmática
- **Audio ambiental**: Música de suspenso que se activa durante la interacción
- **Responsive**: Funciona perfectamente en dispositivos móviles y escritorio
- **Accesible**: Implementa ARIA labels y navegación por teclado
- **Interactivo**: Progresión visual mediante barra de progreso

## 🎯 Cómo Funciona

1. **Piensa en un número** - Puede ser pequeño o gigantesco
2. **Multiplícalo por 2** - Primera operación
3. **Súmale 8** - Segunda operación
4. **Divide entre 2** - Tercer paso
5. **Réstale tu número original** - Último paso
6. **¡Revelación!** - El resultado siempre es **4**

### La Magia Matemática

El truco descansa en estas operaciones algebraicas:

```
Si x es tu número inicial:
(2x + 8) / 2 - x
= x + 4 - x
= 4
```

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con gradientes y efectos visuales
- **JavaScript (Vanilla)** - Lógica interactiva sin dependencias
- **Web Audio API** - Reproducción de audio ambiental

## 📁 Estructura del Proyecto

```
reto_matematico/
├── index.html           # Página principal
├── css/
│   └── style.css       # Estilos y diseño
├── js/
│   └── main.js         # Lógica interactiva
├── static/
│   └── audio/          # Archivos de audio
└── README.md           # Este archivo
```

## 🚀 Uso

### Acceso Local

1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. ¡Disfruta del enigma!

### Características Interactivas

- **Botón de Audio**: Activa/desactiva la música ambiental
- **Barra de Progreso**: Visualiza tu avance en el ritual
- **Botón Revelar**: Descubre el misterio al final
- **Repetir**: Vuelve a comenzar el ritual

## ♿ Accesibilidad

Este proyecto implementa:

- Etiquetas ARIA apropiadas
- Contraste de colores legible
- Navegación con teclado
- Descriptions semánticas

## 🎨 Personalización

### Cambiar el Audio

Reemplaza el archivo en `static/audio/` y actualiza la ruta en `index.html`:

```html
<audio id="mysteryAudio" loop preload="auto" src="tu-audio.mp3"></audio>
```

### Ajustar Volumen

En `js/main.js`, modifica:

```javascript
audioEl.volume = 0.35; // Cambia el valor entre 0 y 1
```

### Cambiar el Resultado

Para modificar el número final, edita la propiedad `number` en el último elemento del array `steps` en `js/main.js`:

```javascript
number: "4", // Cambia este valor
```

## 📱 Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 💡 Ideas para Expandir

- [ ] Múltiples idiomas
- [ ] Estadísticas de usuarios
- [ ] Variaciones del truco
- [ ] Compartir en redes sociales
- [ ] Versión con base de datos
- [ ] Animaciones adicionales

## 📝 Licencia

Libre para usar y modificar.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de:

- Reportar bugs
- Sugerir mejoras
- Proponer nuevas características
- Mejorar la documentación

---

**Creado con ✨ y un poco de magia matemática**
