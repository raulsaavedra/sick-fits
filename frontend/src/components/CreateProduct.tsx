import { useMutation } from '@apollo/client';
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
import {
  refetchProductsCountQuery,
  refetchProductsQuery,
  useCreateProductMutation,
} from '../../types/generated-queries';

type TInputs = {
  name: string;
  price: number | string;
  photo: FileList | string;
  description: string;
};

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
  const [createProduct, { loading, error }] = useCreateProductMutation({
    refetchQueries: [refetchProductsQuery(), refetchProductsCountQuery()],
  });
  const onSubmit = async (data: TInputs) => {
    const { name, price, description } = data;
    const photo = data.photo[0];
    const formattedPrice = parseInt(price.toString());
    const res = await createProduct({
      variables: {
        name,
        price: formattedPrice,
        photo,
        description,
      },
    });
    if (res && res.data && res.data.createProduct) {
      // go to the product page
      router.push(`/product/${res.data.createProduct.id}`);
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
