export default function (context) {
    return {
        httpEndpoint: 'https://graphql.datocms.com',
        getAuth: () => process.env.datocmsApiKey,
    }
}