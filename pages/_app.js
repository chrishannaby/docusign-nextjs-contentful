function MyApp({ Component, pageProps }) {
  return (
    <>
      <div data-netlify-identity-button>Login with Netlify Identity</div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
