export default function Contact() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Contactez-nous
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Notre équipe est à votre écoute pour répondre à toutes vos questions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                  placeholder="Votre nom"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                <select 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]"
                  required
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="subscription">Question sur les abonnements</option>
                  <option value="shipping">Livraison & commande</option>
                  <option value="content">Contenu des box</option>
                  <option value="partnership">Partenariat</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#7D0633] text-white py-3 rounded-lg hover:bg-[#66052A] transition-colors">
                Envoyer le message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Nos coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#7D0633] mr-4">📧</div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@loveritual.fr</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#7D0633] mr-4">📞</div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#7D0633] mr-4">📍</div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">
                      123 Avenue de l&apos;Amour<br />
                      75011 Paris<br />
                      France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#7D0633] mb-4">Horaires du service client</h2>
              <p className="text-gray-600 mb-4">
                Notre équipe de support est disponible pour vous aider :
              </p>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span>9h - 18h</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Samedi</span>
                  <span>10h - 15h</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Dimanche</span>
                  <span>Fermé</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}