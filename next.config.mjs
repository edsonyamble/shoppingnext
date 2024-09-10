/** @type {import('next').NextConfig} */
const nextConfig = {
  //work env file
	env: {
		APP_ENV: process.env.APP_ENV,
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL,
		APP_DOMAIN: process.env.APP_DOMAIN
	},
  //image  с сторону сервиси 
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.yandex.net'
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com'
			}
		]
	},
  //функция для загружение картинке из сервере
  async rewrites() {
    return [
        {
            source: '/uploads/:path*',
            destination: `${process.env.SERVER_URL}/uploads/:path*`,
        },
    ]
}
}

export default nextConfig
