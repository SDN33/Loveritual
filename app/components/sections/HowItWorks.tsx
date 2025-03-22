"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function HowItWorks() {
  const pathname = usePathname();
  
  const steps = [
    {
      icon: "📝",
      title: "Abonnez-vous",
      description: "Choisissez la formule qui correspond à vos envies et à votre budget"
    },
    {
      icon: "📦",
      title: "Recevez votre box",
      description: "Chaque mois, découvrez une box thématique livrée directement chez vous"
    },
    {
      icon: "💑",
      title: "Pour des moments à 2",
      description: "Profitez des activités et des produits soigneusement sélectionnés"
    },
    {
      icon: "❤️",
      title: "Renforcez votre lien",
      description: "Créez de nouvelles habitudes et renouvelez votre complicité"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-it-works" className="py-16 bg-[#FFF8FA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7D0633] mb-6">
            Comment fonctionne LoveRitual ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quelques étapes simples pour transformer votre relation
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={itemVariants}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-[#7D0633] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              <div className="mt-4 text-gray-600 text-lg font-bold">
                Étape {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Chaque box est conçue par nos experts pour vous offrir une expérience unique et renforcer votre relation de couple. <br/><br/><span className="text-base text-[#7D0633]">C&apos;est simple, surprenant et toujours renouvelé !</span>
          </p>
            {pathname !== '/' && (
            <a href="#pricing" className="btn-primary">
              Découvrir nos formules
            </a>
            )}
        </div>
      </div>
    </section>
  );
}