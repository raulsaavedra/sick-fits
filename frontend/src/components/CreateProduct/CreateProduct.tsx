import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdClose, MdSend } from 'react-icons/md';
import { SButton } from '../Base/SButton';
import { SForm, SFormGradient, SFormGroup, SFormInput } from '../Base/SForm';
import { SContainer } from '../Base/SLayout';
import { SFormLabel, SIcon } from '../Base/STypography';

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
  const { register, handleSubmit, reset, setValue } = useForm<TInputs>({
    defaultValues: {
      name: 'Nice Shoes',
      price: 100,
      photo: '',
      description: 'so niiiicee',
    },
  });
  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT_MUTATION);
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
    console.log(res);
  };
  const clearForm = () => {
    setValue('name', '');
    setValue('price', '');
  };
  return (
    <SContainer>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset aria-busy={loading} aria-disabled={loading}>
          <SFormGradient />
          <SFormGroup>
            <SFormLabel htmlFor="name">Photo</SFormLabel>
            <SFormInput
              type="file"
              disabled={loading}
              {...register('photo', { required: true })}
            />
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="name">Name</SFormLabel>
            <SFormInput
              type="text"
              {...register('name', { required: true })}
              disabled={loading}
            />
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="price">Price</SFormLabel>
            <SFormInput
              type="number"
              disabled={loading}
              {...register('price', { required: true, min: 0 })}
            />
          </SFormGroup>
          <SFormGroup>
            <SFormLabel htmlFor="description">Description</SFormLabel>
            <SFormInput
              type="text"
              disabled={loading}
              {...register('description', { required: true })}
            />
          </SFormGroup>
          <SFormGroup css={{ display: 'flex', flexWrap: 'wrap' }}>
            <SButton type="button" onClick={(e) => reset()} disabled={loading}>
              <SIcon>
                <MdClose />
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
