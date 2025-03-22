export default function Contact() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7D0633] mb-8 text-center">
          Contactez-nous
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
          Notre équipe est à votre disposition pour répondre à toutes vos questions
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#7D0633] mb-6">Formulaire de contact</h2>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Prénom</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Nom</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="question">Question sur les box</option>
                  <option value="subscription">Abonnement</option>
                  <option value="problem">Problème avec une commande</option>
                  <option value="partnership">Partenariat</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#7D0633] text-white py-3 px-4 rounded-md hover:bg-[#9A0E48] transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-[#7D0633] mb-6">Nos coordonnées</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#7D0633] text-xl mr-3">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Adresse</h3>
                    <p className="text-gray-600">
                      123 Avenue de l'Amour<br />
                      75011 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#7D0633] text-xl mr-3">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      contact@loveritual.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#7D0633] text-xl mr-3">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Téléphone</h3>
                    <p className="text-gray-600">
                      +33 1 23 45 67 89
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#7D0633] text-xl mr-3">⏰</div>
                  <div>
                    <h3 className="font-bold text-gray-800">Horaires du service client</h3>
                    <p className="text-gray-600">
                      Du lundi au vendredi : 9h - 18h<br />
                      Samedi : 10h - 16h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#7D0633] mb-6">FAQ</h2>
              <p className="text-gray-600 mb-4">
                Vous avez une question ? Consultez notre FAQ pour trouver rapidement une réponse.
              </p>
              <a 
                href="/faq" 
                className="inline-block bg-[#7D0633] text-white px-4 py-2 rounded hover:bg-[#9A0E48] transition duration-300"
              >
                Consulter la FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}