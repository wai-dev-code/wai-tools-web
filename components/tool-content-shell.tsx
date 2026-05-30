"use client"

/**
 * 工具页内容区客户端壳层，确保交互组件正确挂载、不被布局层阻断事件。
 */
export function ToolContentShell({ children }: { children: React.ReactNode }) {
  return <div className="relative isolate">{children}</div>
}
