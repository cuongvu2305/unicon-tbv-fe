/**
 * Maps message codes returned by the backend (see `app/message_codes.py`)
 * to Vietnamese display text. Keep this in sync with the backend's
 * `MsgCode` class — the codes are the shared contract between the two.
 */
const FALLBACK_CODE = "MSG_UNKNOWN";

const MESSAGE_TEXT: Record<string, string> = {
  MSG001: "Gửi liên hệ thành công. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
  MSG002: "Số điện thoại không hợp lệ.",
  MSG003: "Vui lòng cung cấp số điện thoại hoặc email để chúng tôi liên hệ lại.",
  MSG004: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau ít phút.",
  MSG005: "Không thể gửi liên hệ lúc này. Vui lòng thử lại sau hoặc gọi điện trực tiếp.",
  MSG006: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại thông tin đã nhập.",
  [FALLBACK_CODE]: "Đã có lỗi xảy ra. Vui lòng thử lại.",
};

export function getMessageText(code: string | null | undefined): string {
  if (!code) return MESSAGE_TEXT[FALLBACK_CODE];
  return MESSAGE_TEXT[code] ?? MESSAGE_TEXT[FALLBACK_CODE];
}
