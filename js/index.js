// 教材データをJSON形式の配列として定義
const materials_chuukyuu = [
  {
    id: "MC-01",
    name: "対戦（たいせん）ゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-02",
    name: "カスタム武器",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-03",
    name: "カラフルタワー",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-04",
    name: "ピラミッド",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-05",
    name: "ビル",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-06",
    name: "ブロックくずし",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-07",
    name: "クイズゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-08",
    name: "モンスターバトル",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-09",
    name: "だるまさん",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-10",
    name: "たからさがし",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-11",
    name: "パズルゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-12",
    name: "水族館",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-13",
    name: "発掘ゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-14",
    name: "まとあてゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-15",
    name: "陣取りゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-16",
    name: "タイムアタック",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "MC-17",
    name: "リアルタイムアスレ",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  }
];
const materials_joukyuu = [
  {
    id: "PY-01",
    name: "脱出ゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-02",
    name: "かいだんダッシュ",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-03",
    name: "ミニアスレチック",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-04",
    name: "サバイバルゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-05",
    name: "脱獄ゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-06",
    name: "ランダムタイムアタック",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-07",
    name: "タイムレース",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-08",
    name: "タワーディフェンス",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-09",
    name: "色当てゲーム",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-10",
    name: "マグマアスレチック",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-11",
    name: "めいろ",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-12",
    name: "モンスターラッシュ",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-13",
    name: "ブロック集め",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  },
  {
    id: "PY-14",
    name: "なわとび",
    keywords: "",
    link: "#",
    issueFound: false,
    lastUpdated: "2025-09-01"
  }
];

// 初期表示で関数を利用
createMaterialsTableForId(materials_chuukyuu, "table-chuukyuu")
createMaterialsTableForId(materials_joukyuu, "table-joukyuu")

// 指定IDの要素に教材テーブルを生成・追加する関数
function createMaterialsTableForId(materials, tableId) {
    const container = document.getElementById(tableId);
    if (!container) return;

    const table = document.createElement("table");
    table.className = "materials-table";

    // thead生成
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>教材名</th>
            <th>完成コード</th>
            <th>問題発生中</th>
            <th>最終更新</th>
        </tr>
    `;
    table.appendChild(thead);

    // tbody生成
    const tbody = document.createElement("tbody");
    materials.forEach(material => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${material.id}</td>
            <td>${material.name}</td>
            <td class="tdCenter">
                <a class="mcBtn" href="${material.link}">MakeCode</a>
            </td>
            <td class="tdCenter" style="font-size: 1.5em;">
                ${material.issueFound ? "⚠️" : ""}
            </td>
            <td>${material.lastUpdated}</td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    container.innerHTML = "";
    container.appendChild(table);
}