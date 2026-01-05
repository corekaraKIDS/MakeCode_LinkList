
# マイクラコース MakeCode 完成コード一覧
by まいく（櫛谷岳志）　2025年9月11日

## フォルダ構成
- `index.html`: ルート直下
- `styles/`: CSSファイル格納フォルダ
- `js/`: JavaScriptファイル格納フォルダ：教材データと表の生成

## 情報更新手順
`js/index.js` の先頭にある `materials_chuukyuu` と `materials_joukyuu` の **JSON 配列**を編集して、中級・上級教材の情報を書き込んでください。
内容はページの表に自動反映されます。
\
なお、jsはLiveViewerなどを使わなくても動きます。

### 例
```js
{
  id: "MC-01",
  name: "対戦（たいせん）ゲーム",
  keywords: "",
  link: "#",
  issueFound: false,
  lastUpdated: "2025-09-01"
}
```

### 注意事項
- `keywords` は現在未使用です。
- `link` を `"#"` にするとリンク先はありません。
- 教材に問題がある場合は `issueFound` を `true` にすると、ページの「問題発生中」欄に警告マークが表示されます。
- `lastUpdated`（最終更新日）は手動で設定してください。
