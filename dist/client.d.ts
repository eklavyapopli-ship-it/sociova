
export type InstaClientConstructorOptions = {
  auth: string;
};

export type GetUserPayload = {
  fields: string | string[];
};

export type GetUserResponse = Record<string, any>;

export type SendMessagePayload = {
  recepientId: string | number;
  message: string;
};

export type SendMessageResponse = Record<string, any>;

export type AttachmentItem =
  | {
      type: string;
      payload?: Record<string, any>;
      [key: string]: any;
    }
  | Record<string, any>;

export type SendAttachmentPayload = {
  recepientId: string | number;
  attachments: AttachmentItem[]; 
};

export type SendAttachmentResponse = Record<string, any>;

export type SendStickerPayload = {
  recepientId: string | number;
  sticker: string;
};

export type SendStickerResponse = Record<string, any>;

export type SendReactionPayload = {
  recepientId: string | number;
  messageId: string;
  reaction?: string; 
  action?: "react" | "unreact";
};

export type SendReactionResponse = Record<string, any>;

export type WebUrlButton = {
  type: "web_url";
  url: string;
  title: string;
};

export type PostbackButton = {
  type: "postback";
  payload: string; 
  title: string;
};

export type ButtonTemplateButton = WebUrlButton | PostbackButton;

export type SendButtonTemplatePayload = {

  recipientId: string | number;
  text: string;
  buttons: ButtonTemplateButton[];
};
export type SendMediaPayload = {

  recipientId: string | number;
  postId: string|number;
};

export type SendButtonTemplateResponse = Record<string, any>;
export type SendMediaResponse = Record<string,any>
// ---- Generic Template Types ----

export type GenericWebUrlButton = {
  type: "web_url";
  url: string;
  title: string;
};

export type GenericPostbackButton = {
  type: "postback";
  title: string;
  payload: string;
};

export type GenericTemplateButton =
  | GenericWebUrlButton
  | GenericPostbackButton;

export type GenericTemplateDefaultAction = {
  type: "web_url";
  url: string;
};

export type GenericTemplateElement = {
  title: string;
  image_url?: string;
  subtitle?: string;
  default_action?: GenericTemplateDefaultAction;
  buttons?: GenericTemplateButton[];
};

export type SendGenericTemplatePayload = {
  recipientId: string | number;
  elements: GenericTemplateElement[];
};

export type SendGenericTemplateResponse = Record<string, any>;

  export interface MediaResponse {
    id: string;
    status?: string;
    [key: string]: any; // in case Instagram returns extra fields
  }

  export interface PublishPostResumePayload {
    creation_id: string;
  }
export declare class InstaClient {
  Config: {
    auth: string;
  };

  constructor(options: InstaClientConstructorOptions);

  getUser(payload: GetUserPayload): Promise<GetUserResponse>;

  sendMessage(payload: SendMessagePayload): Promise<SendMessageResponse>;

  sendAttachment(payload: SendAttachmentPayload): Promise<SendAttachmentResponse>;

  sendSticker(payload: SendStickerPayload): Promise<SendStickerResponse>;

  sendReaction(payload: SendReactionPayload): Promise<SendReactionResponse>;

  sendButtonTemplate(payload: SendButtonTemplatePayload): Promise<SendButtonTemplateResponse>;
  sendPublishedPosts(payload: SendMediaPayload): Promise<SendMediaResponse>;
  sendGenericTemplate(payload: SendGenericTemplatePayload): Promise<SendGenericTemplateResponse>;
   directPublishPost(payload: DirectPublishPayload): Promise<MediaResponse>;
  createMedia(payload: DirectPublishPayload): Promise<MediaResponse>;
  publishPostResume(payload: PublishPostResumePayload): Promise<MediaResponse>;
}
