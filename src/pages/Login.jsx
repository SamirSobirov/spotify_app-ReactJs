
export default function Login(params) {
    const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT
    const client_id = import.meta.env.VITE_CLIENT_ID
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI
    const RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE

    let url = `${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`

    return (
        <div className="flex justify-center items-center h-screen bg-black-900 bg-[url('https://wallpapers.com/images/high/spotify-background-6dqfrop4arcronbn.webp')] bg-no-repeat bg-cover bg-center">
      <form className="w-1/3 bg-gray-300 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign up for Spotify</h2>
        <div className="mb-4">
          <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
            <a href={url}>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
          </a>
        </div>
        <p className="text-sm text-gray-600">
          By clicking Sign Up, you agree to our{' '}
          <a className="text-blue-500 hover:text-blue-700" href="#">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="text-blue-500 hover:text-blue-700" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
    )
}