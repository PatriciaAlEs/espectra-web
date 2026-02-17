# 📧 Guía de Configuración - Formulario de Contacto

## ¿Qué es EmailJS?
EmailJS permite enviar emails directamente desde tu página web sin necesidad de un backend. Los mensajes de contacto se enviarán directamente a: **espectra.cks@gmail.com**

## Pasos de Configuración

### 1. Crear cuenta en EmailJS
1. Ve a [emailjs.com](https://emailjs.com)
2. Haz clic en **"Sign Up"**
3. Completa el registro (puedes usar GitHub, Google, o email)

### 2. Crear un Servicio de Email
1. En el dashboard, ve a **Email Services**
2. Haz clic en **"Add Service"**
3. Selecciona **Gmail** (o tu proveedor de email preferido)
4. Sigue los pasos para conectar tu cuenta de Gmail:
   - **Email**: espectra.cks@gmail.com
   - **Gmail App Password**: [Genera una contraseña de aplicación](https://myaccount.google.com/apppasswords)
5. Copia el **Service ID** (tendrá un formato como `service_xxxxx`)

### 3. Crear una Plantilla de Email
1. Ve a **Email Templates**
2. Haz clic en **"Create Template"**
3. Nombre sugerido: `contact_form`
4. En la sección **Email Content**, usa este contenido:

```
Para: {{to_email}}
De: {{from_name}} <{{from_email}}>
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de Espectra
```

5. Personaliza si es necesario y guarda
6. Copia el **Template ID** (tendrá un formato como `template_xxxxx`)

### 4. Obtener tu Public Key
1. Ve a **Account** (en la esquina superior derecha)
2. Copia tu **Public Key** (tendrá un formato como `jxxx...xxx`)

### 5. Actualizar el Código
Abre el archivo `src/sections/Contact/Contact.tsx` y reemplaza las tres constantes:

```typescript
// Línea ~39
emailjs.init("TU_PUBLIC_KEY_AQUI");

// Línea ~75-76
await emailjs.send(
  "TU_SERVICE_ID_AQUI",
  "TU_TEMPLATE_ID_AQUI",
```

**Ejemplo:**
```typescript
emailjs.init("jx7kL9mNoPqRsT2uVwXyZ123");

await emailjs.send(
  "service_abc123def456",
  "template_xyz789ijk",
```

### 6. Probar el Formulario
1. Ejecuta tu servidor de desarrollo: `npm run dev`
2. Navega a la sección de **Contacto**
3. Llena el formulario y haz clic en **"ENVIAR MENSAJE"**
4. Verifica que el email llegue a espectra.cks@gmail.com

## ⚠️ Importante
- **Nunca compartas tu Public Key públicamente** - aunque es seguro exponerlo (es solo para lectura), es una buena práctica
- Los Service IDs y Template IDs sí pueden ser públicos en el código del navegador
- Los límites gratuitos de EmailJS son generosos (~200 emails/mes)

## Troubleshooting

### Error: "Cannot read properties of undefined"
- Asegúrate de haber reemplazado `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID` y `YOUR_TEMPLATE_ID`
- Verifica que las credenciales sean correctas (cópialas directamente desde EmailJS)

### El email no llega
- Revisa la sección **Logs** en EmailJS (Dashboard > Logs)
- Verifica que el servicio de Gmail esté conectado correctamente
- Comprueba que la plantilla tenga los campos correctos

### Límite de emails alcanzado
- EmailJS ofrece 200 emails/mes en el plan gratuito
- Para más, puedes actualizar a un plan de pago

## Variables Disponibles en la Plantilla
El formulario envía estas variables que puedes usar en tu plantilla de EmailJS:

- `{{to_email}}` = espectra.cks@gmail.com
- `{{from_name}}` = Nombre del visitante
- `{{from_email}}` = Email del visitante
- `{{subject}}` = Asunto del mensaje
- `{{message}}` = Contenido del mensaje

Puedes usarlas en cualquier parte de tu plantilla de email.

---

¿Preguntas? Consulta la [documentación oficial de EmailJS](https://www.emailjs.com/docs/)
