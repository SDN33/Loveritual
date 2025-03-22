export default function Inscription() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16 max-w-md">
        <h1 className="text-3xl font-bold text-[#7D0633] mb-8 text-center">
          Créer un compte
        </h1>
        
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">Prénom</label>
            <input 
              type="text" 
              id="firstName" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Nom</label>
            <input 
              type="text" 
              id="lastName" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
              required 
            />
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
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
              required 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirmer le mot de passe</label>
            <input 
              type="password" 
              id="confirmPassword" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
              required 
            />
          </div>
          
          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span className="text-sm text-gray-600 ml-2">
                J'accepte les <a href="/cgv" className="text-[#7D0633] hover:underline">conditions générales de vente</a> et la <a href="/confidentialite" className="text-[#7D0633] hover:underline">politique de confidentialité</a>
              </span>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#7D0633] text-white py-2 px-4 rounded-md hover:bg-[#9A0E48] transition duration-300"
          >
            S'inscrire
          </button>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Vous avez déjà un compte ? <a href="/connexion" className="text-[#7D0633] hover:underline">Se connecter</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}