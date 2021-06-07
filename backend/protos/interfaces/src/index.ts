import * as grpc      from 'grpc'
import { Observable } from 'rxjs'
/** Namespace common. */
export namespace common {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {}

  /** Builder for an RPC service server. */
  export interface ServerBuilder {}

  /** Properties of an Empty. */
  export interface Empty {}

  /** Properties of a Pager. */
  export interface Pager {
    /** Pager take */
    take?: number | null

    /** Pager offset */
    offset?: number | null
  }

  /** Properties of an Order. */
  export interface Order {
    /** Order by */
    by?: string | null

    /** Order direction */
    direction?: string | null
  }

  /** Properties of a PageInfo. */
  export interface PageInfo {
    /** PageInfo hasNext */
    hasNext?: boolean | null
  }
}

/** Namespace catalog. */
export namespace catalog {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the CatalogService service client.
     */
    getCatalogService(): catalog.CatalogService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a CatalogService service implementation.
     * @param impl CatalogService service implementation
     */
    addCatalogService(impl: catalog.CatalogService): catalog.ServerBuilder
  }

  /** Constructs a new CatalogService service. */
  export interface CatalogService {
    /**
     * Calls getCategoryGroups.
     * @param request GetCategoryGroupsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getCategoryGroups(
      request: catalog.GetCategoryGroupsRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.GetCategoryGroupsResponse>

    /**
     * Calls getCategories.
     * @param request GetCategoriesRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getCategories(
      request: catalog.GetCategoriesRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.GetCategoriesResponse>

    /**
     * Calls createCategoryGroup.
     * @param request CreateCategoryGroupRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createCategoryGroup(
      request: catalog.CreateCategoryGroupRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.CreateCategoryGroupResponse>

    /**
     * Calls updateCategoryGroup.
     * @param request UpdateCategoryGroupRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateCategoryGroup(
      request: catalog.UpdateCategoryGroupRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.UpdateCategoryGroupResponse>

    /**
     * Calls deleteCategoryGroup.
     * @param request DeleteCategoryGroupRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    deleteCategoryGroup(
      request: catalog.DeleteCategoryGroupRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.DeleteCategoryGroupResponse>

    /**
     * Calls createCategory.
     * @param request CreateCategoryRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createCategory(
      request: catalog.CreateCategoryRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.CreateCategoryResponse>

    /**
     * Calls updateCategory.
     * @param request UpdateCategoryRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateCategory(
      request: catalog.UpdateCategoryRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.UpdateCategoryResponse>

    /**
     * Calls deleteCategory.
     * @param request DeleteCategoryRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    deleteCategory(
      request: catalog.DeleteCategoryRequest,
      metadata?: grpc.Metadata
    ): Observable<catalog.DeleteCategoryResponse>
  }

  /** Properties of a Category. */
  export interface Category {
    /** Category id */
    id?: string | null

    /** Category name */
    name?: string | null
  }

  /** Properties of a CategoryGroup. */
  export interface CategoryGroup {
    /** CategoryGroup id */
    id?: string | null

    /** CategoryGroup name */
    name?: string | null

    /** CategoryGroup children */
    children?: catalog.Category[] | null
  }

  /** Properties of a CategoryGroupsFilter. */
  export interface CategoryGroupsFilter {
    /** CategoryGroupsFilter id */
    id?: string[] | null

    /** CategoryGroupsFilter search */
    search?: string | null
  }

  /** Properties of a GetCategoryGroupsRequest. */
  export interface GetCategoryGroupsRequest {
    /** GetCategoryGroupsRequest pager */
    pager?: common.Pager | null

    /** GetCategoryGroupsRequest order */
    order?: common.Order | null

    /** GetCategoryGroupsRequest filters */
    filters?: catalog.CategoryGroupsFilter | null
  }

  /** Properties of a GetCategoryGroupsResponse. */
  export interface GetCategoryGroupsResponse {
    /** GetCategoryGroupsResponse rows */
    rows?: catalog.CategoryGroup[] | null

    /** GetCategoryGroupsResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a CategoriesFilter. */
  export interface CategoriesFilter {
    /** CategoriesFilter id */
    id?: string[] | null

    /** CategoriesFilter search */
    search?: string | null
  }

  /** Properties of a GetCategoriesRequest. */
  export interface GetCategoriesRequest {
    /** GetCategoriesRequest pager */
    pager?: common.Pager | null

    /** GetCategoriesRequest order */
    order?: common.Order | null

    /** GetCategoriesRequest filters */
    filters?: catalog.CategoriesFilter | null
  }

  /** Properties of a GetCategoriesResponse. */
  export interface GetCategoriesResponse {
    /** GetCategoriesResponse rows */
    rows?: catalog.Category[] | null

    /** GetCategoriesResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a CreateCategoryGroupRequest. */
  export interface CreateCategoryGroupRequest {
    /** CreateCategoryGroupRequest name */
    name?: string | null
  }

  /** Properties of a CreateCategoryGroupErrors. */
  export interface CreateCategoryGroupErrors {
    /** CreateCategoryGroupErrors name */
    name?: string | null
  }

  /** Properties of a CreateCategoryGroupResponse. */
  export interface CreateCategoryGroupResponse {
    /** CreateCategoryGroupResponse errors */
    errors?: catalog.CreateCategoryGroupErrors | null

    /** CreateCategoryGroupResponse result */
    result?: catalog.CategoryGroup | null
  }

  /** Properties of an UpdateCategoryGroupRequest. */
  export interface UpdateCategoryGroupRequest {
    /** UpdateCategoryGroupRequest id */
    id?: string | null

    /** UpdateCategoryGroupRequest name */
    name?: string | null
  }

  /** Properties of an UpdateCategoryGroupErrors. */
  export interface UpdateCategoryGroupErrors {
    /** UpdateCategoryGroupErrors id */
    id?: string | null

    /** UpdateCategoryGroupErrors name */
    name?: string | null
  }

  /** Properties of an UpdateCategoryGroupResponse. */
  export interface UpdateCategoryGroupResponse {
    /** UpdateCategoryGroupResponse errors */
    errors?: catalog.UpdateCategoryGroupErrors | null

    /** UpdateCategoryGroupResponse result */
    result?: catalog.CategoryGroup | null
  }

  /** Properties of a DeleteCategoryGroupRequest. */
  export interface DeleteCategoryGroupRequest {
    /** DeleteCategoryGroupRequest id */
    id?: string | null
  }

  /** Properties of a DeleteCategoryGroupErrors. */
  export interface DeleteCategoryGroupErrors {
    /** DeleteCategoryGroupErrors id */
    id?: string | null
  }

  /** Properties of a DeleteCategoryGroupResponse. */
  export interface DeleteCategoryGroupResponse {
    /** DeleteCategoryGroupResponse errors */
    errors?: catalog.DeleteCategoryGroupErrors | null
  }

  /** Properties of a CreateCategoryRequest. */
  export interface CreateCategoryRequest {
    /** CreateCategoryRequest name */
    name?: string | null

    /** CreateCategoryRequest groupId */
    groupId?: string | null
  }

  /** Properties of a CreateCategoryErrors. */
  export interface CreateCategoryErrors {
    /** CreateCategoryErrors name */
    name?: string | null

    /** CreateCategoryErrors groupId */
    groupId?: string | null
  }

  /** Properties of a CreateCategoryResponse. */
  export interface CreateCategoryResponse {
    /** CreateCategoryResponse errors */
    errors?: catalog.CreateCategoryErrors | null

    /** CreateCategoryResponse result */
    result?: catalog.Category | null
  }

  /** Properties of an UpdateCategoryRequest. */
  export interface UpdateCategoryRequest {
    /** UpdateCategoryRequest id */
    id?: string | null

    /** UpdateCategoryRequest name */
    name?: string | null
  }

  /** Properties of an UpdateCategoryErrors. */
  export interface UpdateCategoryErrors {
    /** UpdateCategoryErrors id */
    id?: string | null

    /** UpdateCategoryErrors name */
    name?: string | null
  }

  /** Properties of an UpdateCategoryResponse. */
  export interface UpdateCategoryResponse {
    /** UpdateCategoryResponse errors */
    errors?: catalog.UpdateCategoryErrors | null

    /** UpdateCategoryResponse result */
    result?: catalog.Category | null
  }

  /** Properties of a DeleteCategoryRequest. */
  export interface DeleteCategoryRequest {
    /** DeleteCategoryRequest id */
    id?: string | null
  }

  /** Properties of a DeleteCategoryErrors. */
  export interface DeleteCategoryErrors {
    /** DeleteCategoryErrors id */
    id?: string | null
  }

  /** Properties of a DeleteCategoryResponse. */
  export interface DeleteCategoryResponse {
    /** DeleteCategoryResponse errors */
    errors?: catalog.DeleteCategoryErrors | null
  }
}

/** Namespace mailer. */
export namespace mailer {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the MailerService service client.
     */
    getMailerService(): mailer.MailerService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a MailerService service implementation.
     * @param impl MailerService service implementation
     */
    addMailerService(impl: mailer.MailerService): mailer.ServerBuilder
  }

  /** Constructs a new MailerService service. */
  export interface MailerService {
    /**
     * Calls getSending.
     * @param request getSendingRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getSending(
      request: mailer.getSendingRequest,
      metadata?: grpc.Metadata
    ): Observable<mailer.Sending>
  }

  /** Properties of a Sending. */
  export interface Sending {
    /** Sending id */
    id?: string | null

    /** Sending template */
    template?: string | null

    /** Sending payload */
    payload?: string | null
  }

  /** Properties of a getSendingRequest. */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface getSendingRequest {
    /** getSendingRequest id */
    id?: string | null
  }
}

/** Namespace identity. */
export namespace identity {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the IdentityService service client.
     */
    getIdentityService(): identity.IdentityService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a IdentityService service implementation.
     * @param impl IdentityService service implementation
     */
    addIdentityService(impl: identity.IdentityService): identity.ServerBuilder
  }

  /** Constructs a new IdentityService service. */
  export interface IdentityService {
    /**
     * Calls register.
     * @param request RegisterRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    register(
      request: identity.RegisterRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.RegisterResponse>

    /**
     * Calls authenticate.
     * @param request AuthenticateRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    authenticate(
      request: identity.AuthenticateRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.AuthenticateResponse>

    /**
     * Calls verifyEmail.
     * @param request VerifyEmailRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    verifyEmail(
      request: identity.VerifyEmailRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.VerifyEmailResponse>

    /**
     * Calls resetPassword.
     * @param request ResetPasswordRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    resetPassword(
      request: identity.ResetPasswordRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.ResetPasswordResponse>

    /**
     * Calls changePassword.
     * @param request ChangePasswordRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    changePassword(
      request: identity.ChangePasswordRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.ChangePasswordResponse>

    /**
     * Calls createProfile.
     * @param request CreateProfileRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createProfile(
      request: identity.CreateProfileRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.CreateProfileResponse>

    /**
     * Calls getUsers.
     * @param request GetUsersRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getUsers(
      request: identity.GetUsersRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.GetUsersResponse>

    /**
     * Calls updateProfile.
     * @param request UpdateProfileRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateProfile(
      request: identity.UpdateProfileRequest,
      metadata?: grpc.Metadata
    ): Observable<identity.UpdateProfileResponse>
  }

  /** Properties of an Email. */
  export interface Email {
    /** Email address */
    address?: string | null

    /** Email verified */
    verified?: boolean | null
  }

  /** Properties of a PersonalInformation. */
  export interface PersonalInformation {
    /** PersonalInformation firstName */
    firstName?: string | null

    /** PersonalInformation lastName */
    lastName?: string | null
  }

  /** Properties of a Phone. */
  export interface Phone {
    /** Phone number */
    number?: string | null
  }

  /** Properties of an Address. */
  export interface Address {
    /** Address formatted */
    formatted?: string | null
  }

  /** Properties of a ContactInformation. */
  export interface ContactInformation {
    /** ContactInformation phone */
    phone?: identity.Phone | null
  }

  /** Properties of a Photo. */
  export interface Photo {
    /** Photo id */
    id?: string | null
  }

  /** Properties of a Profile. */
  export interface Profile {
    /** Profile type */
    type?: string | null

    /** Profile photo */
    photo?: identity.Photo | null

    /** Profile personalInformation */
    personalInformation?: identity.PersonalInformation | null

    /** Profile contactInformation */
    contactInformation?: identity.ContactInformation | null

    /** Profile address */
    address?: identity.Address | null

    /** Profile website */
    website?: string | null
  }

  /** Properties of a User. */
  export interface User {
    /** User id */
    id?: string | null

    /** User email */
    email?: identity.Email | null

    /** User profile */
    profile?: identity.Profile | null
  }

  /** Properties of a VerifyEmailRequest. */
  export interface VerifyEmailRequest {
    /** VerifyEmailRequest token */
    token?: string | null
  }

  /** Properties of a VerifyEmailErrors. */
  export interface VerifyEmailErrors {
    /** VerifyEmailErrors token */
    token?: string | null
  }

  /** Properties of a VerifyEmailResponse. */
  export interface VerifyEmailResponse {
    /** VerifyEmailResponse errors */
    errors?: identity.VerifyEmailErrors | null

    /** VerifyEmailResponse result */
    result?: identity.User | null
  }

  /** Properties of a RegisterRequest. */
  export interface RegisterRequest {
    /** RegisterRequest email */
    email?: string | null

    /** RegisterRequest password */
    password?: string | null

    /** RegisterRequest confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a RegisterErrors. */
  export interface RegisterErrors {
    /** RegisterErrors email */
    email?: string | null

    /** RegisterErrors password */
    password?: string | null

    /** RegisterErrors confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a RegisterResponse. */
  export interface RegisterResponse {
    /** RegisterResponse errors */
    errors?: identity.RegisterErrors | null

    /** RegisterResponse result */
    result?: identity.User | null
  }

  /** Properties of an AuthenticateRequest. */
  export interface AuthenticateRequest {
    /** AuthenticateRequest email */
    email?: string | null

    /** AuthenticateRequest password */
    password?: string | null
  }

  /** Properties of an AuthenticateErrors. */
  export interface AuthenticateErrors {
    /** AuthenticateErrors email */
    email?: string | null

    /** AuthenticateErrors password */
    password?: string | null
  }

  /** Properties of an AuthenticateResponse. */
  export interface AuthenticateResponse {
    /** AuthenticateResponse errors */
    errors?: identity.AuthenticateErrors | null

    /** AuthenticateResponse result */
    result?: identity.User | null
  }

  /** Properties of a ResetPasswordRequest. */
  export interface ResetPasswordRequest {
    /** ResetPasswordRequest email */
    email?: string | null
  }

  /** Properties of a ResetPasswordErrors. */
  export interface ResetPasswordErrors {
    /** ResetPasswordErrors email */
    email?: string | null
  }

  /** Properties of a ResetPasswordResponse. */
  export interface ResetPasswordResponse {
    /** ResetPasswordResponse errors */
    errors?: identity.ResetPasswordErrors | null
  }

  /** Properties of a ChangePasswordRequest. */
  export interface ChangePasswordRequest {
    /** ChangePasswordRequest token */
    token?: string | null

    /** ChangePasswordRequest password */
    password?: string | null

    /** ChangePasswordRequest confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a ChangePasswordErrors. */
  export interface ChangePasswordErrors {
    /** ChangePasswordErrors token */
    token?: string | null

    /** ChangePasswordErrors password */
    password?: string | null

    /** ChangePasswordErrors confirmPassword */
    confirmPassword?: string | null
  }

  /** Properties of a ChangePasswordResponse. */
  export interface ChangePasswordResponse {
    /** ChangePasswordResponse errors */
    errors?: identity.ChangePasswordErrors | null

    /** ChangePasswordResponse result */
    result?: identity.User | null
  }

  /** Properties of a CreateProfileRequest. */
  export interface CreateProfileRequest {
    /** CreateProfileRequest id */
    id?: string | null

    /** CreateProfileRequest type */
    type?: string | null

    /** CreateProfileRequest firstName */
    firstName?: string | null

    /** CreateProfileRequest lastName */
    lastName?: string | null
  }

  /** Properties of a CreateProfileErrors. */
  export interface CreateProfileErrors {
    /** CreateProfileErrors id */
    id?: string | null

    /** CreateProfileErrors type */
    type?: string | null

    /** CreateProfileErrors firstName */
    firstName?: string | null

    /** CreateProfileErrors lastName */
    lastName?: string | null
  }

  /** Properties of a CreateProfileResponse. */
  export interface CreateProfileResponse {
    /** CreateProfileResponse errors */
    errors?: identity.CreateProfileErrors | null

    /** CreateProfileResponse result */
    result?: identity.User | null
  }

  /** Properties of a UsersFilter. */
  export interface UsersFilter {
    /** UsersFilter id */
    id?: string[] | null
  }

  /** Properties of a GetUsersRequest. */
  export interface GetUsersRequest {
    /** GetUsersRequest pager */
    pager?: common.Pager | null

    /** GetUsersRequest order */
    order?: common.Order | null

    /** GetUsersRequest filters */
    filters?: identity.UsersFilter | null
  }

  /** Properties of a GetUsersResponse. */
  export interface GetUsersResponse {
    /** GetUsersResponse rows */
    rows?: identity.User[] | null

    /** GetUsersResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of an UpdateProfileRequest. */
  export interface UpdateProfileRequest {
    /** UpdateProfileRequest id */
    id?: string | null

    /** UpdateProfileRequest firstName */
    firstName?: string | null

    /** UpdateProfileRequest lastName */
    lastName?: string | null

    /** UpdateProfileRequest phone */
    phone?: string | null

    /** UpdateProfileRequest photoId */
    photoId?: string | null

    /** UpdateProfileRequest address */
    address?: string | null

    /** UpdateProfileRequest website */
    website?: string | null
  }

  /** Properties of an UpdateProfileErrors. */
  export interface UpdateProfileErrors {
    /** UpdateProfileErrors id */
    id?: string | null

    /** UpdateProfileErrors firstName */
    firstName?: string | null

    /** UpdateProfileErrors lastName */
    lastName?: string | null

    /** UpdateProfileErrors phone */
    phone?: string | null

    /** UpdateProfileErrors photoId */
    photoId?: string | null

    /** UpdateProfileErrors address */
    address?: string | null

    /** UpdateProfileErrors website */
    website?: string | null
  }

  /** Properties of an UpdateProfileResponse. */
  export interface UpdateProfileResponse {
    /** UpdateProfileResponse errors */
    errors?: identity.UpdateProfileErrors | null

    /** UpdateProfileResponse result */
    result?: identity.Profile | null
  }
}

/** Namespace files. */
export namespace files {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the FilesService service client.
     */
    getFilesService(): files.FilesService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a FilesService service implementation.
     * @param impl FilesService service implementation
     */
    addFilesService(impl: files.FilesService): files.ServerBuilder
  }

  /** Constructs a new FilesService service. */
  export interface FilesService {
    /**
     * Calls getFiles.
     * @param request GetFilesRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getFiles(
      request: files.GetFilesRequest,
      metadata?: grpc.Metadata
    ): Observable<files.GetFilesResponse>

    /**
     * Calls createUpload.
     * @param request CreateUploadRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createUpload(
      request: files.CreateUploadRequest,
      metadata?: grpc.Metadata
    ): Observable<files.CreateUploadResponse>

    /**
     * Calls confirmUpload.
     * @param request ConfirmUploadRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    confirmUpload(
      request: files.ConfirmUploadRequest,
      metadata?: grpc.Metadata
    ): Observable<files.ConfirmUploadResponse>
  }

  /** Properties of a FilesFilter. */
  export interface FilesFilter {
    /** FilesFilter id */
    id?: string[] | null
  }

  /** Properties of a File. */
  export interface File {
    /** File id */
    id?: string | null

    /** File url */
    url?: string | null
  }

  /** Properties of an UploadField. */
  export interface UploadField {
    /** UploadField key */
    key?: string | null

    /** UploadField value */
    value?: string | null
  }

  /** Properties of an Upload. */
  export interface Upload {
    /** Upload id */
    id?: string | null

    /** Upload url */
    url?: string | null

    /** Upload fields */
    fields?: files.UploadField[] | null
  }

  /** Properties of a CreateUploadRequest. */
  export interface CreateUploadRequest {
    /** CreateUploadRequest type */
    type?: string | null

    /** CreateUploadRequest name */
    name?: string | null
  }

  /** Properties of a CreateUploadResponse. */
  export interface CreateUploadResponse {
    /** CreateUploadResponse result */
    result?: files.Upload | null
  }

  /** Properties of a ConfirmUploadRequest. */
  export interface ConfirmUploadRequest {
    /** ConfirmUploadRequest id */
    id?: string | null
  }

  /** Properties of a ConfirmUploadResponse. */
  export interface ConfirmUploadResponse {
    /** ConfirmUploadResponse result */
    result?: files.File | null
  }

  /** Properties of a GetFilesRequest. */
  export interface GetFilesRequest {
    /** GetFilesRequest pager */
    pager?: common.Pager | null

    /** GetFilesRequest order */
    order?: common.Order | null

    /** GetFilesRequest filters */
    filters?: files.FilesFilter | null
  }

  /** Properties of a GetFilesResponse. */
  export interface GetFilesResponse {
    /** GetFilesResponse rows */
    rows?: files.File[] | null

    /** GetFilesResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }
}

/** Namespace portfolio. */
export namespace portfolio {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the PortfolioService service client.
     */
    getPortfolioService(): portfolio.PortfolioService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a PortfolioService service implementation.
     * @param impl PortfolioService service implementation
     */
    addPortfolioService(impl: portfolio.PortfolioService): portfolio.ServerBuilder
  }

  /** Constructs a new PortfolioService service. */
  export interface PortfolioService {
    /**
     * Calls getPortfolio.
     * @param request GetPortfolioRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getPortfolio(
      request: portfolio.GetPortfolioRequest,
      metadata?: grpc.Metadata
    ): Observable<portfolio.GetPortfolioResponse>

    /**
     * Calls createPortfolio.
     * @param request CreatePortfolioRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createPortfolio(
      request: portfolio.CreatePortfolioRequest,
      metadata?: grpc.Metadata
    ): Observable<portfolio.CreatePortfolioResponse>

    /**
     * Calls updatePortfolio.
     * @param request UpdatePortfolioRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updatePortfolio(
      request: portfolio.UpdatePortfolioRequest,
      metadata?: grpc.Metadata
    ): Observable<portfolio.UpdatePortfolioResponse>
  }

  /** Properties of a PortfolioFilter. */
  export interface PortfolioFilter {
    /** PortfolioFilter id */
    id?: string[] | null

    /** PortfolioFilter userId */
    userId?: string[] | null
  }

  /** Properties of a Portfolio. */
  export interface Portfolio {
    /** Portfolio id */
    id?: string | null

    /** Portfolio name */
    name?: string | null

    /** Portfolio images */
    images?: string[] | null

    /** Portfolio userId */
    userId?: string | null
  }

  /** Properties of a GetPortfolioRequest. */
  export interface GetPortfolioRequest {
    /** GetPortfolioRequest pager */
    pager?: common.Pager | null

    /** GetPortfolioRequest order */
    order?: common.Order | null

    /** GetPortfolioRequest filters */
    filters?: portfolio.PortfolioFilter | null
  }

  /** Properties of a GetPortfolioResponse. */
  export interface GetPortfolioResponse {
    /** GetPortfolioResponse rows */
    rows?: portfolio.Portfolio[] | null

    /** GetPortfolioResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a CreatePortfolioRequest. */
  export interface CreatePortfolioRequest {
    /** CreatePortfolioRequest userId */
    userId?: string | null

    /** CreatePortfolioRequest name */
    name?: string | null

    /** CreatePortfolioRequest images */
    images?: string[] | null
  }

  /** Properties of a CreatePortfolioErrors. */
  export interface CreatePortfolioErrors {
    /** CreatePortfolioErrors name */
    name?: string | null
  }

  /** Properties of a CreatePortfolioResponse. */
  export interface CreatePortfolioResponse {
    /** CreatePortfolioResponse errors */
    errors?: portfolio.CreatePortfolioErrors | null

    /** CreatePortfolioResponse result */
    result?: portfolio.Portfolio | null
  }

  /** Properties of an UpdatePortfolioRequest. */
  export interface UpdatePortfolioRequest {
    /** UpdatePortfolioRequest id */
    id?: string | null

    /** UpdatePortfolioRequest userId */
    userId?: string | null

    /** UpdatePortfolioRequest name */
    name?: string | null

    /** UpdatePortfolioRequest images */
    images?: string[] | null
  }

  /** Properties of an UpdatePortfolioErrors. */
  export interface UpdatePortfolioErrors {
    /** UpdatePortfolioErrors id */
    id?: string | null

    /** UpdatePortfolioErrors userId */
    userId?: string | null

    /** UpdatePortfolioErrors name */
    name?: string | null
  }

  /** Properties of an UpdatePortfolioResponse. */
  export interface UpdatePortfolioResponse {
    /** UpdatePortfolioResponse errors */
    errors?: portfolio.UpdatePortfolioErrors | null

    /** UpdatePortfolioResponse result */
    result?: portfolio.Portfolio | null
  }
}

/** Namespace collaboration. */
export namespace collaboration {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the CollaborationService service client.
     */
    getCollaborationService(): collaboration.CollaborationService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a CollaborationService service implementation.
     * @param impl CollaborationService service implementation
     */
    addCollaborationService(impl: collaboration.CollaborationService): collaboration.ServerBuilder
  }

  /** Constructs a new CollaborationService service. */
  export interface CollaborationService {
    /**
     * Calls getCustomers.
     * @param request GetCustomersRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getCustomers(
      request: collaboration.GetCustomersRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.GetCustomersResponse>

    /**
     * Calls getSpecialists.
     * @param request GetSpecialistsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getSpecialists(
      request: collaboration.GetSpecialistsRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.GetSpecialistsResponse>

    /**
     * Calls getDiscussions.
     * @param request GetDiscussionsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getDiscussions(
      request: collaboration.GetDiscussionsRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.GetDiscussionsResponse>

    /**
     * Calls getChatDiscussions.
     * @param request GetDiscussionsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getChatDiscussions(
      request: collaboration.GetDiscussionsRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.GetDiscussionsResponse>

    /**
     * Calls updateSpecialist.
     * @param request UpdateSpecialistRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateSpecialist(
      request: collaboration.UpdateSpecialistRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.UpdateSpecialistResponse>

    /**
     * Calls changeAccountType.
     * @param request ChangeAccountTypeRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    changeAccountType(
      request: collaboration.ChangeAccountTypeRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.ChangeAccountTypeResponse>

    /**
     * Calls createProject.
     * @param request CreateProjectRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    createProject(
      request: collaboration.CreateProjectRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.CreateProjectResponse>

    /**
     * Calls updateProject.
     * @param request UpdateProjectRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    updateProject(
      request: collaboration.UpdateProjectRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.UpdateProjectResponse>

    /**
     * Calls getProjects.
     * @param request GetProjectsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getProjects(
      request: collaboration.GetProjectsRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.GetProjectsResponse>

    /**
     * Calls addProjectReply.
     * @param request AddProjectReplyRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    addProjectReply(
      request: collaboration.AddProjectReplyRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.AddProjectReplyResponse>

    /**
     * Calls rejectProjectReply.
     * @param request RejectProjectReplyRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    rejectProjectReply(
      request: collaboration.RejectProjectReplyRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.RejectProjectReplyResponse>

    /**
     * Calls confirmProjectReply.
     * @param request ConfirmProjectReplyRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    confirmProjectReply(
      request: collaboration.ConfirmProjectReplyRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.ConfirmProjectReplyResponse>

    /**
     * Calls getReplies.
     * @param request GetRepliesRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getReplies(
      request: collaboration.GetRepliesRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.GetRepliesResponse>

    /**
     * Calls addReplyMessage.
     * @param request AddReplyMessageRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    addReplyMessage(
      request: collaboration.AddReplyMessageRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.AddReplyMessageResponse>

    /**
     * Calls changeReplyStatus.
     * @param request ChangeReplyStatusRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    changeReplyStatus(
      request: collaboration.ChangeReplyStatusRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.ChangeReplyStatusResponse>

    /**
     * Calls chooseSpecialist.
     * @param request ChooseSpecialistRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    chooseSpecialist(
      request: collaboration.ChooseSpecialistRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.ChooseSpecialistResponse>

    /**
     * Calls completeProject.
     * @param request CompleteProjectRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    completeProject(
      request: collaboration.CompleteProjectRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.CompleteProjectResponse>

    /**
     * Calls publishProject.
     * @param request PublishProjectRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    publishProject(
      request: collaboration.PublishProjectRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.PublishProjectResponse>

    /**
     * Calls getReviews.
     * @param request GetReviewsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getReviews(
      request: collaboration.GetReviewsRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.GetReviewsResponse>

    /**
     * Calls addDiscussionMessage.
     * @param request AddDiscussionMessageRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    addDiscussionMessage(
      request: collaboration.AddDiscussionMessageRequest,
      metadata?: grpc.Metadata
    ): Observable<collaboration.AddDiscussionMessageResponse>
  }

  /** Properties of a ProjectsFilter. */
  export interface ProjectsFilter {
    /** ProjectsFilter id */
    id?: string[] | null

    /** ProjectsFilter customerId */
    customerId?: string[] | null
  }

  /** Properties of a GetProjectsRequest. */
  export interface GetProjectsRequest {
    /** GetProjectsRequest pager */
    pager?: common.Pager | null

    /** GetProjectsRequest order */
    order?: common.Order | null

    /** GetProjectsRequest filters */
    filters?: collaboration.ProjectsFilter | null
  }

  /** Properties of a GetProjectsResponse. */
  export interface GetProjectsResponse {
    /** GetProjectsResponse rows */
    rows?: collaboration.Project[] | null

    /** GetProjectsResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of an Address. */
  export interface Address {
    /** Address formatted */
    formatted?: string | null
  }

  /** Properties of a Customer. */
  export interface Customer {
    /** Customer id */
    id?: string | null

    /** Customer openProjects */
    openProjects?: number | null

    /** Customer completedProjects */
    completedProjects?: number | null
  }

  /** Properties of an Interaction. */
  export interface Interaction {
    /** Interaction formOfWork */
    formOfWork?: string | null

    /** Interaction numberOfEmployees */
    numberOfEmployees?: string | null

    /** Interaction name */
    name?: string | null
  }

  /** Properties of a Specialisation. */
  export interface Specialisation {
    /** Specialisation main */
    main?: string[] | null

    /** Specialisation additional */
    additional?: string[] | null
  }

  /** Properties of an Account. */
  export interface Account {
    /** Account type */
    type?: string | null

    /** Account replyLimited */
    replyLimited?: boolean | null
  }

  /** Properties of a Specialist. */
  export interface Specialist {
    /** Specialist id */
    id?: string | null

    /** Specialist interaction */
    interaction?: collaboration.Interaction | null

    /** Specialist specialisation */
    specialisation?: collaboration.Specialisation | null

    /** Specialist description */
    description?: string | null

    /** Specialist rating */
    rating?: number | null

    /** Specialist reviewCount */
    reviewCount?: number | null

    /** Specialist completedProjects */
    completedProjects?: number | null

    /** Specialist account */
    account?: collaboration.Account | null
  }

  /** Properties of a Project. */
  export interface Project {
    /** Project id */
    id?: string | null

    /** Project name */
    name?: string | null

    /** Project categoryId */
    categoryId?: string | null

    /** Project description */
    description?: string | null

    /** Project photos */
    photos?: string[] | null

    /** Project address */
    address?: collaboration.Address | null

    /** Project beginningOfWork */
    beginningOfWork?: string | null

    /** Project budget */
    budget?: number | null

    /** Project legalEntitiesOnly */
    legalEntitiesOnly?: boolean | null

    /** Project customerId */
    customerId?: string | null

    /** Project worksheet */
    worksheet?: string | null

    /** Project status */
    status?: string | null

    /** Project replyCount */
    replyCount?: number | null

    /** Project publicationDate */
    publicationDate?: number | null
  }

  /** Properties of a Message. */
  export interface Message {
    /** Message id */
    id?: string | null

    /** Message authorId */
    authorId?: string | null

    /** Message content */
    content?: string | null

    /** Message read */
    read?: boolean | null

    /** Message publicationDate */
    publicationDate?: number | null
  }

  /** Properties of a Discussion. */
  export interface Discussion {
    /** Discussion id */
    id?: string | null

    /** Discussion customerId */
    customerId?: string | null

    /** Discussion specialistId */
    specialistId?: string | null

    /** Discussion messages */
    messages?: collaboration.Message[] | null
  }

  /** Properties of a Reply. */
  export interface Reply {
    /** Reply id */
    id?: string | null

    /** Reply projectId */
    projectId?: string | null

    /** Reply discussion */
    discussion?: collaboration.Discussion | null

    /** Reply status */
    status?: string | null
  }

  /** Properties of a Review. */
  export interface Review {
    /** Review id */
    id?: string | null

    /** Review projectId */
    projectId?: string | null

    /** Review replyId */
    replyId?: string | null

    /** Review customerId */
    customerId?: string | null

    /** Review specialistId */
    specialistId?: string | null

    /** Review rating */
    rating?: number | null

    /** Review comment */
    comment?: string | null
  }

  /** Properties of a CustomersFilter. */
  export interface CustomersFilter {
    /** CustomersFilter id */
    id?: string[] | null
  }

  /** Properties of a GetCustomersRequest. */
  export interface GetCustomersRequest {
    /** GetCustomersRequest pager */
    pager?: common.Pager | null

    /** GetCustomersRequest order */
    order?: common.Order | null

    /** GetCustomersRequest filters */
    filters?: collaboration.CustomersFilter | null
  }

  /** Properties of a GetCustomersResponse. */
  export interface GetCustomersResponse {
    /** GetCustomersResponse rows */
    rows?: collaboration.Customer[] | null

    /** GetCustomersResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a SpecialistsFilter. */
  export interface SpecialistsFilter {
    /** SpecialistsFilter id */
    id?: string[] | null
  }

  /** Properties of a GetSpecialistsRequest. */
  export interface GetSpecialistsRequest {
    /** GetSpecialistsRequest pager */
    pager?: common.Pager | null

    /** GetSpecialistsRequest order */
    order?: common.Order | null

    /** GetSpecialistsRequest filters */
    filters?: collaboration.SpecialistsFilter | null
  }

  /** Properties of a GetSpecialistsResponse. */
  export interface GetSpecialistsResponse {
    /** GetSpecialistsResponse rows */
    rows?: collaboration.Specialist[] | null

    /** GetSpecialistsResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a DiscussionsFilter. */
  export interface DiscussionsFilter {
    /** DiscussionsFilter id */
    id?: string[] | null

    /** DiscussionsFilter customerId */
    customerId?: string[] | null

    /** DiscussionsFilter specialistId */
    specialistId?: string[] | null
  }

  /** Properties of a GetDiscussionsRequest. */
  export interface GetDiscussionsRequest {
    /** GetDiscussionsRequest pager */
    pager?: common.Pager | null

    /** GetDiscussionsRequest order */
    order?: common.Order | null

    /** GetDiscussionsRequest filters */
    filters?: collaboration.DiscussionsFilter | null
  }

  /** Properties of a GetDiscussionsResponse. */
  export interface GetDiscussionsResponse {
    /** GetDiscussionsResponse rows */
    rows?: collaboration.Discussion[] | null

    /** GetDiscussionsResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of an UpdateSpecialistRequest. */
  export interface UpdateSpecialistRequest {
    /** UpdateSpecialistRequest id */
    id?: string | null

    /** UpdateSpecialistRequest formOfWork */
    formOfWork?: string | null

    /** UpdateSpecialistRequest numberOfEmployees */
    numberOfEmployees?: string | null

    /** UpdateSpecialistRequest companyName */
    companyName?: string | null

    /** UpdateSpecialistRequest mainSpecialisation */
    mainSpecialisation?: string[] | null

    /** UpdateSpecialistRequest additionalSpecialisation */
    additionalSpecialisation?: string[] | null

    /** UpdateSpecialistRequest description */
    description?: string | null
  }

  /** Properties of an UpdateSpecialistErrors. */
  export interface UpdateSpecialistErrors {
    /** UpdateSpecialistErrors id */
    id?: string | null

    /** UpdateSpecialistErrors formOfWork */
    formOfWork?: string | null

    /** UpdateSpecialistErrors numberOfEmployees */
    numberOfEmployees?: string | null

    /** UpdateSpecialistErrors companyName */
    companyName?: string | null

    /** UpdateSpecialistErrors mainSpecialisation */
    mainSpecialisation?: string | null

    /** UpdateSpecialistErrors additionalSpecialisation */
    additionalSpecialisation?: string | null

    /** UpdateSpecialistErrors description */
    description?: string | null
  }

  /** Properties of an UpdateSpecialistResponse. */
  export interface UpdateSpecialistResponse {
    /** UpdateSpecialistResponse errors */
    errors?: collaboration.UpdateSpecialistErrors | null

    /** UpdateSpecialistResponse result */
    result?: collaboration.Specialist | null
  }

  /** Properties of a ChangeAccountTypeRequest. */
  export interface ChangeAccountTypeRequest {
    /** ChangeAccountTypeRequest specialistId */
    specialistId?: string | null

    /** ChangeAccountTypeRequest type */
    type?: string | null
  }

  /** Properties of a ChangeAccountTypeErrors. */
  export interface ChangeAccountTypeErrors {
    /** ChangeAccountTypeErrors specialistId */
    specialistId?: string | null

    /** ChangeAccountTypeErrors type */
    type?: string | null
  }

  /** Properties of a ChangeAccountTypeResponse. */
  export interface ChangeAccountTypeResponse {
    /** ChangeAccountTypeResponse errors */
    errors?: collaboration.ChangeAccountTypeErrors | null

    /** ChangeAccountTypeResponse result */
    result?: collaboration.Specialist | null
  }

  /** Properties of a CreateProjectRequest. */
  export interface CreateProjectRequest {
    /** CreateProjectRequest customerId */
    customerId?: string | null

    /** CreateProjectRequest name */
    name?: string | null

    /** CreateProjectRequest categoryId */
    categoryId?: string | null

    /** CreateProjectRequest description */
    description?: string | null

    /** CreateProjectRequest photos */
    photos?: string[] | null

    /** CreateProjectRequest address */
    address?: string | null

    /** CreateProjectRequest beginningOfWork */
    beginningOfWork?: string | null

    /** CreateProjectRequest budget */
    budget?: number | null

    /** CreateProjectRequest legalEntitiesOnly */
    legalEntitiesOnly?: boolean | null

    /** CreateProjectRequest worksheet */
    worksheet?: string | null
  }

  /** Properties of a CreateProjectErrors. */
  export interface CreateProjectErrors {
    /** CreateProjectErrors customerId */
    customerId?: string | null

    /** CreateProjectErrors name */
    name?: string | null

    /** CreateProjectErrors category */
    category?: string | null

    /** CreateProjectErrors description */
    description?: string | null

    /** CreateProjectErrors photos */
    photos?: string | null

    /** CreateProjectErrors address */
    address?: string | null

    /** CreateProjectErrors beginningOfWork */
    beginningOfWork?: string | null

    /** CreateProjectErrors budget */
    budget?: string | null

    /** CreateProjectErrors legalEntitiesOnly */
    legalEntitiesOnly?: string | null
  }

  /** Properties of a CreateProjectResponse. */
  export interface CreateProjectResponse {
    /** CreateProjectResponse errors */
    errors?: collaboration.CreateProjectErrors | null

    /** CreateProjectResponse result */
    result?: collaboration.Project | null
  }

  /** Properties of an UpdateProjectRequest. */
  export interface UpdateProjectRequest {
    /** UpdateProjectRequest id */
    id?: string | null

    /** UpdateProjectRequest customerId */
    customerId?: string | null

    /** UpdateProjectRequest name */
    name?: string | null

    /** UpdateProjectRequest description */
    description?: string | null

    /** UpdateProjectRequest photos */
    photos?: string[] | null

    /** UpdateProjectRequest address */
    address?: string | null

    /** UpdateProjectRequest beginningOfWork */
    beginningOfWork?: string | null

    /** UpdateProjectRequest budget */
    budget?: number | null

    /** UpdateProjectRequest legalEntitiesOnly */
    legalEntitiesOnly?: boolean | null

    /** UpdateProjectRequest worksheet */
    worksheet?: string | null
  }

  /** Properties of an UpdateProjectErrors. */
  export interface UpdateProjectErrors {
    /** UpdateProjectErrors id */
    id?: string | null

    /** UpdateProjectErrors customerId */
    customerId?: string | null

    /** UpdateProjectErrors name */
    name?: string | null

    /** UpdateProjectErrors description */
    description?: string | null

    /** UpdateProjectErrors photos */
    photos?: string | null

    /** UpdateProjectErrors address */
    address?: string | null

    /** UpdateProjectErrors beginningOfWork */
    beginningOfWork?: string | null

    /** UpdateProjectErrors budget */
    budget?: string | null

    /** UpdateProjectErrors legalEntitiesOnly */
    legalEntitiesOnly?: string | null
  }

  /** Properties of an UpdateProjectResponse. */
  export interface UpdateProjectResponse {
    /** UpdateProjectResponse errors */
    errors?: collaboration.UpdateProjectErrors | null

    /** UpdateProjectResponse result */
    result?: collaboration.Project | null
  }

  /** Properties of an AddProjectReplyRequest. */
  export interface AddProjectReplyRequest {
    /** AddProjectReplyRequest specialistId */
    specialistId?: string | null

    /** AddProjectReplyRequest projectId */
    projectId?: string | null

    /** AddProjectReplyRequest message */
    message?: string | null
  }

  /** Properties of an AddProjectReplyErrors. */
  export interface AddProjectReplyErrors {
    /** AddProjectReplyErrors specialistId */
    specialistId?: string | null

    /** AddProjectReplyErrors projectId */
    projectId?: string | null

    /** AddProjectReplyErrors message */
    message?: string | null
  }

  /** Properties of an AddProjectReplyResponse. */
  export interface AddProjectReplyResponse {
    /** AddProjectReplyResponse errors */
    errors?: collaboration.AddProjectReplyErrors | null

    /** AddProjectReplyResponse result */
    result?: collaboration.Reply | null
  }

  /** Properties of a RejectProjectReplyRequest. */
  export interface RejectProjectReplyRequest {
    /** RejectProjectReplyRequest specialistId */
    specialistId?: string | null

    /** RejectProjectReplyRequest projectId */
    projectId?: string | null
  }

  /** Properties of a RejectProjectReplyErrors. */
  export interface RejectProjectReplyErrors {
    /** RejectProjectReplyErrors specialistId */
    specialistId?: string | null

    /** RejectProjectReplyErrors projectId */
    projectId?: string | null
  }

  /** Properties of a RejectProjectReplyResponse. */
  export interface RejectProjectReplyResponse {
    /** RejectProjectReplyResponse errors */
    errors?: collaboration.RejectProjectReplyErrors | null

    /** RejectProjectReplyResponse result */
    result?: collaboration.Reply | null
  }

  /** Properties of a ConfirmProjectReplyRequest. */
  export interface ConfirmProjectReplyRequest {
    /** ConfirmProjectReplyRequest specialistId */
    specialistId?: string | null

    /** ConfirmProjectReplyRequest projectId */
    projectId?: string | null
  }

  /** Properties of a ConfirmProjectReplyErrors. */
  export interface ConfirmProjectReplyErrors {
    /** ConfirmProjectReplyErrors specialistId */
    specialistId?: string | null

    /** ConfirmProjectReplyErrors projectId */
    projectId?: string | null
  }

  /** Properties of a ConfirmProjectReplyResponse. */
  export interface ConfirmProjectReplyResponse {
    /** ConfirmProjectReplyResponse errors */
    errors?: collaboration.ConfirmProjectReplyErrors | null

    /** ConfirmProjectReplyResponse result */
    result?: collaboration.Reply | null
  }

  /** Properties of a RepliesFilter. */
  export interface RepliesFilter {
    /** RepliesFilter id */
    id?: string[] | null

    /** RepliesFilter projectId */
    projectId?: string[] | null

    /** RepliesFilter specialistId */
    specialistId?: string[] | null
  }

  /** Properties of a GetRepliesRequest. */
  export interface GetRepliesRequest {
    /** GetRepliesRequest pager */
    pager?: common.Pager | null

    /** GetRepliesRequest order */
    order?: common.Order | null

    /** GetRepliesRequest filters */
    filters?: collaboration.RepliesFilter | null
  }

  /** Properties of a GetRepliesResponse. */
  export interface GetRepliesResponse {
    /** GetRepliesResponse rows */
    rows?: collaboration.Reply[] | null

    /** GetRepliesResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a ReviewsFilter. */
  export interface ReviewsFilter {
    /** ReviewsFilter id */
    id?: string[] | null

    /** ReviewsFilter projectId */
    projectId?: string[] | null

    /** ReviewsFilter specialistId */
    specialistId?: string[] | null
  }

  /** Properties of a GetReviewsRequest. */
  export interface GetReviewsRequest {
    /** GetReviewsRequest pager */
    pager?: common.Pager | null

    /** GetReviewsRequest order */
    order?: common.Order | null

    /** GetReviewsRequest filters */
    filters?: collaboration.ReviewsFilter | null
  }

  /** Properties of a GetReviewsResponse. */
  export interface GetReviewsResponse {
    /** GetReviewsResponse rows */
    rows?: collaboration.Review[] | null

    /** GetReviewsResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of an AddReplyMessageRequest. */
  export interface AddReplyMessageRequest {
    /** AddReplyMessageRequest replyId */
    replyId?: string | null

    /** AddReplyMessageRequest authorId */
    authorId?: string | null

    /** AddReplyMessageRequest message */
    message?: string | null
  }

  /** Properties of an AddReplyMessageErrors. */
  export interface AddReplyMessageErrors {
    /** AddReplyMessageErrors replyId */
    replyId?: string | null

    /** AddReplyMessageErrors authorId */
    authorId?: string | null

    /** AddReplyMessageErrors message */
    message?: string | null
  }

  /** Properties of an AddReplyMessageResponse. */
  export interface AddReplyMessageResponse {
    /** AddReplyMessageResponse errors */
    errors?: collaboration.AddReplyMessageErrors | null

    /** AddReplyMessageResponse result */
    result?: collaboration.Message | null
  }

  /** Properties of a ChangeReplyStatusRequest. */
  export interface ChangeReplyStatusRequest {
    /** ChangeReplyStatusRequest replyId */
    replyId?: string | null

    /** ChangeReplyStatusRequest status */
    status?: string | null

    /** ChangeReplyStatusRequest customerId */
    customerId?: string | null
  }

  /** Properties of a ChangeReplyStatusErrors. */
  export interface ChangeReplyStatusErrors {
    /** ChangeReplyStatusErrors replyId */
    replyId?: string | null

    /** ChangeReplyStatusErrors status */
    status?: string | null
  }

  /** Properties of a ChangeReplyStatusResponse. */
  export interface ChangeReplyStatusResponse {
    /** ChangeReplyStatusResponse errors */
    errors?: collaboration.ChangeReplyStatusErrors | null

    /** ChangeReplyStatusResponse result */
    result?: collaboration.Reply | null
  }

  /** Properties of a ChooseSpecialistRequest. */
  export interface ChooseSpecialistRequest {
    /** ChooseSpecialistRequest replyId */
    replyId?: string | null

    /** ChooseSpecialistRequest customerId */
    customerId?: string | null
  }

  /** Properties of a ChooseSpecialistErrors. */
  export interface ChooseSpecialistErrors {
    /** ChooseSpecialistErrors replyId */
    replyId?: string | null

    /** ChooseSpecialistErrors customerId */
    customerId?: string | null
  }

  /** Properties of a ChooseSpecialistResponse. */
  export interface ChooseSpecialistResponse {
    /** ChooseSpecialistResponse errors */
    errors?: collaboration.ChooseSpecialistErrors | null

    /** ChooseSpecialistResponse result */
    result?: collaboration.Project | null
  }

  /** Properties of a PublishProjectRequest. */
  export interface PublishProjectRequest {
    /** PublishProjectRequest projectId */
    projectId?: string | null

    /** PublishProjectRequest customerId */
    customerId?: string | null
  }

  /** Properties of a PublishProjectErrors. */
  export interface PublishProjectErrors {
    /** PublishProjectErrors projectId */
    projectId?: string | null

    /** PublishProjectErrors customerId */
    customerId?: string | null
  }

  /** Properties of a PublishProjectResponse. */
  export interface PublishProjectResponse {
    /** PublishProjectResponse errors */
    errors?: collaboration.PublishProjectErrors | null

    /** PublishProjectResponse result */
    result?: collaboration.Project | null
  }

  /** Properties of a CompleteProjectRequest. */
  export interface CompleteProjectRequest {
    /** CompleteProjectRequest projectId */
    projectId?: string | null

    /** CompleteProjectRequest customerId */
    customerId?: string | null

    /** CompleteProjectRequest rating */
    rating?: number | null

    /** CompleteProjectRequest comment */
    comment?: string | null
  }

  /** Properties of a CompleteProjectErrors. */
  export interface CompleteProjectErrors {
    /** CompleteProjectErrors projectId */
    projectId?: string | null

    /** CompleteProjectErrors customerId */
    customerId?: string | null

    /** CompleteProjectErrors rating */
    rating?: string | null

    /** CompleteProjectErrors comment */
    comment?: string | null
  }

  /** Properties of a CompleteProjectResponse. */
  export interface CompleteProjectResponse {
    /** CompleteProjectResponse errors */
    errors?: collaboration.CompleteProjectErrors | null

    /** CompleteProjectResponse result */
    result?: collaboration.Review | null
  }

  /** Properties of an AddDiscussionMessageRequest. */
  export interface AddDiscussionMessageRequest {
    /** AddDiscussionMessageRequest specialistId */
    specialistId?: string | null

    /** AddDiscussionMessageRequest customerId */
    customerId?: string | null

    /** AddDiscussionMessageRequest authorId */
    authorId?: string | null

    /** AddDiscussionMessageRequest message */
    message?: string | null
  }

  /** Properties of an AddDiscussionMessageErrors. */
  export interface AddDiscussionMessageErrors {
    /** AddDiscussionMessageErrors specialistId */
    specialistId?: string | null

    /** AddDiscussionMessageErrors customerId */
    customerId?: string | null

    /** AddDiscussionMessageErrors authorId */
    authorId?: string | null

    /** AddDiscussionMessageErrors message */
    message?: string | null
  }

  /** Properties of an AddDiscussionMessageResponse. */
  export interface AddDiscussionMessageResponse {
    /** AddDiscussionMessageResponse errors */
    errors?: collaboration.AddDiscussionMessageErrors | null

    /** AddDiscussionMessageResponse result */
    result?: collaboration.Message | null
  }
}

/** Namespace hits. */
export namespace hits {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the HitsService service client.
     */
    getHitsService(): hits.HitsService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a HitsService service implementation.
     * @param impl HitsService service implementation
     */
    addHitsService(impl: hits.HitsService): hits.ServerBuilder
  }

  /** Constructs a new HitsService service. */
  export interface HitsService {
    /**
     * Calls getCounters.
     * @param request GetCountersRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getCounters(
      request: hits.GetCountersRequest,
      metadata?: grpc.Metadata
    ): Observable<hits.GetCountersResponse>

    /**
     * Calls getActivities.
     * @param request GetActivitiesRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    getActivities(
      request: hits.GetActivitiesRequest,
      metadata?: grpc.Metadata
    ): Observable<hits.GetActivitiesResponse>

    /**
     * Calls trackActivity.
     * @param request TrackActivityRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    trackActivity(
      request: hits.TrackActivityRequest,
      metadata?: grpc.Metadata
    ): Observable<hits.TrackActivityResponse>
  }

  /** Properties of a CountersFilter. */
  export interface CountersFilter {
    /** CountersFilter id */
    id?: string[] | null
  }

  /** Properties of a Counter. */
  export interface Counter {
    /** Counter id */
    id?: string | null

    /** Counter value */
    value?: number | null
  }

  /** Properties of a GetCountersRequest. */
  export interface GetCountersRequest {
    /** GetCountersRequest pager */
    pager?: common.Pager | null

    /** GetCountersRequest order */
    order?: common.Order | null

    /** GetCountersRequest filters */
    filters?: hits.CountersFilter | null
  }

  /** Properties of a GetCountersResponse. */
  export interface GetCountersResponse {
    /** GetCountersResponse rows */
    rows?: hits.Counter[] | null

    /** GetCountersResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of an ActivitiesFilter. */
  export interface ActivitiesFilter {
    /** ActivitiesFilter id */
    id?: string[] | null
  }

  /** Properties of an Activity. */
  export interface Activity {
    /** Activity id */
    id?: string | null

    /** Activity last */
    last?: number | null
  }

  /** Properties of a GetActivitiesRequest. */
  export interface GetActivitiesRequest {
    /** GetActivitiesRequest pager */
    pager?: common.Pager | null

    /** GetActivitiesRequest order */
    order?: common.Order | null

    /** GetActivitiesRequest filters */
    filters?: hits.ActivitiesFilter | null
  }

  /** Properties of a GetActivitiesResponse. */
  export interface GetActivitiesResponse {
    /** GetActivitiesResponse rows */
    rows?: hits.Activity[] | null

    /** GetActivitiesResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a TrackActivityRequest. */
  export interface TrackActivityRequest {
    /** TrackActivityRequest id */
    id?: string | null
  }

  /** Properties of a TrackActivityErrors. */
  export interface TrackActivityErrors {
    /** TrackActivityErrors id */
    id?: string | null
  }

  /** Properties of a TrackActivityResponse. */
  export interface TrackActivityResponse {
    /** TrackActivityResponse errors */
    errors?: hits.TrackActivityErrors | null

    /** TrackActivityResponse result */
    result?: hits.Activity | null
  }
}

/** Namespace search. */
export namespace search {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the SearchService service client.
     */
    getSearchService(): search.SearchService
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a SearchService service implementation.
     * @param impl SearchService service implementation
     */
    addSearchService(impl: search.SearchService): search.ServerBuilder
  }

  /** Constructs a new SearchService service. */
  export interface SearchService {
    /**
     * Calls searchProjects.
     * @param request SearchProjectsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    searchProjects(
      request: search.SearchProjectsRequest,
      metadata?: grpc.Metadata
    ): Observable<search.SearchProjectsResponse>

    /**
     * Calls searchSpecialists.
     * @param request SearchSpecialistsRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    searchSpecialists(
      request: search.SearchSpecialistsRequest,
      metadata?: grpc.Metadata
    ): Observable<search.SearchSpecialistsResponse>
  }

  /** Properties of a Search. */
  export interface Search {
    /** Search id */
    id?: string | null

    /** Search score */
    score?: number | null
  }

  /** Properties of a ProjectsFilter. */
  export interface ProjectsFilter {
    /** ProjectsFilter id */
    id?: string[] | null

    /** ProjectsFilter categoryId */
    categoryId?: string | null

    /** ProjectsFilter status */
    status?: string | null
  }

  /** Properties of a SearchProjectsRequest. */
  export interface SearchProjectsRequest {
    /** SearchProjectsRequest pager */
    pager?: common.Pager | null

    /** SearchProjectsRequest order */
    order?: common.Order | null

    /** SearchProjectsRequest filters */
    filters?: search.ProjectsFilter | null

    /** SearchProjectsRequest query */
    query?: string | null
  }

  /** Properties of a SearchProjectsResponse. */
  export interface SearchProjectsResponse {
    /** SearchProjectsResponse rows */
    rows?: search.Search[] | null

    /** SearchProjectsResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }

  /** Properties of a SpecialistsFilter. */
  export interface SpecialistsFilter {
    /** SpecialistsFilter id */
    id?: string[] | null

    /** SpecialistsFilter specialisationId */
    specialisationId?: string | null
  }

  /** Properties of a SearchSpecialistsRequest. */
  export interface SearchSpecialistsRequest {
    /** SearchSpecialistsRequest pager */
    pager?: common.Pager | null

    /** SearchSpecialistsRequest order */
    order?: common.Order | null

    /** SearchSpecialistsRequest filters */
    filters?: search.SpecialistsFilter | null

    /** SearchSpecialistsRequest query */
    query?: string | null
  }

  /** Properties of a SearchSpecialistsResponse. */
  export interface SearchSpecialistsResponse {
    /** SearchSpecialistsResponse rows */
    rows?: search.Search[] | null

    /** SearchSpecialistsResponse pageInfo */
    pageInfo?: common.PageInfo | null
  }
}
