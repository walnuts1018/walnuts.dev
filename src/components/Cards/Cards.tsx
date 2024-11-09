import {
  chocoMintTheme,
  githubTheme,
  hatenaTheme,
  pinkskyTheme,
  zennTheme,
  Card,
} from "./Card";
import { cn } from "@/lib/utils";

export default function Cards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center lg:justify-start gap-8 w-full",
        className
      )}
    >
      <Card
        title="walnuts1018/infra"
        description="Kubernetesのインフラ構成を管理するリポジトリです。"
        theme={githubTheme}
        href="https://github.com/walnuts1018/infra"
        icon="github"
      />
      <Card
        title="walnuts1018/code-server-operator"
        description="coder/code-serverをKubernetesのCRDとして管理するOperatorです。"
        theme={githubTheme}
        href="https://github.com/walnuts1018/code-server-operator "
        icon="github"
      />
      <Card
        title="お絵描き伝言ゲーム"
        description="NF2023で開催したお絵描き伝言ゲームの結果発表ページです。"
        href="https://oekaki.walnuts.dev/public"
        theme={chocoMintTheme}
      />
      <Card
        title="ESP32と赤外線LEDを用いてエアコンを遠隔操作する"
        href="https://zenn.dev/walnuts/articles/300213a4ceee19"
        theme={zennTheme}
        icon="zenn"
      />
      <Card
        title="はてなブログやGigaViewerで使われている画像変換プロキシをEC2からEKSに移行しました"
        href="https://developer.hatenastaff.com/entry/2024/08/29/124236"
        theme={hatenaTheme}
        icon="hatena"
      />
      <Card
        title="walnuts1018/k8s-badge"
        description="README用に、k8sクラスタのstatus badgeを生成するActionです。"
        theme={githubTheme}
        href="https://github.com/walnuts1018/k8s-badge"
        icon="github"
      />
      <Card
        title="プログラミングサークルの新歓を支える技術"
        description="Kyoto Tech Talk #5で発表しました。"
        theme={chocoMintTheme}
        href="https://speakerdeck.com/walnuts1018/puroguramingusakurunoxin-huan-wozhi-eruji-shu"
      />
      <Card
        title="cybozu-go/pona"
        description="サイボウズ株式会社サマーインターンで開発したEgress Gatewayです。"
        theme={githubTheme}
        href="https://github.com/cybozu-go/pona"
        icon="github"
      />
      <Card
        title="walnuts1018/wakatime-to-slack"
        theme={githubTheme}
        href="https://github.com/walnuts1018/wakatime-to-slack-profile"
        icon="github"
        description="Wakatimeから今書いている言語をリアルタイムで取得し、Slackのステータスに反映します。"
      />
      <Card
        title="DIGI-CON HACKATHON 2023"
        theme={chocoMintTheme}
        href="https://x.com/walnuts1018/status/1707774804466823674?s=20"
        description="DIGI-CON HACKATHON 2023でジャンプ+賞をいただきました。"
      />
      <Card
        title="HedgeDocをKubernetesに構築する"
        theme={pinkskyTheme}
        href="https://hedgedoc.walnuts.dev/s/rhYgE94FN"
      />
      <Card
        title="walnuts1018/machine-status-api"
        description="ラズパイと自作回路を組み合わせ、遠隔でサーバーの電源を操作するAPIです。"
        theme={githubTheme}
        href="https://github.com/walnuts1018/machine-status-api"
        icon="github"
      />
      <Card
        title="walnuts1018/OpenChokin"
        theme={githubTheme}
        href="https://github.com/walnuts1018/OpenChokin"
        icon="github"
        description="【開発中】貯金を公開するサービスです。 / 鴨川ハッカソンで優秀賞をいただきました。"
      />
    </div>
  );
}