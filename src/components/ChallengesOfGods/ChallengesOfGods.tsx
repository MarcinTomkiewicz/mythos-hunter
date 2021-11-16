import { FunctionComponent } from "react";
import TopBar from "../atoms/TopBar/TopBar";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";

const ChallengesOfGods: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  return (
    <>
      <TopBar title={languagePacks.headers?.challenges[langCode]} />
      <div className="content__wrapper">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi
        fuga tenetur quidem voluptatem distinctio voluptas a libero eveniet enim
        debitis excepturi perspiciatis rerum, aliquid obcaecati esse soluta
        consequatur accusamus!
      </div>
    </>
  );
};

export default ChallengesOfGods;
