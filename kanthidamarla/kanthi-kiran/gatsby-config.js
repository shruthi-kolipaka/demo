import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
module.exports = {
  siteMetadata: {
    title: 'self',
    siteUrl: 'https://gatsby.index',
    description: 'my site',
  },
  plugins: [
    'gatsby-plugin-styled-components',

    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'k1mx6nk3',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
// export default {
//   siteMetadata:{
//     title:`mywebsite`,
//     siteUrl:'https://gatsby.index',
//     description:'my site',
//   }
// }
