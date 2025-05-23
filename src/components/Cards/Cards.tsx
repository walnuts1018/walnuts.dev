import { chocoMintTheme, githubTheme, Card } from "./Card";
import { cn } from "@/lib/utils";

export default function Cards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-wrap justify-center gap-8 lg:justify-start",
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
        title="walnuts1018/k8s-badge"
        description="README用に、k8sクラスタのstatus badgeを生成するActionです。"
        theme={githubTheme}
        href="https://github.com/walnuts1018/k8s-badge"
        icon="github"
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
