# Soda La Casita — sitio web y Tarjeta Cliente Frecuente

Misma base que el sitio de Willy's: menú con pestañas, pedidos (WhatsApp o llamada), tarjeta de sellos en Firebase y panel del personal.

Sitio (cuando se publique): https://joseka256-png.github.io/soda-la-casita/
Panel del personal: https://joseka256-png.github.io/soda-la-casita/personal.html

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Sitio público: menú, pedidos, tarjeta del cliente, ubicación y mapa |
| `tarjeta.js` | Tarjeta del cliente conectada a Firestore (se actualiza en vivo) |
| `personal.html` | Panel del personal: buscar cliente, sumar sellos, canjear premio, reporte, CSV y respaldo |
| `firebase-config.js` | Configuración de Firebase y reglas del programa (meta, monto mínimo, premio) |
| `firestore.rules` | Reglas de seguridad de Firestore (copiar en la consola) |
| `logo.png`, `favicon.png` | Logo (recreado a partir del rótulo) e ícono |
| `img/` | Fotos del local |
| `soporte/` | Restaurar respaldos (solo ISCR Tech) |

## Pendientes antes de publicar

En `index.html`, bloque `CONFIG`:
- `whatsapp`: configurado en 8880-7252 (carrito de pedidos → WhatsApp).
- `horario`: horario real.
- `pagos`: confirmar formas de pago.

En `firebase-config.js`: pegar el `firebaseConfig` del proyecto nuevo y ajustar `LEALTAD` (premio, monto mínimo).
Mientras diga `PEGAR…`, la tarjeta muestra “se está configurando” y el resto del sitio funciona normal.

## Configurar Firebase (una sola vez, proyecto NUEVO, no el de Willy's)

1. Crear proyecto en Firebase (cuenta del negocio); activar **Firestore** (modo producción) y **Authentication → Correo/contraseña**.
2. Authentication → Configuración → Dominios autorizados → agregar `joseka256-png.github.io`.
3. Pegar el `firebaseConfig` de la app web en `firebase-config.js`.
4. Firestore → Reglas → pegar `firestore.rules` → **Publicar**.
5. Crear el usuario del personal en Authentication y copiar su **UID**.
6. Firestore → Datos → colección `staff` → ID del documento = **UID** → campo `nombre` (string), ej. `Caja La Casita`.
7. (Opcional) App Check con reCAPTCHA: poner la clave pública en `APP_CHECK_SITE_KEY`.

## Cómo funciona la tarjeta

- El cliente se registra con su teléfono (8 dígitos) y nombre. La tarjeta se guarda en `tarjetas/{telefono}`.
- Al pagar, dice su teléfono; el personal lo busca en `personal.html`, escribe el monto y toca **Registrar compra**.
- Compra ≥ ₡3.000 → 1 sello. Con 10 sellos aparece **Canjear premio**; la tarjeta vuelve a 0.
- Solo usuarios en `staff/{uid}` pueden sumar sellos, canjear, ver historial y listar clientes. El historial no se puede editar ni borrar.

Si se cambia la meta de sellos, cambiar también `META()` en `firestore.rules` y volver a publicarlas.
