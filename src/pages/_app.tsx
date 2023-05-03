import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TodoProvider } from "@/contexts";

/**
 * App component
 * @param {Object} props - App props
 * @param {React.ComponentType} props.Component - Next.js component to render
 * @param {Object} props.pageProps - Next.js page props
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}
