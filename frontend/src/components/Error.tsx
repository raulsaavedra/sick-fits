import { ApolloError } from '@apollo/client';
import { TUserAuthenticationWithPasswordFailure } from '../../types/types';
import { styled } from '../stitches';

const SError = styled('div', {
  padding: '2rem',
  background: 'white',
  margin: '2rem 0',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  borderLeft: '5px solid red',
  p: {
    margin: 0,
    fontWeight: '100',
  },
  strong: {
    marginRight: '1rem',
  },
});

type DisplayErrorProps = {
  error: ApolloError | TUserAuthenticationWithPasswordFailure | undefined;
};

const DisplayError = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null;

  return (
    <SError>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </SError>
  );
};

export default DisplayError;
