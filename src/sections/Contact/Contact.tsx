import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : false,
  );
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  // Inicializar EmailJS
  React.useEffect(() => {
    // Reemplaza con tu PUBLIC_KEY de EmailJS
    emailjs.init("JXXBN1TkTnfxFFRRM");

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isFormVisible = isLargeScreen || isOpen;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Enviando..." });

    try {
      // Reemplaza con tu SERVICE_ID y TEMPLATE_ID de EmailJS
      const result = await emailjs.send("service_3npphef", "template_2ogwin9", {
        to_email: "espectra.cks@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Limpiar el mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setStatus({ type: "idle", message: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus({
        type: "error",
        message:
          "Error al enviar el mensaje. Intenta de nuevo o contacta directamente.",
      });
    }
  };

  return (
    <section className="py-10 md:py-12 px-4 md:px-6 relative overflow-hidden rounded-3xl border border-accentBright/20 bg-background">
      <div className="h-full max-w-5xl mx-auto">
        {/* Botón de apertura/cierre desplegable */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="w-full relative px-6 py-4 mb-6 group overflow-hidden rounded-2xl md:hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Fondo con gradiente cinematográfico */}
          <div className="absolute inset-0 bg-gradient-to-r from-accentBright/20 via-accentGlow/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Bordes cinematográficos */}
          <div className="absolute inset-0 border border-accentBright/40 rounded-2xl" />
          <div
            className="absolute inset-0 border-2 border-transparent rounded-2xl bg-clip-padding pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(255, 79, 0, 0.35), rgba(194, 124, 96, 0.28), rgba(161, 62, 34, 0.28))`,
              WebkitMaskImage:
                "linear-gradient(#fff 0%, #fff calc(100% - 2px), transparent calc(100% - 2px))",
              maskImage:
                "linear-gradient(#fff 0%, #fff calc(100% - 2px), transparent calc(100% - 2px))",
            }}
          />

          {/* Glow effect */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accentBright via-accentGlow to-accent opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500 -z-10" />

          {/* Contenido del botón */}
          <div className="relative flex items-center justify-between">
            <h2 className="font-bebas text-textPrimary text-4xl tracking-wider">
              CONTACTO
            </h2>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.45 }}
              className="text-accentBright text-2xl"
            >
              ▼
            </motion.div>
          </div>
        </motion.button>

        <div className="hidden md:block mb-6">
          <h2 className="font-bebas text-textPrimary text-5xl tracking-wider text-center">
            CONTACTO
          </h2>
        </div>

        {/* Formulario desplegable */}
        <AnimatePresence>
          {isFormVisible && (
            <motion.div
              initial={
                isLargeScreen ? false : { opacity: 0, height: 0, y: -20 }
              }
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={
                isLargeScreen ? undefined : { opacity: 0, height: 0, y: -20 }
              }
              transition={{ duration: 0.58, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div
                className="relative p-8 rounded-2xl border border-accentBright/30 bg-dark/80 backdrop-blur-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255, 79, 0, 0.07) 0%, transparent 50%, rgba(194, 124, 96, 0.06) 100%)",
                }}
              >
                {/* Bordes cinematográficos decorativos */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-br-full blur-2xl opacity-0 group-hover:opacity-100 -z-10" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accentGlow/20 to-transparent rounded-tl-full blur-2xl opacity-0 group-hover:opacity-100 -z-10" />

                <p className="text-center text-textPrimary/80 mb-8 text-lg font-barlow">
                  ¿Interesado en colaborar o tener más información? Déjanos tu
                  mensaje.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-barlow font-semibold mb-2 text-accentBright uppercase tracking-wider"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl bg-dark text-textPrimary border-2 border-accentBright/30 focus:outline-none focus:border-accentBright focus:ring-2 focus:ring-accentBright/45 transition-all placeholder-textPrimary/50 font-barlow"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-barlow font-semibold mb-2 text-accentBright uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark text-textPrimary border-2 border-accentBright/30 focus:outline-none focus:border-accentBright focus:ring-2 focus:ring-accentBright/45 transition-all placeholder-textPrimary/50 font-barlow"
                    />
                  </div>

                  {/* Asunto */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-barlow font-semibold mb-2 text-accentBright uppercase tracking-wider"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿De qué se trata?"
                      className="w-full px-4 py-3 rounded-xl bg-dark text-textPrimary border-2 border-accentBright/30 focus:outline-none focus:border-accentBright focus:ring-2 focus:ring-accentBright/45 transition-all placeholder-textPrimary/50 font-barlow"
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-barlow font-semibold mb-2 text-accentBright uppercase tracking-wider"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tu mensaje..."
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark text-textPrimary border-2 border-accentBright/30 focus:outline-none focus:border-accentBright focus:ring-2 focus:ring-accentBright/45 transition-all placeholder-textPrimary/50 resize-none font-barlow"
                    />
                  </div>

                  {/* Estado del formulario */}
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`md:col-span-2 p-4 rounded-xl text-center font-semibold ${
                        status.type === "success"
                          ? "bg-accentBright/20 text-accentGlow border border-accentBright/50"
                          : status.type === "error"
                            ? "bg-red-900/20 text-red-400 border border-red-500/50"
                            : "bg-accentBright/10 text-textPrimary"
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}

                  {/* Botón Enviar */}
                  <motion.button
                    type="submit"
                    disabled={status.type === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="md:col-span-2 w-full md:w-auto md:justify-self-center py-3 px-5 rounded-2xl bg-accentBright hover:bg-accentBright/90 disabled:opacity-50 disabled:cursor-not-allowed text-dark font-bebas text-xl tracking-wider transition-all cinema-shadow"
                  >
                    {status.type === "loading"
                      ? "ENVIANDO..."
                      : "ENVIAR MENSAJE"}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instrucciones de configuración */}
        {!isLargeScreen && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-xl text-sm text-textPrimary/70"
          >
            <strong>⚙️ Configuración necesaria:</strong>
            <p className="mt-2 mb-2">
              Abre el formulario y consulta EMAILJS_SETUP.md para instrucciones.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
