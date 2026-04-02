import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs';
import { Image } from 'nextra/components';

const docsComponents = getDocsMDXComponents({
  img: Image,
});

export function useMDXComponents(
  components?: Record<string, React.ComponentType>
) {
  return {
    ...docsComponents,
    ...components,
  };
}
