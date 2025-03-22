export default function Connexion() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-16 max-w-md">
        <h1 className="text-4xl font-bold text-[#7D0633] mb-8 text-center">
          Connexion
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
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
                placeholder="Votre mot de passe"
                required
              />
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-600">Se souvenir de moi</label>
              </div>
              <a href="/mot-de-passe-oublie" className="text-[#7D0633] hover:underline">Mot de passe oublié ?</a>
            </div>
            
            <button type="submit" className="w-full bg-[#7D0633] text-white py-3 rounded-lg hover:bg-[#66052A] transition-colors">
              Se connecter
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Pas encore de compte ? <a href="/inscription" className="text-[#7D0633] hover:underline">S&apos;inscrire</a>
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">Ou connectez-vous avec</p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center justify-center gap-2 bg-[#4267B2] text-white py-2 px-4 rounded-lg hover:bg-[#3b5998] transition-colors w-full">
                <span className="text-xl">f</span>
                <span>Facebook</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#DB4437] text-white py-2 px-4 rounded-lg hover:bg-[#c53929] transition-colors w-full">
                <span className="text-xl">G</span>
                <span>Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}