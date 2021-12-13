import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdClose, MdReplay, MdSend } from 'react-icons/md';
import { useRouter } from 'next/router';
import { SButton } from './Base/SButton';
import {
  SForm,
  SFormError,
  SFormGradient,
  SFormGroup,
  SFormInput,
} from './Base/SForm';
import { SContainer } from './Base/SLayout';
import { SFormLabel, SHeadingSecondary, SIcon } from './Base/STypography';
import DisplayError from './Error';
import { ALL_PRODUCTS_QUERY } from './Products';

interface TInputs {
  name: string;
  price: number | string;
  photo: FileList | string;
  description: string;
}
const CREATE_PRODUCT_MUTATION = gql`
  mutation createProduct(
    $name: String!
    $price: Int!
    $photo: Upload!
    $description: String!
  ) {
    createProduct(
      data: {
        name: $name
        price: $price
        photo: { create: { image: $photo, altText: $name } }
        description: $description
      }
    ) {
      id
      name
      price
      photo {
        image {
          encoding
          publicUrl
          publicUrlTransformed
        }
      }
      description
    }
  }
`;

export default function CreateProduct() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TInputs>({
    defaultValues: {
      name: 'Nice Shoes',
      price: 100,
      photo: '',
      description: 'so niiiicee',
    },
  });
  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
  const onSubmit = async (data: TInputs) => {
    const { name, price, description } = data;
    const photo = data.photo[0];
    const res = await createProduct({
      variables: {
        name,
        price,
        photo,
        description,
      },
    });
    if (res) {
      router.push('/');
    }
  };
  const clearForm = () => {
    setValue('name', '');
    setValue('description', '');
    setValue('price', '');
  };
  return (
    <SContainer>
      <SHeadingSecondary>Create Product</SHeadingSecondary>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset aria-busy={loading} aria-disabled={loading}>
          <SFormGradient />
          <SFormGroup>
            <DisplayError error={error} />
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="name">Photo</SFormLabel>
            <SFormInput
              type="file"
              disabled={loading}
              {...register('photo', { required: true })}
            />
            {errors.photo && <SFormError>This field is required</SFormError>}
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="name">Name</SFormLabel>
            <SFormInput
              type="text"
              {...register('name', { required: true })}
              disabled={loading}
            />
            {errors.name && <SFormError>This field is required</SFormError>}
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="price">Price</SFormLabel>
            <SFormInput
              type="number"
              disabled={loading}
              {...register('price', { required: true, min: 0 })}
            />
            {errors.price && <SFormError>This field is required</SFormError>}
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="description">Description</SFormLabel>
            <SFormInput
              type="text"
              disabled={loading}
              {...register('description', { required: true })}
            />
            {errors.description && (
              <SFormError>This field is required</SFormError>
            )}
          </SFormGroup>
          <SFormGroup css={{ display: 'flex', flexWrap: 'wrap' }}>
            <SButton type="button" onClick={(e) => reset()} disabled={loading}>
              <SIcon>
                <MdReplay />
              </SIcon>
              Reset Form
            </SButton>
            <SButton
              type="button"
              onClick={(e) => clearForm()}
              disabled={loading}
            >
              <SIcon>
                <MdClose />
              </SIcon>
              Clear Form
            </SButton>
          </SFormGroup>
          <SFormGroup>
            <SButton type="submit" disabled={loading}>
              <SIcon>
                <MdSend />
              </SIcon>
              Submit Form
            </SButton>
          </SFormGroup>
        </fieldset>
      </SForm>
    </SContainer>
  );
}
