
# マイクラコース MakeCode 完成コード一覧
by まいく　2026年10月12日

## フォルダ構成
- `index.html`: ルート直下
- `styles/`: CSSファイル格納フォルダ
- `js/`: JavaScriptファイル格納フォルダ：教材データと表の生成

## 情報更新手順
- このプロジェクトを手元にpullする。
  - corekaraKIDS（これからKIDSの生徒用GitHubアカウント）に、collaboratorとして追加してもらう。
  - Gmailに届くinvitationをacceptする。
- `js/index.js` の先頭にある `materials_chuukyuu` と `materials_joukyuu` の **JSON 配列**を編集して、中級・上級教材の情報を書き込む。
  - プログラムのリンクは、[MakeCodeエディタ](https://minecraft.makecode.com/)で**共有マークを押して**取得できます。**エディタのリンクは使えません。**
  - 内容はページの表に自動反映されます。
  - jsはLiveViewerなどを使わなくても動きます。
- プッシュしてページに反映させる（https://corekarakids.github.io/MakeCode_LinkList/）

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
- `lastUpdated`（最終更新日）は**手動で設定してください。**
