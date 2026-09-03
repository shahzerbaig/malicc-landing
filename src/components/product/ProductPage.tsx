import ProductHero, {
  ProductHeroData,
} from "./ProductHero";

import ProductProblem, {
  ProductProblemData,
} from "./ProductProblem";

import ProductFeatures, {
  ProductFeaturesData,
} from "./ProductFeatures";

import ProductHowItWorks, {
  ProductHowItWorksData,
} from "./ProductHowItWorks";

import ProductAudience, {
  ProductAudienceData,
} from "./ProductAudience";

import ProductCTA, {
  ProductCTAData,
} from "./ProductCTA";

export type ProductPageData = {
  hero: ProductHeroData;
  problem: ProductProblemData;
  features: ProductFeaturesData;
  howItWorks: ProductHowItWorksData;
  audience: ProductAudienceData;
  cta: ProductCTAData;
};

type ProductPageProps = {
  product: ProductPageData;
};

export default function ProductPage({
  product,
}: ProductPageProps) {
  return (
    <>
      <ProductHero data={product.hero} />

      <ProductProblem data={product.problem} />

      <ProductFeatures data={product.features} />

      <ProductHowItWorks data={product.howItWorks} />

      <ProductAudience data={product.audience} />

      <ProductCTA data={product.cta} />
    </>
  );
}