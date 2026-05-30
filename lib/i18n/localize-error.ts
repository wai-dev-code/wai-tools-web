import type { Locale } from "@/lib/i18n/config"
import { formatMessage, getMessages } from "@/lib/i18n"

/** 将 utils 层抛出的已知中文/英文错误映射为当前语言 */
export function localizeToolError(message: string, locale: Locale): string {
  const e = getMessages(locale).errors
  const map: Record<string, string> = {
    "源数据为空": e.emptySource,
    "内容为空": e.emptyContent,
    "没有可还原的内容": e.nothingToUnescape,
    "没有可下载的内容": e.nothingToDownload,
    "内容超过 5MB 上限": e.oversized,
    "JSON 无效，无法显示树形视图": e.invalidJsonTree,
    "JSONPath 解析失败": e.jsonPathFailed,
    "JSONPath 格式无效": e.jsonPathInvalid,
    "JSON 解析失败": e.jsonParseFailed,
    "无效的 Base64 字符": e.invalidBase64Char,
    "无效的 Data URI 格式": e.invalidDataUri,
    "无效的 Hex 字符串": e.invalidHex,
    "无法识别的输入格式": e.unrecognizedInput,
    "处理失败": e.processFailed,
    "转换失败": e.convertFailed,
    "操作失败": e.operationFailed,
    "校验失败": e.validateFailed,
    "文件编码失败": e.fileEncodeFailed,
    "文件读取失败": e.fileReadFailed,
    "路径无法解析：中间值为 null/undefined": e.pathNullIntermediate,
    "路径无法解析：期望对象": e.pathExpectObject,
    "已从 Data URI 解码": getMessages(locale).base64Tool.smartActions.decodedDataUri,
    "已从 Hex 解码": getMessages(locale).base64Tool.smartActions.decodedHex,
    "已自动解码": getMessages(locale).base64Tool.smartActions.autoDecoded,
    "已自动编码": getMessages(locale).base64Tool.smartActions.autoEncoded,
  }

  if (map[message]) return map[message]

  // JSONPath 动态错误
  const expectArray = message.match(/^路径无法解析：期望数组，可使用 \[(\d+)\] 访问$/)
  if (expectArray) {
    return formatMessage(e.pathExpectArray, { token: expectArray[1] })
  }

  const arrayOob = message.match(/^数组索引 \[(\d+)\] 越界（长度 (\d+)）$/)
  if (arrayOob) {
    return formatMessage(e.pathArrayOob, { token: arrayOob[1], length: arrayOob[2] })
  }

  const arrayHint = message.match(/^当前是数组，请用 \[0\]\.(.+?) 等形式访问/)
  if (arrayHint) {
    return formatMessage(e.pathArrayHint, { token: arrayHint[1] })
  }

  const invalidPath = message.match(/^无效 JSONPath: (.+)$/)
  if (invalidPath) {
    return formatMessage(e.invalidJsonPathExpr, { expr: invalidPath[1] })
  }

  const pathMissing = message.match(/^路径 (.+) 不存在$/)
  if (pathMissing) {
    return `${e.pathNotFoundPrefix}${pathMissing[1]}${e.pathNotFoundSuffix}`
  }

  for (const [key, translated] of Object.entries(map)) {
    if (message.startsWith(key)) return message.replace(key, translated)
  }

  if (message.startsWith("无效 JSONPath:")) {
    return message.replace("无效 JSONPath:", e.invalidJsonPathPrefix)
  }
  if (message.startsWith("路径无法解析：")) {
    return message.replace("路径无法解析：", e.pathResolvePrefix)
  }

  return message
}

export function localizeSmartAction(action: string, locale: Locale): string {
  return localizeToolError(action, locale)
}
