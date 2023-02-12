import { ReviewsProvider } from "./ReviewsContext";
import { ShopsProvider } from "./ShopsContext";

const ContextsProvider = ({ children }) => {
  return (
    <ShopsProvider>
      <ReviewsProvider>{children}</ReviewsProvider>
    </ShopsProvider>
  );
};

export default ContextsProvider;
