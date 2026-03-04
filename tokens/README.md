# Design Tokens

物联网项目共享的设计变量系统, 从 Figma 导出

## 文件说明

- `design-tokens.json` — 完整 token 定义(Figma 导出原始格式)
  - Light / Dark 两套色板
  - 16 个色系(primary + gray + 14 个扩展色)
  - 语义 token: text / bg / fill / border
  - 组件 token: button / radio / pagination / tooltip / mask

## 使用方式

每个项目的 CSS 通过 `:root` 变量引用这些 token
换主色只需修改 `--primary-6`, 其余色阶跟随调整

## 色系一览

| 色系 | 色值 (6级) | 用途 |
|------|-----------|------|
| primary | #0363e9 | 品牌主色 |
| gray | #86909c | 中性色/文字 |
| red | #f53f3f | 错误/危险 |
| orange | #ff7d00 | 警告 |
| green | #00b42a | 成功 |
| blue | #3491fa | 信息 |
| purple | #722ed1 | 扩展 |
| cyan | #0fc6c2 | 扩展 |
