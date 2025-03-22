export default function Inscription() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16 max-w-md">
        <h1 className="text-4xl font-bold text-[#7D0633] mb-8 text-center">
          Créer un compte
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-2">Prénom</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                  placeholder="Votre prénom"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-2">Nom</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                  placeholder="Votre nom"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">Mot de passe</label>
              <input 
                type="password" 
                id="password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                placeholder="Créez votre mot de passe"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum 8 caractères, dont une majuscule et un chiffre
              </p>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirmer le mot de passe</label>
              <input 
                type="password" 
                id="confirmPassword" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
                placeholder="Confirmez votre mot de passe"
                required
              />
            </div>
            
            <div className="flex items-start">
              <input type="checkbox" id="terms" className="mt-1 mr-2" required />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                J&apos;accepte les <a href="/cgv" className="text-[#7D0633] hover:underline">conditions générales de vente</a> et la <a href="/confidentialite" className="text-[#7D0633] hover:underline">politique de confidentialité</a>
              </label>
            </div>
            
            <div className="flex items-start">
              <input type="checkbox" id="newsletter" className="mt-1 mr-2" />
              <label htmlFor="newsletter" className="text-gray-600 text-sm">
                J&apos;accepte de recevoir la newsletter et les offres de LoveRitual
              </label>
            </div>
            
            <button type="submit" className="w-full bg-[#7D0633] text-white py-3 rounded-lg hover:bg-[#66052A] transition-colors">
              Créer mon compte
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Déjà un compte ? <a href="/connexion" className="text-[#7D0633] hover:underline">Se connecter</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}