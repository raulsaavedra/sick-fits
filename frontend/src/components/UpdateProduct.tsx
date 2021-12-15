import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdClose, MdReplay, MdSend } from 'react-icons/md';
import {
  useSingleProductQuery,
  useUpdateProductMutation,
} from '../../types/generated-queries';
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

type TInputs = {
  name: string;
  price: number | string;
  photo: FileList | string;
  description: string;
};
export default function UpdateProduct({ id }: { id: string }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TInputs>();

  const { data: dataSingle, loading: loadingSingle } = useSingleProductQuery({
    variables: { id },
    onCompleted: (data) => {
      if (data && data.product) {
        setValue('name', data.product.name ? data.product.name : '');
        setValue(
          'description',
          data.product.description ? data.product.description : ''
        );
        setValue('price', data.product.price ? data.product.price : '');
      }
    },
  });
  const [
    updateProduct,
    { loading: loadingUpdate, error: errorUpdate },
  ] = useUpdateProductMutation();
  const onSubmit = async (data: TInputs) => {
    const { name, price, description } = data;
    const photo = data.photo[0];
    const formattedPrice = parseInt(price.toString());
    const res = await updateProduct({
      variables: {
        id,
        name,
        price: formattedPrice,
        photo,
        description,
      },
    });
    if (res) {
      router.push('/');
    }
  };
  const resetForm = () => {
    if (dataSingle && dataSingle.product) {
      setValue('name', dataSingle.product.name ? dataSingle.product.name : '');
      setValue(
        'description',
        dataSingle.product.description ? dataSingle.product.description : ''
      );
      setValue(
        'price',
        dataSingle.product.price ? dataSingle.product.price : ''
      );
    }
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
