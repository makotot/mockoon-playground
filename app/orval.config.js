module.exports = {
  petstore: {
    input: '../api/swagger.json',
    output: {
      target: './src/__generated__',
      client: 'swr',
      override: {
        mutator: {
          path: './src/api.ts',
          name: 'customInstance',
        },
      },
    },
  },
}
