export default function Connexion() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16 max-w-sm">
        <h1 className="text-3xl font-bold text-[#7D0633] mb-8 text-center">
          Connexion
        </h1>
        
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
              required 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7D0633]" 
              required 
            />
            <div className="mt-1 text-right">
              <a href="/mot-de-passe-oublie" className="text-sm text-[#7D0633] hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#7D0633] text-white py-2 px-4 rounded-md hover:bg-[#9A0E48] transition duration-300"
          >
            Se connecter
          </button>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Vous n'avez pas de compte ? <a href="/inscription" className="text-[#7D0633] hover:underline">S'inscrire</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}