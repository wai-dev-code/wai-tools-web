import { toast } from "sonner"

/** 同一时刻只保留一条工具提示，新消息替换旧消息（勿先 dismiss 再 show，会闪断或失效） */
export function toolNotify(
  message: string,
  type: "success" | "error" | "warning" | "info" = "success",
  id = "tool-notify"
) {
  const opts = { id }
  switch (type) {
    case "error":
      toast.error(message, opts)
      break
    case "warning":
      toast.warning(message, opts)
      break
    case "info":
      toast.message(message, opts)
      break
    default:
      toast.success(message, opts)
  }
}
