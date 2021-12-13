import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdClose, MdReplay, MdSend } from 'react-icons/md';
import { SButton } from './Base/SButton';
import {
  SForm,
  SFormError,
  SFormGradient,
  SFormGroup,
  SFormInput,
} from './Base/SForm';
import { SContainer } from './Base/SLayout';
import {
  SFormLabel,
  SHeadingSecondary,
  SIcon,
  SText,
} from './Base/STypography';
import DisplayError from './Error';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;
const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String!
    $description: String!
    $price: Int!
    $photo: Upload!
  ) {
    updateProduct(
      where: { id: $id }
      data: {
        name: $name
        description: $description
        price: $price
        photo: { create: { image: $photo, altText: $name } }
      }
    ) {
      id
      name
      description
      price
    }
  }
`;
interface TInputs {
  name: string;
  price: number | string;
  photo: FileList | string;
  description: string;
}
export default function UpdateProduct({ id }: { id: string }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TInputs>();

  const { data: dataSingle, loading: loadingSingle } = useQuery(
    SINGLE_PRODUCT_QUERY,
    {
      variables: { id },
      onCompleted: (data) => {
        if (data && data.product) {
          setValue('name', data.product.name);
          setValue('description', data.product.description);
          setValue('price', data.product.price);
        }
      },
    }
  );
  const [
    updateProduct,
    { loading: loadingUpdate, error: errorUpdate },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);
  const onSubmit = async (data: TInputs) => {
    const { name, price, description } = data;
    const photo = data.photo[0];
    const res = await updateProduct({
      variables: {
        id,
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
  const resetForm = () => {
    setValue(
      'name',
      dataSingle && dataSingle.product ? dataSingle.product.name : ''
    );
    setValue(
      'description',
      dataSingle && dataSingle.product ? dataSingle.product.description : ''
    );
    setValue(
      'price',
      dataSingle && dataSingle.product ? dataSingle.product.price : ''
    );
  };
  const clearForm = () => {
    setValue('name', '');
    setValue('description', '');
    setValue('price', '');
  };
  return (
    <SContainer>
      <SHeadingSecondary>Edit Product</SHeadingSecondary>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset
          aria-busy={loadingUpdate || loadingSingle}
          aria-disabled={loadingUpdate || loadingSingle}
        >
          <SFormGradient />
          <SFormGroup>
            <DisplayError error={errorUpdate} />
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="name">Photo</SFormLabel>
            <SFormInput
              type="file"
              disabled={loadingUpdate || loadingSingle}
              {...register('photo', { required: true })}
            />
            {errors.photo && <SFormError>This field is required</SFormError>}
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="name">Name</SFormLabel>
            <SFormInput
              type="text"
              {...register('name', { required: true })}
              disabled={loadingUpdate || loadingSingle}
            />
            {errors.name && <SFormError>This field is required</SFormError>}
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="price">Price</SFormLabel>
            <SFormInput
              type="number"
              disabled={loadingUpdate || loadingSingle}
              {...register('price', { required: true, min: 0 })}
            />
            {errors.price && <SFormError>This field is required</SFormError>}
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="description">Description</SFormLabel>
            <SFormInput
              type="text"
              disabled={loadingUpdate || loadingSingle}
              {...register('description', { required: true })}
            />
            {errors.description && (
              <SFormError>This field is required</SFormError>
            )}
          </SFormGroup>
          <SFormGroup css={{ display: 'flex', flexWrap: 'wrap' }}>
            <SButton
              type="button"
              onClick={(e) => resetForm()}
              disabled={loadingUpdate || loadingSingle}
            >
              <SIcon>
                <MdReplay />
              </SIcon>
              Reset Form
            </SButton>
            <SButton
              type="button"
              onClick={(e) => clearForm()}
              disabled={loadingUpdate || loadingSingle}
            >
              <SIcon>
                <MdClose />
              </SIcon>
              Clear Form
            </SButton>
          </SFormGroup>
          <SFormGroup>
            <SButton type="submit" disabled={loadingUpdate || loadingSingle}>
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
