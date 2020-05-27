const proxy = [
    {
      context: '/',
      target: 'https://master.d3qclgvy5otrt5.amplifyapp.com',
      pathRewrite: {'^/' : ''}
    }
  ];
  module.exports = proxy;