# Guía para Optimizar Imágenes

## Problemas Identificados
- Imágenes de 1440px mostradas en 380px (desperdicio de ancho de banda)
- Falta de imágenes responsivas
- Compresión insuficiente

## Soluciones Implementadas

### 1. Atributos de Imagen Optimizados
- `width` y `height` específicos para evitar layout shift
- `loading="lazy"` para imágenes no críticas
- `decoding="async"` para mejor performance
- `sizes` attribute para responsive images

### 2. Preload de Recursos Críticos
- Logo del navbar
- Imagen del banner principal
- Primeras imágenes del portfolio

### 3. Optimizaciones de Vite Build
- Code splitting por vendor/router/animations
- Inline de assets pequeños (<4kb)

## Próximos Pasos Recomendados

### Crear Versiones Múltiples de Imágenes
Para máximo ahorro, necesitas crear versiones redimensionadas:

```bash
# Usando herramientas como ImageMagick o un servicio online:

# Para imágenes del portfolio (380px display):
- Original: 1440px (actual)
- Large: 760px (2x para pantallas retina)
- Medium: 380px (tamaño display normal)
- Small: 190px (para móviles pequeños)

# Para el logo (89px display):
- Large: 178px (2x)
- Medium: 89px (tamaño normal)
```

### Estructura Recomendada
```
assets/images/
├── jardinJapones/
│   ├── jar1.webp (original 1440px)
│   ├── jar1-large.webp (760px)
│   ├── jar1-medium.webp (380px)
│   └── jar1-small.webp (190px)
```

### Herramientas Recomendadas
1. **Squoosh** (online): https://squoosh.app/
2. **TinyPNG** (online): https://tinypng.com/
3. **ImageMagick** (CLI): Para batch processing
4. **Next.js Image** (futuro): Si migras a Next.js

## Impacto Esperado
- **Reducción**: ~2.3MB de imágenes
- **LCP mejorado**: Especialmente en móviles
- **Mejor SEO**: Google premia sitios rápidos
- **Experiencia**: Carga más fluida

## Monitoreo
Usa estas herramientas para verificar mejoras:
- Google PageSpeed Insights
- WebPageTest
- Lighthouse en DevTools
