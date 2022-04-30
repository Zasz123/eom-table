import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import "@styles/_globals.scss";
import "@styles/_reset.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
