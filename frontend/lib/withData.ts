import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import type { IncomingHttpHeaders } from 'http';
import { endpoint, prodEndpoint } from '../config';
import paginationField from './paginationField';
import { TypedTypePolicies } from '../types/generated-queries';

const productsTypePolicy: TypedTypePolicies = {
  products: paginationField(),
};
function createClient({
  headers,
  initialState,
}: {
  headers?: IncomingHttpHeaders | undefined;
  initialState?: any;
}) {
  return new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      (createUploadLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          credentials: 'include',
        },
        headers: {
          cookie: headers?.cookie,
        },
      }) as unknown) as ApolloLink,
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            ...productsTypePolicy,
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
