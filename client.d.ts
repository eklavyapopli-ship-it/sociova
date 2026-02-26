
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

export type SendButtonTemplateResponse = Record<string, any>;

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
}