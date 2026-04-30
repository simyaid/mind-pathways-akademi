import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}

export const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => (
  <section className="pt-12 lg:pt-20 pb-16 lg:pb-20 border-b border-border bg-surface">
    <div className="container-tight">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="eyebrow mb-6">{eyebrow}</span>
        <h1 className="font-display text-4xl lg:text-[3.25rem] leading-[1.05] font-medium text-navy-deep mt-4">
          {title}
        </h1>
        {description && (
          <div className="mt-7 text-lg leading-relaxed text-muted-foreground max-w-2xl space-y-4">{description}</div>
        )}
      </motion.div>
    </div>
  </section>
);
