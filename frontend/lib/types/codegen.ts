import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type TAuthenticatedItem = TUser;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type TCloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']>;
  aspect_ratio?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  color_space?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  default_image?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['String']>;
  density?: InputMaybe<Scalars['String']>;
  dpr?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<Scalars['String']>;
  fetch_format?: InputMaybe<Scalars['String']>;
  flags?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  gravity?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  opacity?: InputMaybe<Scalars['String']>;
  overlay?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  transformation?: InputMaybe<Scalars['String']>;
  underlay?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['String']>;
  y?: InputMaybe<Scalars['String']>;
  zoom?: InputMaybe<Scalars['String']>;
};

export type TCloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mimetype?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type TCloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<TCloudinaryImageFormat>;
};

export type TCreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type TIdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<TIdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type TIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<TIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type TKeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<TKeystoneAdminUiListMeta>;
  lists: Array<TKeystoneAdminUiListMeta>;
};


export type TKeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type TKeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: TKeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<TKeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: TKeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<TQueryMode>;
  viewsIndex: Scalars['Int'];
};


export type TKeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TKeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: TKeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum TKeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type TKeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<TKeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum TKeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type TKeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: TKeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum TKeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type TKeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<TKeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<TKeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type TKeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: TKeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum TKeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type TKeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: TKeystoneAdminMeta;
};

export type TMutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<TUserAuthenticationWithPasswordResult>;
  createInitialUser: TUserAuthenticationWithPasswordSuccess;
  createProduct?: Maybe<TProduct>;
  createProductImage?: Maybe<TProductImage>;
  createProductImages?: Maybe<Array<Maybe<TProductImage>>>;
  createProducts?: Maybe<Array<Maybe<TProduct>>>;
  createUser?: Maybe<TUser>;
  createUsers?: Maybe<Array<Maybe<TUser>>>;
  deleteProduct?: Maybe<TProduct>;
  deleteProductImage?: Maybe<TProductImage>;
  deleteProductImages?: Maybe<Array<Maybe<TProductImage>>>;
  deleteProducts?: Maybe<Array<Maybe<TProduct>>>;
  deleteUser?: Maybe<TUser>;
  deleteUsers?: Maybe<Array<Maybe<TUser>>>;
  endSession: Scalars['Boolean'];
  updateProduct?: Maybe<TProduct>;
  updateProductImage?: Maybe<TProductImage>;
  updateProductImages?: Maybe<Array<Maybe<TProductImage>>>;
  updateProducts?: Maybe<Array<Maybe<TProduct>>>;
  updateUser?: Maybe<TUser>;
  updateUsers?: Maybe<Array<Maybe<TUser>>>;
};


export type TMutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type TMutationCreateInitialUserArgs = {
  data: TCreateInitialUserInput;
};


export type TMutationCreateProductArgs = {
  data: TProductCreateInput;
};


export type TMutationCreateProductImageArgs = {
  data: TProductImageCreateInput;
};


export type TMutationCreateProductImagesArgs = {
  data: Array<TProductImageCreateInput>;
};


export type TMutationCreateProductsArgs = {
  data: Array<TProductCreateInput>;
};


export type TMutationCreateUserArgs = {
  data: TUserCreateInput;
};


export type TMutationCreateUsersArgs = {
  data: Array<TUserCreateInput>;
};


export type TMutationDeleteProductArgs = {
  where: TProductWhereUniqueInput;
};


export type TMutationDeleteProductImageArgs = {
  where: TProductImageWhereUniqueInput;
};


export type TMutationDeleteProductImagesArgs = {
  where: Array<TProductImageWhereUniqueInput>;
};


export type TMutationDeleteProductsArgs = {
  where: Array<TProductWhereUniqueInput>;
};


export type TMutationDeleteUserArgs = {
  where: TUserWhereUniqueInput;
};


export type TMutationDeleteUsersArgs = {
  where: Array<TUserWhereUniqueInput>;
};


export type TMutationUpdateProductArgs = {
  data: TProductUpdateInput;
  where: TProductWhereUniqueInput;
};


export type TMutationUpdateProductImageArgs = {
  data: TProductImageUpdateInput;
  where: TProductImageWhereUniqueInput;
};


export type TMutationUpdateProductImagesArgs = {
  data: Array<TProductImageUpdateArgs>;
};


export type TMutationUpdateProductsArgs = {
  data: Array<TProductUpdateArgs>;
};


export type TMutationUpdateUserArgs = {
  data: TUserUpdateInput;
  where: TUserWhereUniqueInput;
};


export type TMutationUpdateUsersArgs = {
  data: Array<TUserUpdateArgs>;
};

export type TNestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<TNestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum TOrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type TPasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type TProduct = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<TProductImage>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type TProductCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<TProductImageRelateToOneForCreateInput>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type TProductImage = {
  __typename?: 'ProductImage';
  altText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<TCloudinaryImage_File>;
  product?: Maybe<TProduct>;
};

export type TProductImageCreateInput = {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  product?: InputMaybe<TProductRelateToOneForCreateInput>;
};

export type TProductImageOrderByInput = {
  altText?: InputMaybe<TOrderDirection>;
  id?: InputMaybe<TOrderDirection>;
};

export type TProductImageRelateToOneForCreateInput = {
  connect?: InputMaybe<TProductImageWhereUniqueInput>;
  create?: InputMaybe<TProductImageCreateInput>;
};

export type TProductImageRelateToOneForUpdateInput = {
  connect?: InputMaybe<TProductImageWhereUniqueInput>;
  create?: InputMaybe<TProductImageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type TProductImageUpdateArgs = {
  data: TProductImageUpdateInput;
  where: TProductImageWhereUniqueInput;
};

export type TProductImageUpdateInput = {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  product?: InputMaybe<TProductRelateToOneForUpdateInput>;
};

export type TProductImageWhereInput = {
  AND?: InputMaybe<Array<TProductImageWhereInput>>;
  NOT?: InputMaybe<Array<TProductImageWhereInput>>;
  OR?: InputMaybe<Array<TProductImageWhereInput>>;
  altText?: InputMaybe<TStringFilter>;
  id?: InputMaybe<TIdFilter>;
  product?: InputMaybe<TProductWhereInput>;
};

export type TProductImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TProductOrderByInput = {
  description?: InputMaybe<TOrderDirection>;
  id?: InputMaybe<TOrderDirection>;
  name?: InputMaybe<TOrderDirection>;
  price?: InputMaybe<TOrderDirection>;
  status?: InputMaybe<TOrderDirection>;
};

export type TProductRelateToOneForCreateInput = {
  connect?: InputMaybe<TProductWhereUniqueInput>;
  create?: InputMaybe<TProductCreateInput>;
};

export type TProductRelateToOneForUpdateInput = {
  connect?: InputMaybe<TProductWhereUniqueInput>;
  create?: InputMaybe<TProductCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type TProductUpdateArgs = {
  data: TProductUpdateInput;
  where: TProductWhereUniqueInput;
};

export type TProductUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<TProductImageRelateToOneForUpdateInput>;
  price?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type TProductWhereInput = {
  AND?: InputMaybe<Array<TProductWhereInput>>;
  NOT?: InputMaybe<Array<TProductWhereInput>>;
  OR?: InputMaybe<Array<TProductWhereInput>>;
  description?: InputMaybe<TStringFilter>;
  id?: InputMaybe<TIdFilter>;
  name?: InputMaybe<TStringFilter>;
  photo?: InputMaybe<TProductImageWhereInput>;
  price?: InputMaybe<TIntFilter>;
  status?: InputMaybe<TStringFilter>;
};

export type TProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQuery = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<TAuthenticatedItem>;
  keystone: TKeystoneMeta;
  product?: Maybe<TProduct>;
  productImage?: Maybe<TProductImage>;
  productImages?: Maybe<Array<TProductImage>>;
  productImagesCount?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<TProduct>>;
  productsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<TUser>;
  users?: Maybe<Array<TUser>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type TQueryProductArgs = {
  where: TProductWhereUniqueInput;
};


export type TQueryProductImageArgs = {
  where: TProductImageWhereUniqueInput;
};


export type TQueryProductImagesArgs = {
  orderBy?: Array<TProductImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TProductImageWhereInput;
};


export type TQueryProductImagesCountArgs = {
  where?: TProductImageWhereInput;
};


export type TQueryProductsArgs = {
  orderBy?: Array<TProductOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TProductWhereInput;
};


export type TQueryProductsCountArgs = {
  where?: TProductWhereInput;
};


export type TQueryUserArgs = {
  where: TUserWhereUniqueInput;
};


export type TQueryUsersArgs = {
  orderBy?: Array<TUserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TUserWhereInput;
};


export type TQueryUsersCountArgs = {
  where?: TUserWhereInput;
};

export enum TQueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type TStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<TQueryMode>;
  not?: InputMaybe<TNestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TUser = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<TPasswordState>;
};

export type TUserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type TUserAuthenticationWithPasswordResult = TUserAuthenticationWithPasswordFailure | TUserAuthenticationWithPasswordSuccess;

export type TUserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: TUser;
  sessionToken: Scalars['String'];
};

export type TUserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type TUserOrderByInput = {
  email?: InputMaybe<TOrderDirection>;
  id?: InputMaybe<TOrderDirection>;
  name?: InputMaybe<TOrderDirection>;
};

export type TUserUpdateArgs = {
  data: TUserUpdateInput;
  where: TUserWhereUniqueInput;
};

export type TUserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type TUserWhereInput = {
  AND?: InputMaybe<Array<TUserWhereInput>>;
  NOT?: InputMaybe<Array<TUserWhereInput>>;
  OR?: InputMaybe<Array<TUserWhereInput>>;
  email?: InputMaybe<TStringFilter>;
  id?: InputMaybe<TIdFilter>;
  name?: InputMaybe<TStringFilter>;
};

export type TUserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};
