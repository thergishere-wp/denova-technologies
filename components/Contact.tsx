"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { fadeUp } from "./AnimatedSection";
import { useState } from "react";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  company: z.string().min(1, "Required"),
  country: z.enum(["Sri Lanka", "Bangladesh", "Other"] as const, { error: "Required" }),
  phone: z.string().min(1, "Required"),
  email: z.string().email("Valid email required"),
  productInterest: z.string().min(1, "Required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const productOptions = [
  "CAD & Pattern Software",
  "Automatic Cutting Systems",
  "Fabric Spreading",
  "Fabric Inspection",
  "Smart Factory Solutions",
  "After-Sales & Services",
  "Not sure — need a recommendation",
];

const contactDetails = [
  { label: "Email", value: "sales@DeNovatec.com", href: "mailto:sales@DeNovatec.com" },
  { label: "New Zealand", value: "+64 27 5555880", href: "tel:+6427555880" },
  { label: "Sri Lanka", value: "+94 777 395884", href: "tel:+94777395884" },
  { label: "Bangladesh", value: "+880 1817-079822", href: "tel:+8801817079822" },
  { label: "Response", value: "Within 1 business day", href: null },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  padding: "9px 12px",
  fontSize: 12,
  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
  outline: "none",
  transition: "border-color 0.15s",
  appearance: "none" as const,
};

interface Props {
  prefillProduct?: string;
}

export default function Contact({ prefillProduct }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (prefillProduct) {
      const match = productOptions.find((opt) =>
        opt.toLowerCase().includes(prefillProduct.toLowerCase().split(" ")[0]?.toLowerCase() ?? "")
      );
      if (match) setValue("productInterest", match);
    }
  }, [prefillProduct, setValue]);

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { success: boolean; error?: string };
      if (json.success) {
        setStatus("success");
      } else {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{ background: "var(--navy)", padding: "6rem 0" }}
    >
      <div
        style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem", display: "grid", gridTemplateColumns: "40fr 60fr", gap: "5rem", alignItems: "start" }}
        className="contact-grid"
      >
        {/* LEFT */}
        <AnimatedSection>
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 20, height: 2, background: "var(--blue)" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--blue-mid)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Get In Touch
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-ibm-plex-condensed), var(--font-ibm-plex-sans), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3vw, 2.75rem)",
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: 16,
              }}
            >
              Request a{" "}
              <span style={{ color: "var(--blue-mid)" }}>Quote</span>
            </h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 36, maxWidth: 380 }}>
              Our team will help you identify the right machine for your operation — honest expert advice with no sales pressure.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {contactDetails.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ fontSize: 13, fontWeight: 500, color: "#fff", textAlign: "right" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.7)", textAlign: "right" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* RIGHT — Form */}
        <AnimatedSection>
          <motion.div variants={fadeUp}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    padding: "48px 32px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    textAlign: "center",
                  }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#198038"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ margin: "0 auto 16px" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 8 }}>
                    Enquiry sent.
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
                    We&apos;ll respond within 1 business day.
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                  noValidate
                >
                  {/* Row 1 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                    <div>
                      <input
                        {...register("firstName")}
                        placeholder="First Name *"
                        style={{ ...inputStyle, borderColor: errors.firstName ? "var(--red)" : "rgba(255,255,255,0.15)" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.firstName ? "var(--red)" : "rgba(255,255,255,0.15)")}
                      />
                      {errors.firstName && (
                        <div style={{ fontSize: 11, color: "var(--red)", marginTop: 4 }}>{errors.firstName.message}</div>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("lastName")}
                        placeholder="Last Name *"
                        style={{ ...inputStyle, borderColor: errors.lastName ? "var(--red)" : "rgba(255,255,255,0.15)" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.lastName ? "var(--red)" : "rgba(255,255,255,0.15)")}
                      />
                      {errors.lastName && (
                        <div style={{ fontSize: 11, color: "var(--red)", marginTop: 4 }}>{errors.lastName.message}</div>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <input
                      {...register("company")}
                      placeholder="Company Name *"
                      style={{ ...inputStyle, borderColor: errors.company ? "var(--red)" : "rgba(255,255,255,0.15)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.company ? "var(--red)" : "rgba(255,255,255,0.15)")}
                    />
                    {errors.company && (
                      <div style={{ fontSize: 11, color: "var(--red)", marginTop: 4 }}>{errors.company.message}</div>
                    )}
                  </div>

                  {/* Row 3 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                    <div>
                      <select
                        {...register("country")}
                        style={{ ...inputStyle, borderColor: errors.country ? "var(--red)" : "rgba(255,255,255,0.15)", cursor: "pointer" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.country ? "var(--red)" : "rgba(255,255,255,0.15)")}
                        defaultValue=""
                      >
                        <option value="" disabled style={{ background: "#00205b" }}>Country *</option>
                        <option value="Sri Lanka" style={{ background: "#00205b" }}>Sri Lanka</option>
                        <option value="Bangladesh" style={{ background: "#00205b" }}>Bangladesh</option>
                        <option value="Other" style={{ background: "#00205b" }}>Other</option>
                      </select>
                      {errors.country && (
                        <div style={{ fontSize: 11, color: "var(--red)", marginTop: 4 }}>{errors.country.message}</div>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("phone")}
                        placeholder="Phone *"
                        type="tel"
                        style={{ ...inputStyle, borderColor: errors.phone ? "var(--red)" : "rgba(255,255,255,0.15)" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.phone ? "var(--red)" : "rgba(255,255,255,0.15)")}
                      />
                      {errors.phone && (
                        <div style={{ fontSize: 11, color: "var(--red)", marginTop: 4 }}>{errors.phone.message}</div>
                      )}
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div>
                    <input
                      {...register("email")}
                      placeholder="Email Address *"
                      type="email"
                      style={{ ...inputStyle, borderColor: errors.email ? "var(--red)" : "rgba(255,255,255,0.15)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "var(--red)" : "rgba(255,255,255,0.15)")}
                    />
                    {errors.email && (
                      <div style={{ fontSize: 11, color: "var(--red)", marginTop: 4 }}>{errors.email.message}</div>
                    )}
                  </div>

                  {/* Row 5 */}
                  <div>
                    <select
                      {...register("productInterest")}
                      style={{ ...inputStyle, borderColor: errors.productInterest ? "var(--red)" : "rgba(255,255,255,0.15)", cursor: "pointer" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.productInterest ? "var(--red)" : "rgba(255,255,255,0.15)")}
                      defaultValue=""
                    >
                      <option value="" disabled style={{ background: "#00205b" }}>Product of Interest *</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ background: "#00205b" }}>{opt}</option>
                      ))}
                    </select>
                    {errors.productInterest && (
                      <div style={{ fontSize: 11, color: "var(--red)", marginTop: 4 }}>{errors.productInterest.message}</div>
                    )}
                  </div>

                  {/* Row 6 */}
                  <div>
                    <textarea
                      {...register("message")}
                      placeholder="Message / Requirements (optional)"
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ fontSize: 12, color: "var(--red)", padding: "8px 0" }}
                      >
                        {errorMsg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      background: status === "loading" ? "var(--blue2)" : "var(--blue)",
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 600,
                      padding: "13px 24px",
                      border: "none",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      fontFamily: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      transition: "background 0.15s",
                      marginTop: 2,
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="spin-loader"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Submit Enquiry →"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
